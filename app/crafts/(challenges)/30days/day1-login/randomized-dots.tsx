"use client";

import { useEffect, useRef } from "react";

const CELL_SIZE = 1; // CSS px
const GAP = 2; // CSS px
const PITCH = CELL_SIZE + GAP;
const MAX_DPR = 2;

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

// Every cell's phase/speed/min/max is derived from a hash of its grid
// coordinates, so there is no per-cell data on the CPU or in GPU buffers.
const FRAG = `
precision highp float;
uniform float u_dpr;
uniform float u_time;

float hash(vec2 p, float seed) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973) + seed);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec2 p = gl_FragCoord.xy / u_dpr;           // CSS pixels
  vec2 cell = floor(p / ${PITCH.toFixed(1)});
  vec2 local = p - cell * ${PITCH.toFixed(1)};

  if (local.x >= ${CELL_SIZE.toFixed(1)} || local.y >= ${CELL_SIZE.toFixed(1)}) {
    gl_FragColor = vec4(0.0);
    return;
  }

  float phase = hash(cell, 0.0)  * 6.2831853;
  float speed = 0.3  + hash(cell, 17.0) * 1.7;
  float lo    = 0.02 + hash(cell, 41.0) * 0.08;
  float hi    = 0.2  + hash(cell, 73.0) * 0.5;

  float wave = (sin(u_time * speed + phase) + 1.0) * 0.5;
  float a = mix(lo, hi, wave);

  // premultiplied alpha, white
  gl_FragColor = vec4(vec3(a), a);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  if (gl.isContextLost()) return null;
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    if (log) console.error(log);
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
      premultipliedAlpha: true,
    });
    if (!gl || gl.isContextLost()) return; // falls back to the plain background colour

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // One oversized triangle covers the whole viewport.
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uDpr = gl.getUniformLocation(program, "u_dpr");
    const uTime = gl.getUniformLocation(program, "u_time");

    gl.clearColor(0, 0, 0, 0);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let rafId = 0;
    let visible = true;
    let dpr = 1;
    const start = performance.now();

    const draw = (now: number) => {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uDpr, dpr);
      gl.uniform1f(uTime, reducedMotion ? 0 : (now - start) * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      draw(now);
      rafId = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (reducedMotion || rafId || !visible) return;
      rafId = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const resize = () => {
      dpr = Math.min(
        Math.max(1, Math.round(window.devicePixelRatio || 1)),
        MAX_DPR,
      );
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      if (reducedMotion || !rafId) draw(performance.now());
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // Stop rendering while scrolled out of view.
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) startLoop();
      else stopLoop();
    });
    intersectionObserver.observe(canvas);

    const onContextLost = (e: Event) => {
      e.preventDefault();
      stopLoop();
    };
    canvas.addEventListener("webglcontextlost", onContextLost);

    resize();
    startLoop();

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      canvas.removeEventListener("webglcontextlost", onContextLost);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full opacity-30 bg-radial from-10% from-transparent to-black/90"
      aria-hidden="true"
    />
  );
}
