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

export type Competition = Awaited<ReturnType<typeof getCompetitions>>[number];

// Every Math Competition the club has a data file for, newest first.
export async function getCompetitions() {
  const competitions = await getCollection('competitions');
  return competitions.map((entry) => entry.data).sort((a, b) => b.year - a.year);
}

// Every Past Math Competition, newest first.
export async function getPastCompetitions() {
  return (await getCompetitions()).filter((competition) => competition.stage === 'past');
}

// The Math Competition the Math Competition page is about: the current one, or the last one until the next is added.
export async function getShownCompetition() {
  return (await getCurrentCompetition()) ?? (await getPastCompetitions())[0];
}

// Past Math Competitions with their own archive page at /math-competition/<year>. The last one stays on the
// Math Competition page, and moves to its own page once the next Math Competition is added.
export async function getArchivedCompetitions() {
  const shown = await getShownCompetition();
  return (await getPastCompetitions()).filter((competition) => competition.year !== shown?.year);
}

// Where a Math Competition lives on the site: the Math Competition page, or its archive page.
export async function getCompetitionUrl() {
  const shown = await getShownCompetition();
  return (competition: { year: number }) =>
    competition.year === shown?.year ? '/math-competition' : `/math-competition/${competition.year}`;
}

// The Math Competition runs once a year, so a year's number comes from the newest one that knows its own.
// e.g. 2026 is the 7th, so 2025 was the 6th.
export function editionOf(competition: Competition, competitions: Competition[]) {
  if (competition.edition) return competition.edition;
  const numbered = competitions.find((other) => other.edition);
  return numbered?.edition ? numbered.edition - (numbered.year - competition.year) : undefined;
}

// Sample questions we've published from a past year's exam.
export const sampleQuestions: Record<number, string> = { 2025: '/sample-questions-2025.pdf' };

// Where the Entry Fees went, in a sentence. Says nothing until the Beneficiary is confirmed.
export function howFeesWent(competition: Competition) {
  if (!competition.beneficiary?.confirmed) return undefined;
  const name = competition.beneficiary.name;
  if (competition.paymentMethod === 'direct-donation') return `Families donated their entry fees straight to ${name}.`;
  if (competition.beneficiary.inKindDonation)
    return `Entry fees were collected through BASIS Chandler and given to ${name} as donated goods.`;
  return `Entry fees went to ${name}, through BASIS Chandler.`;
}

// 1250 → "$1,250".
export const formatDollars = (amount: number) =>
  amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: amount % 1 ? 2 : 0 });

// The Theme the Math Competition page wears: the current Math Competition's once it has one (a name or artwork),
// otherwise the last one's, so the page keeps its look between Math Competitions.
export async function getCompetitionTheme() {
  const current = await getCurrentCompetition();
  if (current && (current.theme.name || current.theme.artwork)) return current.theme;
  return (await getPastCompetitions())[0]?.theme ?? current?.theme;
}

// 56 → "56", or 50 with competitorsPlus → "50+".
export const formatCompetitors = (totals: { competitors?: number; competitorsPlus: boolean }) =>
  totals.competitors === undefined ? undefined : `${totals.competitors}${totals.competitorsPlus ? '+' : ''}`;
