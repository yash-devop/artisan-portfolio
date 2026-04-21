export const DottedUnderline = () => {
  return (
    <svg
      className="pointer-events-none absolute h-1 -bottom-0.5 left-0 w-full text-neutral-400"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="_r_2_" width="6" height="4" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="2" r="1" fill="currentColor"></circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#_r_2_)"></rect>
    </svg>
  );
};
