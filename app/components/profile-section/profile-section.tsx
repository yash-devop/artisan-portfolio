import Image from "next/image";
import { LinesWrapper } from "../LinesWrapper";

export const ProfileSection = () => {
  return (
    <LinesWrapper
      fullBorder="b"
      className="h-44 flex items-center justify-between"
    >
      <div className="w-full h-full flex items-end">
        <LinesWrapper fullBorder="r" className="w-fit!">
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
        <div>
          <span>Ends</span>
        </div>
      </div>
      <LinesWrapper fullBorder="l" className="w-full h-full">
        <span>right</span>
      </LinesWrapper>
    </LinesWrapper>
  );
};
