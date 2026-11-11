---
name: Route to Success
description: The website of a student club at BASIS Chandler that runs a yearly Math Competition.
colors:
  club-blue: "#5a9bd5"
  club-blue-soft: "#ebf3fa"
  navy-ink: "#0b2e4a"
  ink-muted: "#3d5a70"
  paper: "#ffffff"
  highlighter-yellow: "#ffcb47"
typography:
  display:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 8vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 5vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "lnum"
  label:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  nav:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  footer-heading:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
  tagline:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 4vw, 1.75rem)"
    fontWeight: 800
  numeral:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "7rem"
    fontWeight: 800
    lineHeight: 1
  numeral-small:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "5rem"
    fontWeight: 800
    lineHeight: 1
  calendar-day:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1
rounded:
  focus: "0.25rem"
  skip-link: "0.5rem"
  menu-item: "0.6rem"
  tile: "0.75rem"
  card: "1rem"
  pill: "999px"
spacing:
  gutter: "1rem"
  card: "1.5rem"
  grid-gap: "1.5rem"
  page-body: "2.5rem"
  section: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.4rem"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.4rem"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  chip:
    backgroundColor: "{colors.club-blue-soft}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.9rem"
  nav-link:
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 0.8rem"
    height: "2.75rem"
  nav-link-hover:
    backgroundColor: "{colors.club-blue-soft}"
    textColor: "{colors.navy-ink}"
  nav-link-current:
    backgroundColor: "{colors.club-blue}"
    textColor: "{colors.navy-ink}"
  countdown-pill:
    backgroundColor: "{colors.highlighter-yellow}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    padding: "0.15rem 0.7rem"
  coming-soon:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.card}"
    padding: "1rem 1.25rem"
  footer:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.club-blue-soft}"
---

# Design System: Route to Success

## Overview

**Creative North Star: "The Route Map"**

The club's name is the metaphor. Every page is a stop on a route that starts with a single dot and ends at a star: the home page draws that route as a marching dotted line, the competition card is labelled "Next stop", and the footer signs off with "Every route starts with a first step." The map is drawn on a student's maths paper: soft blue graph-paper banners, navy ink outlines like the hand-drawn logo, and a yellow highlighter on the words that matter most.

The mood is bright, friendly and hand-made. The site speaks first to Parents of children aged 6 to 11, so it is cheerful and welcoming, but it stays tidy and exact enough that a Sponsor reads it as a real, organised club. It is a light, single-scheme site (`color-scheme: light`) with generous spacing, one typeface, and chunky outlined shapes that look inked rather than rendered.

Each year's Math Competition can add a Theme on top: one accent colour and one piece of artwork, used in the home page banner, the Rounds section and the Math Competition page. The Theme is a layer; the club's own look stays underneath it and returns on every other page.

**Key Characteristics:**
- Navy ink outlines (2px) on almost everything you can see or press.
- Flat surfaces lifted by solid, unblurred offset shadows, like stickers.
- Pills for anything small and clickable; 1rem rounded corners for cards.
- Graph paper behind banners; a highlighter stroke behind key words.
- The four-pointed Sparkle from the logo as the only decorative icon.
- One typeface (Raleway) at heavy weights for headings.
- A yearly Theme layered on through a single `--accent` colour and its artwork.

## Colors

A small, high-contrast palette: one blue from the logo, one navy ink for text and outlines, one highlighter yellow for emphasis, and white paper.

### Primary
- **Club Blue** (`club-blue`): taken from the club logo. Used for the current-page nav pill, graph-paper lines, dashed dividers, the footer's top band and headings, the Sparkle, and the coloured offset shadow under primary buttons. It is the default `--accent` when no Theme is set.

### Secondary
- **Highlighter Yellow** (`highlighter-yellow`): the stop you're at and the words that matter most. Used for the highlighter stroke behind a key word, the star at the end of the route, the "N days to go" countdown pill, and the Sparkle and focus ring in the navy footer.

### Neutral
- **Navy Ink** (`navy-ink`): black ink with a navy tint, like the hand-drawn logo. All body text, every outline and offset shadow, primary button fill, and the footer background.
- **Ink Muted** (`ink-muted`): secondary text such as eyebrow labels, weekdays and "coming soon" notes.
- **Club Blue Soft** (`club-blue-soft`): graph-paper ground, chips, nav hover, the Rounds band, and footer body text on navy.
- **Paper** (`paper`): page and card background; text on navy and on Theme artwork.

