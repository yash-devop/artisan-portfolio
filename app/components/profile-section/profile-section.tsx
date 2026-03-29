import Image from "next/image";
import { LinesWrapper } from "../LinesWrapper";
import { IconRosetteDiscountCheck } from "@tabler/icons-react";
export const ProfileSection = () => {
  return (
    <LinesWrapper
      fullBorder="b"
      className="h-44 flex items-center justify-between"
    >
      <div className="w-full h-full flex items-end">
        <LinesWrapper fullBorder="r" className="w-fit! shrink-0">
          <Image
            src={
              "https://pbs.twimg.com/profile_images/1933830267388706816/DHs_-HrA_400x400.jpg"
            }
            alt="pfp"
            width={175}
            height={175}
            objectFit="cover"
            className="rounded-full shrink-0"
          />
        </LinesWrapper>
        <div className="w-full flex flex-col">
          <LinesWrapper fullBorder="t" className="h-12 w-full px-4">
            <div className="flex items-center justify-start w-full gap-2">
              <span className="text-2xl font-medium tracking-tight text-start text-zinc-50">
                Yash Kamble
              </span>
              <IconRosetteDiscountCheck
                size={35}
                className="text-black fill-blue-400"
              />
            </div>
          </LinesWrapper>
          <LinesWrapper fullBorder="t" className="h-8 w-full px-4">
            <div className="flex items-center justify-start w-full gap-2">
              <span className="text-neutral-500 text-sm">
                Full Stack Engineer
              </span>
            </div>
          </LinesWrapper>
        </div>
      </div>
      <LinesWrapper fullBorder="l" className="w-[500px]! h-full">
        <span>right</span>
      </LinesWrapper>
    </LinesWrapper>
  );
};
