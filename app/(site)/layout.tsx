import { Navbar } from "@/components/navigation/navbar";
import { Designation } from "@/features/home";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-2xl mx-auto w-full px-4 pt-8">
      <header>
        <Navbar />
        <Designation />
      </header>
      <main>{children}</main>
    </div>
  );
}
