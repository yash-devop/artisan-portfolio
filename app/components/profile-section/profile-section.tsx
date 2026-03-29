import Image from "next/image";
import { LinesWrapper } from "../LinesWrapper";
import { IconRosetteDiscountCheck } from "@tabler/icons-react";
export const ProfileSection = () => {
  return (
    <div className="h-44 flex flex-col md:flex-row items-center justify-between border-b border-border">
      <div className="w-full h-full flex items-end">
        <div className="border-r border-border w-fit shrink-0">
          <Image
            src={
              "https://pbs.twimg.com/profile_images/1933830267388706816/DHs_-HrA_400x400.jpg"
            }
            alt="pfp"
            width={175}
            height={175}
            objectFit="cover"
            className="rounded-full shrink-0 w-[130px] h-[130px] md:w-[175px] md:h-[175px]"
          />
        </div>
        <div className="w-full flex flex-col">
          <div className="h-8 w-full px-4 flex items-end justify-start gap-2 ">
            <span className="text-sm font-medium text-start text-neutral-800 font-mono select-none pb-1">
              text-2xl font-medium text-neutral-700
            </span>
          </div>
          <div className="h-8 w-full px-4 flex items-center justify-start gap-2 border-y border-border">
            <span className="text-2xl font-medium tracking-tight text-start text-zinc-50">
              Yash Kamble
            </span>
            <IconRosetteDiscountCheck
              size={35}
              className="text-black fill-blue-400"
            />
          </div>
          <div className="h-8 w-full px-4 flex items-center justify-start gap-2">
            <span className="text-neutral-600 text-sm">
              Full Stack Engineer
            </span>
          </div>
        </div>
      </div>
      <div className="h-full border-y md:border-y-0 md:border-l border-border w-full md:w-[500px] flex items-center justify-center">
        <span>right</span>
      </div>
    </div>
  );
};
