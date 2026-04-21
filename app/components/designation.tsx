import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";

export const Designation = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="size-10 rounded-full bg-linear-to-tr from-white border border-neutral-100 to-indigo-500 shrink-0" />
        <div className="flex flex-col leading-4  select-none">
          <div className="flex items-center gap-x-1.5">
            <h2 className="text-lg font-medium">Yash Kamble</h2>
            <IconRosetteDiscountCheckFilled className="fill-indigo-600 size-5" />
          </div>
          <h2 className="text-neutral-500">Frontend Engineer</h2>
        </div>
      </div>
      <div className="flex items-center gap-2 font-instrument-serif italic">
        <div className="bg-emerald-600 size-2 mt-0.5 rounded-full" />
        <span>Available for work</span>
      </div>
    </div>
  );
};