### Theme accent
A Math Competition's Theme colour comes from its data file (`theme.color` in `src/content/competitions/`) and is set as `--accent` on the page body. It colours the thick top edge of the competition card and, when the Theme has artwork, the background of the Rounds band. For 2026 (Under the Sea) it is the exact blue of the artwork's water, so the picture's edges disappear into it.

### Named Rules
**The Dark Text on Light Colour Rule.** Text on Club Blue and on Highlighter Yellow is always Navy Ink. White text on Club Blue doesn't have enough contrast.

**The Highlighter Rule.** Highlighter Yellow marks one thing at a time: a word, a star, a countdown, a sparkle. It is never a section background or a large fill.

## Typography

**Display Font:** Raleway (with system-ui, sans-serif)
**Body Font:** Raleway (with system-ui, sans-serif)

**Character:** One friendly geometric sans at two very different weights: 800 for headings that look confident and chunky, 400 for easy body text. Headings and body have separate CSS variables (`--font-display`, `--font-body`) so headings could get their own font later. Fonts are downloaded at build time and served from the site's own domain.

### Hierarchy
- **Display** (800, `clamp(2.25rem, 8vw, 4rem)`, 1.1): page titles (h1) in the hero and page headers. Balanced wrapping, slightly tight tracking (-0.02em).
- **Headline** (800, `clamp(1.625rem, 5vw, 2.25rem)`, 1.1): section headings (h2), usually capped near 36rem wide.
- **Title** (700, 1.25rem, 1.1): card headings (h3). Event cards use 1.5rem.
- **Lead** (400, 1.1875rem, 1.6): the intro sentence under a page title, max 38rem wide.
- **Body** (400, 1.0625rem, 1.6): everything else.
- **Label** (700, 0.875rem, 0.08em, uppercase): eyebrows above headings and labels in fact lists, in Ink Muted ("Next stop", "Who can enter").
- **Nav** (600, 0.9375rem): header links and the countdown pill.
- **Footer heading** (800, 1rem): the link-group headings in the footer, in Club Blue.
- **Tagline** (800, `clamp(1.375rem, 4vw, 1.75rem)`): the footer's closing line.
- **Numeral** (800, 7rem on wide screens, 5rem on phones): the faded corner number on Fact Cards; the 3rem calendar day number is its smaller sibling.

The Math Competition page's hero has its own stacked title in several sizes: the edition, the event name (up to 5.5rem), the school and the Theme name, with a solid navy offset text shadow (0.06em) when it sits on Theme artwork.

### Named Rules
**The Lining Numbers Rule.** Raleway's default numbers dip below the line, so the whole site sets `font-variant-numeric: lining-nums`. Dates, years and fees must look even.

**The Eyebrow Rule.** A section heading gets a short uppercase eyebrow above it that says where you are on the route ("The Math Competition", "Support the club"), not a repeat of the heading.

## Layout

Phones come first. Content sits in a single centred container, at most 68rem wide with a 1rem side gutter. Pages are a stack of full-width bands (hero, competition card, Rounds band, get-involved) separated by 2px navy rules or dashed blue lines, each with 3.5rem of vertical padding. Inner pages use a graph-paper page header, then a page body with 2.5rem above and 4rem below, and 2.5rem between sections.

Grids of cards use a 1.5rem gap. There are two breakpoints:
- **44rem:** fact and get-involved cards go from one column to two.
- **52rem:** the hero splits into text and illustration (1.2fr / 1fr), the competition card puts its calendar tile beside the text, the header becomes sticky, the logo grows from 3.25rem to 4rem tall, and the Other Events dropdown appears.

Everything you can tap (nav links, footer links, text links next to buttons) is at least 44px tall, even when the visible text is small.

The header is deliberately not sticky on phones, because the wrapped menu would cover too much of the screen. Anchor targets leave 7rem of scroll margin for the sticky header.

## Elevation & Depth

The site is flat. Depth comes only from solid, unblurred offset shadows straight down, like a sticker lifted off the page, plus navy outlines. There are no soft shadows, glows or blurs. Shadows are structural (they mark what is a card or a button) and also respond to touch: pressable things rise on hover and press down on click.

