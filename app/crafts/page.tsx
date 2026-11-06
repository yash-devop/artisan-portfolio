import type { Metadata } from "next";
import Link from "next/link";
import { SIDEBAR_DATA } from "@/common/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { CRAFT_SEO, craftMetadata } from "@/lib/crafts-seo";
import {
  breadcrumbSchema,
  craftsCollectionSchema,
} from "@/lib/structured-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = craftMetadata("/crafts");

export default function CraftsPage() {
  return (
    <>
      <JsonLd
        data={[
          craftsCollectionSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Crafts", path: "/crafts" },
          ]),
        ]}
      />
      <div className="mx-auto w-full max-w-4xl p-6 md:p-10">
      <h1 className="font-instrument-serif text-4xl italic">Crafts</h1>
      <p className="mt-3 max-w-xl text-sm text-neutral-400">
        Handcrafted UI components, interaction studies, and daily frontend
        experiments.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {SIDEBAR_DATA.map(({ id, group, routes }) => (
          <section key={id}>
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              {group.name}
            </h2>
            <ul className="mt-4 space-y-3">
              {routes.map((route, idx) => {
                const path = `${route.slug}${route.href}`;
                const page = CRAFT_SEO[path as keyof typeof CRAFT_SEO];

                return (
                  <li key={route.id}>
                    <Link
                      href={path}
                      className={cn(
                        `group flex items-center justify-between border-b border-white/10 pb-3 text-sm text-neutral-300 transition-colors hover:text-white`,
                        idx === routes.length - 1 && "border-none",
                      )}
                    >
                      <span className="text-xs">{route.name}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 group-hover:text-neutral-400">
                        {page?.index === false ? "In progress" : "View"}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
      </div>
    </>
  );
}
