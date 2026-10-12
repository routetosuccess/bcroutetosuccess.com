import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One JSON file per Math Competition in src/content/competitions/, named by year (2026.json).
// Terms like Stage, Payment Method and Walk-in are defined in CONTEXT.md.
const competitions = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/competitions' }),
  schema: z.object({
    year: z.number().int(),
    // Which yearly Math Competition this is, e.g. 7 for the "7th Annual".
    edition: z.number().int().positive().optional(),
    // Another group running the Math Competition alongside the club, e.g. Mu Alpha Theta.
    coHost: z.string().optional(),
    // Past competitions may not have a confirmed date.
    date: z.coerce.date().optional(),
    stage: z.enum(['upcoming', 'registration-open', 'registration-closed', 'past']),
    // Start and end time as written on the flyer, e.g. "9 a.m. – 12:30 p.m.".
    time: z.string().optional(),
    // Who can enter, e.g. "Grades 1–5".
    grades: z.string().optional(),
    location: z.string().optional(),
    // The Divisions this Math Competition runs. Most years run all three; 2026 runs only Divisions 1 and 2.
    divisions: z
      .array(
        z.object({
          name: z.string(),
          // e.g. "Grades 1–2". Left out when we don't know which grades a Division covered.
          grades: z.string().optional(),
        }),
      )
      .default([{ name: 'Division 1' }, { name: 'Division 2' }, { name: 'Division 3' }]),
    // In US dollars. Left out until the club sets it.
    entryFee: z.number().nonnegative().optional(),
    paymentMethod: z.enum(['school-payment', 'direct-donation']).optional(),
    beneficiary: z
      .object({
        name: z.string(),
        // Only name the Beneficiary on the site once the Club Adviser and the Beneficiary agree.
        confirmed: z.boolean(),
        inKindDonation: z.boolean().default(false),
      })
      .optional(),
    theme: z
      .object({
        name: z.string().optional(),
        // Accent colour layered on top of the club's light blue. With artwork, use the artwork's main colour.
        color: z.string().optional(),
        // Which set of artwork in src/components/themes/ to draw on the Math Competition page.
        artwork: z.enum(['under-the-sea']).optional(),
      })
      .default({}),
    // Left out until the club decides whether this competition accepts Walk-ins.
    walkIns: z.boolean().optional(),
    registration: z
      .object({
        // The exact opening date. Leave it out and use opensIn while the date isn't set yet.
        opens: z.coerce.date().optional(),
        // Roughly when registration opens, e.g. "November", shown as "Registration opening in November".
        opensIn: z.string().optional(),
        // Left out until the club picks a closing date.
        closes: z.coerce.date().optional(),
        // The Google Form provided by the club.
        formUrl: z.string().url().optional(),
      })
      .optional(),
    sponsors: z
      .array(
        z.object({
          name: z.string(),
          logo: z.string().optional(),
          url: z.string().url().optional(),
        }),
      )
      .default([]),
    // Totals only, confirmed by the school. Never anything that identifies a child.
    totals: z
      .object({
        competitors: z.number().int().optional(),
        schools: z.number().int().optional(),
        raised: z.number().optional(),
      })
      .optional(),
  }),
});

// One JSON file per Event other than the Math Competition, in src/content/events/.
const events = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/events' }),
  schema: z.object({
    name: z.string(),
    // Left out until the date is set.
    date: z.coerce.date().optional(),
    // Whether the club runs the Event or takes part in someone else's. Left out when not confirmed.
    role: z.enum(['runs', 'takes-part']).optional(),
    // A sentence or two about the Event, approved by the club.
    summary: z.string().optional(),
    // Smaller Events are grouped together under "Smaller Events" instead of getting their own section and menu link.
    smaller: z.boolean().default(false),
  }),
});

export const collections = { competitions, events };
