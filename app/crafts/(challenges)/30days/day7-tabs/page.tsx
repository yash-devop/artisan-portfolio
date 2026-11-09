import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const TABS_ITEMS = [
  { value: "overview", label: "Overview", content: "High-level summary." },
  { value: "activity", label: "Activity", content: "Recent events." },
  { value: "settings", label: "Settings", content: "Preferences." },
];

function TabsDemo({ variant }: { variant: "pill" | "line" }) {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
        {variant}
      </p>
      <Tabs defaultValue="overview" variant={variant}>
        <TabsList className={"mx-0"}>
          {TABS_ITEMS.map((item) => (
            <TabsTrigger key={item.value} value={item.value}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS_ITEMS.map((item) => (
          <TabsContent
            key={item.value}
            value={item.value}
            className="text-sm text-muted-foreground"
          >
            {item.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default function Day7Tabs() {
  return (
    <BlockWrapper className="flex-col items-center justify-center gap-12 p-6 md:flex-col">
      <TabsDemo variant="pill" />
      <TabsDemo variant="line" />
    </BlockWrapper>
  );
}
