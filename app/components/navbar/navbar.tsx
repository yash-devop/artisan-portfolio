import { NavList } from "./nav-list";

export const Navbar = async () => {
  return (
    <nav className="flex items-center justify-end w-full gap-x-4 tracking-[-0.2%] border">
      <NavList />
    </nav>
  );
};
