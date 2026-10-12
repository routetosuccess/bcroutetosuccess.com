import { getCollection } from 'astro:content';

// The id of the "Smaller Events" section on the Events page, which the menu links to.
export const smallerEventsId = 'smaller-events';

// Every Event, split into the main ones (each with its own section and menu link) and the smaller ones.
// Dated Events come first, soonest first; then undated ones by name.
export async function getEvents() {
  const events = (await getCollection('events'))
    .map((entry) => ({ id: entry.id, ...entry.data }))
    .sort((a, b) => {
      if (a.date && b.date) return a.date.getTime() - b.date.getTime();
      if (a.date || b.date) return a.date ? -1 : 1;
      return a.name.localeCompare(b.name);
    });

  return {
    main: events.filter((event) => !event.smaller),
    smaller: events.filter((event) => event.smaller),
  };
}
