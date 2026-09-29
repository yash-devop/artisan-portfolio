const MONTH_YEAR = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export const formatMonthYear = (date: string) =>
  MONTH_YEAR.format(new Date(date));

export const formatYear = (date: string) => new Date(date).getUTCFullYear();
