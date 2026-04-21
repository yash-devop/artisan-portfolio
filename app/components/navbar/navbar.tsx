import { NavList } from "./nav-list";

export const Navbar = async () => {
  return (
    <nav className="flex items-center w-full tracking-[-0.2%] gap-4 pt-4 pb-6">
      <NavList />
    </nav>
  );
};
