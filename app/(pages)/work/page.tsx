import { WORK } from "@/app/common/constants";
import { WorkRow } from "@/app/components/work-section/work-row";

export default function WorkPage() {
  return (
    <div className="pt-8 flex flex-col gap-y-6">
      {WORK.map((workUnit, idx) => {
        return <WorkRow key={workUnit.id} {...workUnit} idx={idx} />;
      })}
    </div>
  );
}
