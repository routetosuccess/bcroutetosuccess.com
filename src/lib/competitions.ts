import { getCollection } from 'astro:content';

// The current Math Competition is the newest one that isn't Past yet.
export async function getCurrentCompetition() {
  const competitions = await getCollection('competitions');
  return competitions
    .map((entry) => entry.data)
    .filter((competition) => competition.stage !== 'past')
    .sort((a, b) => b.year - a.year)[0];
}

// Dates are stored without a time, so format them in UTC to avoid showing the day before in Arizona.
export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

// "Registration opens Sunday, November 1, 2026." once the date is set, or "Registration opening in November." before then.
export function registrationOpensText(registration: { opens?: Date; opensIn?: string }) {
  if (registration.opens) return `Registration opens ${formatDate(registration.opens)}.`;
  if (registration.opensIn) return `Registration opening in ${registration.opensIn}.`;
  return undefined;
}

// "Registration is open until Saturday, November 14, 2026." or just "Registration is open." if there's no closing date yet.
export function registrationOpenText(registration: { closes?: Date }) {
  return registration.closes ? `Registration is open until ${formatDate(registration.closes)}.` : 'Registration is open.';
}

// 7 → "7th", 22 → "22nd".
export function ordinal(n: number) {
  const suffix = { one: 'st', two: 'nd', few: 'rd', other: 'th' }[new Intl.PluralRules('en-US', { type: 'ordinal' }).select(n)];
  return `${n}${suffix}`;
}

// 2 → "Two", for headings like "Two Divisions". Falls back to digits above ten.
export function countWord(n: number) {
  const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  return words[n] ?? String(n);
}
