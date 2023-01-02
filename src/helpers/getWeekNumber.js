/**
 * Calculates the week number for a given date.
 * @param {Date} d - The date to calculate the week number for. Defaults to the current date.
 * @returns {number} The week number for the given date.
 */
export default function getWeekNumber(d = new Date()) {
  if (!(d instanceof Date)) {
    throw new Error("Invalid date: expected a Date object");
  }

  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));

  const ONE_DAY_IN_MS = 86400000;
  const ONE_WEEK_IN_DAYS = 7;
  const UTC_OFFSET = 4;
  const SUNDAY = 0;

  if (d.getUTCDay() === SUNDAY) {
    d.setUTCDate(d.getUTCDate() + ONE_WEEK_IN_DAYS);
  }

  d.setUTCDate(d.getUTCDate() + UTC_OFFSET - (d.getUTCDay() || ONE_WEEK_IN_DAYS));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / ONE_DAY_IN_MS + 1) / ONE_WEEK_IN_DAYS);
  return weekNo;
}