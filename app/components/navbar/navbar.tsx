import { LinesWrapper } from "../LinesWrapper";
import { NavList } from "./nav-list";

export const Navbar = async () => {
  return (
    <LinesWrapper fullBorder="y" className="h-12 px-8 mt-2">
      <nav className="flex items-center justify-end w-full gap-x-4 tracking-[-0.2%]">
        <NavList />
      </nav>
    </LinesWrapper>
    // <header className="relative h-12 flex items-center justify-center w-full px-8 before:content-[''] before:absolute before:w-screen before:h-px before:bg-border before:top-0 mt-2 after:content-[''] after:absolute after:w-screen after:h-px after:bg-border after:bottom-0">
    //   <nav className="flex items-center justify-end w-full gap-x-4 tracking-[-0.2%]">
    //     <NavList />
    //   </nav>
    // </header>
  );
};
