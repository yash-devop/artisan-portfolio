import { IconStack2 } from "@tabler/icons-react";

export const IsometricIconStack = () => {
  const ICONS_CARDS = Array.from({ length: 3 });
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-48">
      {ICONS_CARDS.map((_, idx) => {
        const isFront = idx === ICONS_CARDS.length - 1;
        const depth = ICONS_CARDS.length - 1 - idx;
        const opacity = Math.max(0.16, 1 - depth * 0.55);
        return (
          <div
            key={idx}
            style={{
              transform: `translate(calc(${idx * 37.5}% - 37.5%), calc(${idx * 8.75}% + 7.5%)) skewY(-18deg)`,
              opacity,
            }}
            className="absolute border border-neutral-500 rounded-xl size-20 bg-neutral-900 flex items-center justify-center"
          >
            <div
              style={{
                transform: `translate(5%, 3.75%)`,
              }}
              className="border border-neutral-500 rounded-xl size-20 bg-neutral-900/90 flex items-center justify-center"
            >
              {isFront ? <IconStack2 size={24} /> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};
