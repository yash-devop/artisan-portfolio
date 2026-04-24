import { IconBrandX, IconMail } from "@tabler/icons-react";
import { DottedUnderline } from "./components/dotted-underline";

export default function Home() {
  return (
    <div className="pt-1">
      <div className="tracking-tight leading-[1.57] text-neutral-600">
        <p>
          A Frontend Developer based in India , who loves to give life to his
          thoughts through design and code.
        </p>
        <p className="">
          I'm mostly active on
          <a
            href=""
            target="_blank"
            className="relative text-black font-medium px-1 space-x-0.5"
          >
            <IconBrandX size={16} className="shrink-0 inline-block mb-1" />
            Twitter
            <DottedUnderline />
          </a>
          , where I post mostly about my content and arts.
        </p>
        <p className="mt-2">
          You can reach out to me via{" "}
          <a
            href="mailto:your@email.com"
            className="text-black font-medium pr-0.5 space-x-0.5 relative"
          >
            <IconMail size={18} className="shrink-0 inline-block mb-0.5" />
            Email
            <DottedUnderline />
          </a>{" "}
          or through
          <a
            href=""
            target="_blank"
            className="relative text-black font-medium px-1 inline-flex"
          >
            Linkedin.
            <DottedUnderline />
          </a>
        </p>
      </div>
      <div className="mt-4 border-y border-neutral-300 h-8 w-full bg-[repeating-linear-gradient(45deg,#afaeae_0px,#ffffff_1px,transparent_8px,transparent_7px)]" />
    </div>
  );
}
