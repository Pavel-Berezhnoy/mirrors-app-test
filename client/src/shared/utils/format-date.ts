import { differenceInDays, formatRelative, format } from "date-fns";

export function formatRelativeDate(date: string) {
  return Math.abs(differenceInDays(date, new Date())) < 6
      ? formatRelative(date, new Date())
      : format(date, `dd.MM.yyyy hh:mm aa`)
}