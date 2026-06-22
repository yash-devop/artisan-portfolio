import { IconBrandLinkedin, IconBrandX, IconMail } from "@tabler/icons-react";
import { CopyEmail } from "./components/copy-email";
import { DottedUnderline } from "./components/dotted-underline";
import { SectionWrapper } from "./components/section-wrapper";
import { TechStackSection } from "./components/tech-stack-section/tech-stack";

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
            className="relative text-black font-medium px-1 space-x-0.5"
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
            className="text-black font-medium pr-0.5 space-x-0.5 relative"
          >
            <IconMail size={18} className="shrink-0 inline-block mb-0.5" />
            Email
            <DottedUnderline />
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/yash-dev/"
            className="text-black font-medium pr-0.5 space-x-0.5 relative"
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
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-4 font-mono text-neutral-400">
              <div className="flex flex-row md:flex-col justify-between sm:justify-between pt-1.5">
                <span className="text-xs">Feb 2025 - Jun 2026</span>
                <div className="text-xs">Turbhe , Navi Mumbai</div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-black">
                  Fyntune Solutions
                </span>
                <span className="text-sm text-neutral-">
                  Frontend Developer
                </span>
              </div>
              <div className="pt-4 text-neutral-600 text-sm font-normal">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae rem vitae tempora quibusdam expedita iste non,
                  dolore, totam perspiciatis esse ipsum beatae voluptas officiis
                  quaerat minima similique, rerum eligendi voluptates
                  reprehenderit magnam voluptatum. Ut eaque assumenda nulla
                  inventore, expedita atque mollitia nobis illum eveniet commodi
                  eius dolorum placeat enim corporis.
                </span>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
