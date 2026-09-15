export default function LocaleDateString({ date }: { date: Date }) {
  return new Intl.DateTimeFormat("de-DE", {
    timeZone: "UTC",
    second: "2-digit",
    minute: "2-digit",
    hour: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}
