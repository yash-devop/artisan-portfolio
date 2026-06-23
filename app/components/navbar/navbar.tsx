import { NavList } from "./nav-list";

export const Navbar = async () => {
  return (
    <nav className="flex items-center justify-between w-full tracking-[-0.2%] gap-2 py-4">
      <div className="flex items-center gap-2 font-instrument-serif italic ">
        <div className="bg-emerald-600 size-2 mt-0.5 rounded-full" />
        <span className="font-medium text-base">Available for work</span>
      </div>
      <NavList />
    </nav>
  );
};
