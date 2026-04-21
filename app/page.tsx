import { DottedUnderline } from "./components/dotted-underline";

export default function Home() {
  return (
    <div className="pt-1">
      <div className="tracking-tight leading-[1.57] text-neutral-600">
        <p>
          A Frontend Developer based in India , who loves to give life to his
          thoughts through his design and code.
        </p>
        <div>
          <span>I'm mostly active on </span>
          <div className="relative w-fit inline">
            <a
              href=""
              target="_blank"
              className="text-neutral-400 font-instrument-serif italic font-light"
            >
              Twitter/x
            </a>
            <DottedUnderline />
          </div>
          <span className="pl-1">
            where i post mostly about my content and arts.
          </span>
        </div>
      </div>
    </div>
  );
}