### Shadow Vocabulary
- **Sticker** (`box-shadow: 0 0.25rem 0 var(--ink)`): cards, secondary buttons, and the dropdown menu at rest.
- **Sticker lifted** (`box-shadow: 0 0.375rem 0 var(--ink)` with a 2px rise): secondary button hover. Linked cards rise 3px to a `0 0.45rem 0` shadow.
- **Blue sticker** (`box-shadow: 0 0.25rem 0 var(--club-blue)`): primary buttons, so the navy fill still shows an edge. It lifts to 0.375rem on hover and presses to 0.125rem (moving down 2px) on click.
- **Ink text shadow** (`text-shadow: 0.05em 0.05em 0 var(--ink)`): white headings set on Theme artwork.

### Named Rules
**The No Blur Rule.** Every shadow has zero blur and zero spread. A soft drop shadow breaks the hand-inked look.

## Shapes

Inked outlines and rounded, friendly shapes. Almost every visible edge is a 2px Navy Ink line. Small, pressable or tag-like things are full pills (999px): buttons, chips, nav links, the countdown and role tags. Containers are 1rem rounded cards. Small inner pieces use smaller curves: 0.6rem for dropdown items, 0.75rem for the calendar tile, 0.25rem for focus rings.

Line style carries meaning:
- **Solid 2px Navy Ink** for finished structure: cards, buttons, the header rule, band edges.
- **Dashed** for softer edges and things still on the way: the dashed Club Blue line under page headers and above the footer fine print, the dashed Club Blue box around "coming soon" notes, and the dashed navy pill for "Registration link coming soon".
- **Thick colour edges** for emphasis: a 0.75rem `--accent` top edge on the competition card and a 0.5rem Club Blue top band on the footer.

The route itself is a round-capped dotted stroke that marches along slowly, with circular stops and a four-pointed star at the end.

## Components

### Buttons
Chunky, inked and pressable.
- **Shape:** full pill (999px) with a 2px Navy Ink border.
- **Primary:** Navy Ink fill, Paper text, weight 700, padding 0.8rem 1.4rem, Blue sticker shadow. A trailing "→" arrow (hidden from screen readers) on buttons that go somewhere.
- **Hover / Active:** rises 2px with a deeper shadow; on click it drops 2px with a thinner shadow. Transitions are 0.15s ease.
- **Secondary:** Paper fill and Navy Ink text with the navy Sticker shadow.
- **Text link:** the quieter action next to a button ("Become a Sponsor →", "Questions? Contact us"): weight 700, a 2px underline, padded to a 44px tap height. A screen shows at most one filled primary button per group.
- **Focus:** the site-wide 3px Navy Ink outline, offset 3px. It turns Highlighter Yellow anywhere the background is dark or Theme-coloured (the footer, the themed hero and the themed Rounds band), where navy would disappear.

### Chips
- **Style:** Club Blue Soft fill, 2px Navy Ink border, pill, weight 700, padding 0.3rem 0.9rem. Used for the Rounds and Divisions lists; extra detail ("· Grades 1–2") drops to weight 500.
- **Role tag:** a smaller chip (0.875rem) on Event cards: "Run by the club" or "The club takes part".
- **Round list:** on the home page each Round is a chip followed by a one-line, kid-friendly description of what happens in it, stacked with 0.75rem between rows.

### Cards / Containers
- **Corner Style:** 1rem.
- **Background:** Paper, with Navy Ink text, even on coloured bands.
- **Shadow Strategy:** Sticker at rest; linked cards lift on hover (see Elevation & Depth).
- **Border:** 2px Navy Ink.
- **Internal Padding:** 1.5rem, or 2rem for the competition card on wide screens.

### Navigation
- **Header:** white with a 2px navy bottom rule; logo on the left, links on the right, wrapping on phones.
- **Links:** pill-shaped, weight 600 at 0.9375rem. Hover fills Club Blue Soft; the current page fills Club Blue with navy text.
- **Dropdown:** "Other Events" shows a caret and, from 52rem up, opens a card-styled menu on hover or keyboard focus. Escape closes it, `aria-expanded` reports its state, and inside the menu the focus ring is drawn inside each link so it never meets the menu's border. On phones the menu is hidden and the Events page carries the same links.
- **Footer:** Navy Ink with a Club Blue top band, a large white tagline led by a yellow Sparkle, link groups headed in Club Blue, and dashed-divided fine print.

### Page Header
The graph-paper banner at the top of every page except home: an optional eyebrow, the Display title followed by a small Club Blue Sparkle in superscript, an optional lead, and a dashed Club Blue line underneath.

