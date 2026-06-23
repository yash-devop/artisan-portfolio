import { EXPERIENCES } from "@/app/common/constants";

export const ExperienceSection = ({ slice }: { slice?: number }) => {
  return (
    <div className="flex flex-col gap-16">
      {EXPERIENCES &&
        EXPERIENCES.slice(0, slice).map((experience) => (
          <div
            key={`${experience.company}-${experience.year}`}
            className="grid grid-cols-1 md:grid-cols-12"
          >
            <div className="col-span-4 font-mono text-neutral-500">
              <div className="flex flex-row md:flex-col justify-between sm:justify-between items-center md:items-start gap-1.5 pt-1.5 sticky top-3">
                <span className="text-xs">{experience.year}</span>
                <div className="text-xs font-semibold text-neutral-500">
                  {experience.location}
                </div>
              </div>
            </div>

            <div className="col-span-8">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-black">
                  {experience.company}
                </span>

                <span className="text-xs text-neutral-600 uppercase font-mono pt-0.5">
                  {experience.role}
                </span>
              </div>
              {experience.stack ? (
                <div className="[&_svg]:size-5 flex items-center gap-4 pt-4">
                  {experience.stack.map((StackIcon, idx) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    return <StackIcon key={idx} />;
                  })}
                </div>
              ) : null}
              <div className="pt-4 text-neutral-600 text-sm font-normal">
                <ol className="space-y-4">
                  {experience.description?.map((description) => {
                    return (
                      <li
                        key={description}
                        className="before:content-['•'] before:mr-1 before:text-neutral-500"
                      >
                        {description}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
