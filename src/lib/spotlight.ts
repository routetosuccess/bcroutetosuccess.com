// Which big Event the home page features: the Math Competition or any Event that isn't a Smaller Event.
// Terms are defined in CONTEXT.md.
import { getCompetitions, type Competition } from './competitions';
import { getEvents } from './events';

export type Event = Awaited<ReturnType<typeof getEvents>>['main'][number];
type Theme = Competition['theme'];

export type Spotlight = (
  | { kind: 'competition'; competition: Competition; date?: Date }
  | { kind: 'event'; event: Event; date?: Date }
) & {
  // "next" while it's coming up, "last" once it's over and nothing newer is coming up.
  when: 'next' | 'last';
};

type Item = Omit<Spotlight, 'when'> & { theme: Theme; over: boolean };

const hasTheme = (theme?: Theme) => Boolean(theme?.name || theme?.artwork);

async function getItems() {
  // Dates are stored without a time, so compare them with the start of today in UTC.
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const isOver = (date?: Date) => Boolean(date && date.getTime() < today);

  const competitions = await getCompetitions();
  const { main } = await getEvents();
  const items: Item[] = [
    ...competitions.map((competition) => ({
      kind: 'competition' as const,
      competition,
      date: competition.date,
      theme: competition.theme,
      over: competition.stage === 'past' || isOver(competition.date),
    })),
    ...main.map((event) => ({ kind: 'event' as const, event, date: event.date, theme: event.theme, over: isOver(event.date) })),
  ];
  return { items, current: items.find((item) => item.kind === 'competition' && !item.over) };
}

export async function getSpotlight(): Promise<Spotlight | undefined> {
  const { items, current } = await getItems();
  const time = (item: Item) => item.date?.getTime() ?? 0;

  // 1. While Math Competition registration is open, it leads, even if another big Event is sooner.
  if (current?.kind === 'competition' && current.competition.stage === 'registration-open') return { ...current, when: 'next' };

  // 2. Otherwise the soonest dated big Event that's still to come.
  const upcoming = items.filter((item) => item.date && !item.over).sort((a, b) => time(a) - time(b))[0];
  if (upcoming) return { ...upcoming, when: 'next' };

  // 3. A Math Competition that's been added but has no date yet.
  if (current) return { ...current, when: 'next' };

  // 4. The most recent big Event that's over, until the next one is coming up.
  const last = items.filter((item) => item.date && item.over).sort((a, b) => time(b) - time(a))[0];
  return last && { ...last, when: 'last' };
}

// The Theme the home page wears: the featured big Event's, or if it has none, the last one that had a Theme.
export async function getSpotlightTheme(spotlight?: Spotlight) {
  const own = spotlight && (spotlight.kind === 'competition' ? spotlight.competition.theme : spotlight.event.theme);
  if (hasTheme(own)) return own;
  const { items } = await getItems();
  return items
    .filter((item) => item.date && item.over && hasTheme(item.theme))
    .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0))[0]?.theme;
}