### Route Illustration (signature)
The home hero's drawing when no Theme artwork is showing: a dotted navy route that marches from a Club Blue start dot past two white stops to a yellow star that gently twinkles, with faded maths symbols (π, √, +, ×, ∑) in the background. Decorative and hidden from screen readers.

### Calendar Tile (signature)
A 6.5rem tear-off calendar page next to the competition details (floated beside the heading on phones, its own column from 52rem). It is the card's only date, so it is labelled for screen readers with the full date: Club Blue month strip in uppercase, a big 800-weight day number, and the weekday in Ink Muted, all in a 2px navy rounded frame.

### Fact Card (signature)
A card with a huge (7rem) Club Blue numeral faded to 35% and tucked into the top-right corner behind the text, used for "4 Rounds" and the number of Divisions.

### Status Pill
One line saying whether you can register yet ("Registration opening in November."), shown in the hero while a Math Competition is coming up: a Paper pill with a 2px Navy Ink border and weight-700 ink text, with no text shadow, so it reads clearly over Theme artwork. The same sentence opens the "Next stop" card as a Stage Note: a Club Blue Soft box (0.6rem corners, weight 600) above the Facts List, because it is the first thing a Parent checks.

### Facts List
The plan-the-day facts inside the competition card (Time, Who can enter, Where, Entry Fee, Entry Fees support): uppercase Label terms over weight-600 values, two columns from 40rem, set between two dashed Club Blue rules.

### Route Timeline (signature)
The club's history drawn as the route: a Club Blue start dot ("Where it started"), a white stop for each past Math Competition with its year, Theme and Beneficiary, and the yellow four-pointed star for the next one with a "Coming up" tag. Stops are joined by round ink dots that slowly march towards the star. When the newest numbered Math Competition says more came before the years with data files, a dashed, empty stop ("… 3 more Math Competitions") stands in for them, so the route never looks shorter than the club's real history. It runs down the left on phones and left to right from 52rem. It reads the Math Competition data files, so a new year adds a stop by itself, and it stays visible whatever the year's Theme.

### Coming Soon
Stands in for unwritten pages and sections so no menu link leads nowhere: a dashed Club Blue rounded box with a Sparkle and a muted sentence.

### Theme Banner
When the current Math Competition's Theme has artwork, the hero switches to that artwork on the Theme colour, with white text, the ink text shadow on the headline and on the text link that sits near the artwork (body-size text on plain blue or the phone wash goes without, so the letters stay crisp), the highlighted word in yellow text instead of a highlighter stroke, and a wavy white shore at the bottom. On phones the artwork fills the banner at 45% opacity; from 52rem it sits on the right at full strength, fading into the water on its left edge, and the lead is kept to 30rem so it stays in the open water. Below 52rem a wash of the Theme colour (70% fading to clear near the bottom) sits over the artwork and under the words, keeping the lead at body-text contrast while the coral still shows along the shore.

## Do's and Don'ts

### Do:
- **Do** outline cards, buttons and chips in 2px Navy Ink and give them a solid offset shadow with no blur.
- **Do** use full pills (999px) for buttons, chips, nav links and small tags, and 1rem corners for cards.
- **Do** keep text Navy Ink on Club Blue, Club Blue Soft and Highlighter Yellow.
- **Do** put graph paper behind banners and page headers, and a highlighter stroke behind no more than one key word in a heading.
- **Do** use the four-pointed Sparkle as the decorative icon, hidden from screen readers.
- **Do** bring in a year's Theme only through its `--accent` colour and artwork, set from the Math Competition's data file.
- **Do** use a dashed outline and a "coming soon" note for anything not ready yet, instead of leaving a gap or making something up.
- **Do** let every animation and transition switch off under `prefers-reduced-motion` (the site already does this globally).

### Don't:
- **Don't** put white text on Club Blue.
- **Don't** use soft, blurred or coloured-glow shadows, or gradients other than the graph-paper grid and the highlighter stroke.
- **Don't** fill a section or large area with Highlighter Yellow.
- **Don't** add a second typeface by hard-coding it; change `--font-display` if headings ever get their own font.
- **Don't** let a Theme replace the club's look on pages beyond the home banner, the Rounds band and the Math Competition page.
- **Don't** show photos of people who aren't covered by a Photo Release.
