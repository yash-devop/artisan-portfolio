import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";

export const Designation = () => {
  return (
    <div className="flex items-center justify-between pt-14">
      <div className="flex items-center gap-2">
        <div className="size-12 rounded-lg bg-linear-to-tr from-white border border-neutral-200 to-indigo-500 shrink-0" />
        <div className="flex flex-col leading-4  select-none">
          <div className="flex items-center gap-x-1.5">
            <p className="text-sm md:text-base font-medium">Yash Kamble</p>
            <IconRosetteDiscountCheckFilled className="fill-indigo-600 size-5" />
          </div>
          <p className="text-neutral-500 text-sm md:text-base">
            Engineer / Freelancer
          </p>
        </div>
      </div>
    </div>
  );
};
