import React from "react";
export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-2xl mx-auto min-h-screen pt-8 w-full px-4">
      <section className="">{children}</section>
    </main>
  );
};
