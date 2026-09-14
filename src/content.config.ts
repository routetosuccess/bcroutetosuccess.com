import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One JSON file per Math Competition in src/content/competitions/, named by year (2026.json).
// Terms like Stage, Payment Method and Walk-in are defined in CONTEXT.md.
const competitions = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/competitions' }),
  schema: z.object({
    year: z.number().int(),
    // Past competitions may not have a confirmed date.
    date: z.coerce.date().optional(),
    stage: z.enum(['upcoming', 'registration-open', 'registration-closed', 'past']),
    location: z.string().optional(),
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
        // Accent colour layered on top of the club's light blue.
        color: z.string().optional(),
      })
      .default({}),
    // Left out until the club decides whether this competition accepts Walk-ins.
    walkIns: z.boolean().optional(),
    registration: z
      .object({
        opens: z.coerce.date(),
        closes: z.coerce.date(),
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

export const collections = { competitions };
