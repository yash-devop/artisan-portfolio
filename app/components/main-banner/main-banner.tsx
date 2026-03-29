import { LinesWrapper } from "../LinesWrapper";

export const MainBanner = () => {
  return (
    <LinesWrapper
      fullBorder="b"
      className="h-56 w-full text-center flex items-center justify-center"
    >
      <span className="italic font-serif cursor-default select-none">
        Available to work
      </span>
    </LinesWrapper>
  );
};
