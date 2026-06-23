import { IconBrandLinkedin, IconBrandX, IconMail } from "@tabler/icons-react";
import { CopyEmail } from "./components/copy-email";
import { DottedUnderline } from "./components/dotted-underline";
import { SectionWrapper } from "./components/section-wrapper";
import { TechStackSection } from "./components/tech-stack-section/tech-stack";
import { ExperienceSection } from "./components/experience-section/experience-section";

export default function Home() {
  return (
    <div className="text-[15px] md:text-base pt-8">
      <div className="tracking-tight leading-[1.7] text-neutral-500 font-normal">
        <p>
          A Frontend Developer based in India , who loves to give life to his
          thoughts through design and code. I&apos;m mostly active on
          <a
            href="https://twitter.com/yash_devop"
            target="_blank"
            className="relative text-neutral-700  font-medium px-1 space-x-0.5"
          >
            <IconBrandX size={16} className="shrink-0 inline-block mb-1" />
            Twitter
            <DottedUnderline />
          </a>
          , where I post mostly about my content and arts.
        </p>

        <p>
          Have a project in mind or want to connect? Reach me through{" "}
          <a
            href="mailto:your@email.com"
            className="text-neutral-700  font-medium pr-0.5 space-x-0.5 relative"
          >
            <IconMail size={18} className="shrink-0 inline-block mb-0.5" />
            Email
            <DottedUnderline />
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/yash-dev/"
            className="text-neutral-700 font-medium pr-0.5 space-x-0.5 relative"
          >
            <IconBrandLinkedin
              size={18}
              className="shrink-0 inline-block mb-0.5"
            />
            Linkedin
            <DottedUnderline />
          </a>
        </p>
      </div>

      <div className="pt-8 h-14">
        <CopyEmail />
      </div>

      <div className="pt-10 flex flex-col">
        <SectionWrapper name="stack" className="[&_svg]:size-9">
          <TechStackSection />
        </SectionWrapper>

        <SectionWrapper name="experience">
          <ExperienceSection slice={2} />
          <button className="mt-6 border w-fit mx-auto px-3 py-1 rounded-xl">
            View more
          </button>
        </SectionWrapper>
      </div>
    </div>
  );
}
