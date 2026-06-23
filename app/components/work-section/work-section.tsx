import { WORK } from "@/app/common/constants";
import { WorkCard } from "./work-card";
import Link from "next/link";

export const WorkSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-10">
      {WORK.map((work) => {
        return (
          <WorkCard
            key={work.id}
            {...work}
            images={work.images.slice(0, 3) as [string, string, string]}
          />
        );
      })}

      <Link href={`/work`} className="justify-self-center m-auto h-fit">
        <button className="hover:bg-neutral-100  px-4 py-2 cursor-pointer text-sm h-fit m-auto ring ring-neutral-300 rounded-lg active:scale-[0.98] transition-all -translate-x-4">
          View all
        </button>
      </Link>
    </div>
  );
};
