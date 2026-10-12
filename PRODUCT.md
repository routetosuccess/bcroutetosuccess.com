# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Domain terms (Parent, Competitor, Sponsor, Stage and so on) are defined in `CONTEXT.md`.

- **Parents of BASIS Chandler students in grades 1–5.** Only BASIS Chandler students can compete, so these Parents already know the school but may not know the club. They come to the site to find the date, Divisions, Entry Fee and Payment Method for this year's Math Competition, and to register. Most will be on a phone, often arriving from a school message or a link shared by another Parent.
- **Prospective Sponsors.** Local businesses and individuals the club has contacted, who check the site before committing. They want proof that the club is real, active and trustworthy, and what recognition they get. The detailed offer lives in the Sponsorship Prospectus.
- **The BASIS Chandler community.** Students, teachers and the Club Adviser looking up the club's other Events.

## Product Purpose

The public website of Route to Success, a student club at BASIS Chandler. It exists to:

1. get Parents to register their Competitors for the yearly Math Competition;
2. attract Sponsors;
3. show the other Events the club runs or takes part in.

Success means Registrations come through the site's registration link, Sponsors can confirm the club is real before they commit, and each year's Math Competition can be added by changing data rather than rebuilding pages.

## Positioning

The site leads with four things that together no tutoring centre or outside contest can honestly claim:

- **Run by students.** BASIS Chandler students write and run a contest for younger students at their own school.
- **Raises money for others.** Entry Fees go to a Beneficiary (Homeless Youth Connection, confirmed for 2024–2026), received through BASIS Chandler's nonprofit, not kept by the club.
- **A long-running tradition.** 2026 is the 7th Math Competition, and each one has its own Theme.
- **Low-pressure and fun.** A friendly, themed event day and a good first contest for young children, not a high-stakes exam.

## Operating Context

- Each Math Competition moves through Stages (Upcoming, Registration Open, Registration Closed, Past), and the site's wording and actions change with the Stage.
- Registration happens through a Google Form provided by the club; the site links to it and never stores registration data.
- The Payment Method (School Payment or Direct Donation) is chosen per Math Competition, and the site gives instructions for whichever one applies. Walk-ins are allowed or not per Math Competition.
- Each Math Competition has a Theme (colour and artwork) that sits on top of the club's own look. The 2026 Theme is Under the Sea; past Themes were Around the World (2025) and Chompers and Thompers, which had dinosaurs (2024).
- Sponsors are first contacted by email with the Sponsorship Prospectus attached, then visit the site.
- Work is planned in phases tracked as GitHub issues: a sponsor-ready site, then the Math Competition and registration, then results, the archive of past Math Competitions, and Events pages after the 2026 Math Competition on Nov 21.

## Capabilities and Constraints

- Astro with React for interactive parts, hosted on Cloudflare Pages (see `docs/adr/0001-cloudflare-pages-hosting.md`). Each Math Competition and each Event is a data file in `src/content/`.
- The site is maintained by a student (Aryana) learning as she goes, with help from her dad. Changes should stay simple enough for her to make and understand.
- The repo is public. No registration data, form responses, children's names, or photos without a Photo Release are ever committed.
- The Club Adviser approves what the site says about BASIS Chandler and how it uses the school's name.
- The Beneficiary is named only after the Club Adviser and the Beneficiary both confirm; until then the site says "a local youth charity".
- Amounts raised and other totals are published only when the school has confirmed them. Demographics appear only as totals.
- Not yet decided: the 2026 registration opening and closing dates (registration opens in November), the registration form link, and whether Walk-ins are allowed.

## Brand Commitments

- Name: **Route to Success**. Use the full name; not "RTS".
- Use the terms in `CONTEXT.md` exactly (Math Competition, Competitor, Division, Entry Fee, and so on) and avoid the alternatives it lists.
- Voice: club members speaking in first person plural ("we run…"). Warm, upbeat and clearly student-made, but careful and exact about dates, money and the school.
- Existing assets: the club logo (`public/logo.jpg`) and favicons in `public/`. The club's own colour is a light blue. The Under the Sea artwork is at `src/assets/themes/under-the-sea.webp`.

## Evidence on Hand

- Real facts for 2026: the date (Saturday Nov 21, 9 a.m. – 12:30 p.m.), location, Divisions, Entry Fee ($10), Co-host (Mu Alpha Theta), Beneficiary, Theme and Payment Method, all in `src/content/competitions/2026.json`.
- Past Math Competitions: 2024 and 2025 Themes, Beneficiary and Payment Method.
- Not yet available, and never to be invented: Sponsor names and logos, the Sponsorship Prospectus, photos, testimonials or quotes, Competitor counts, and amounts raised. Pages show "coming soon" until the real thing exists.

## Product Principles

1. **Get Parents to registration.** The current Math Competition's date, Stage and next step should always be easy to find.
2. **Show it is real.** Real dates, real Beneficiaries, real history. Anything not yet confirmed is marked as coming, never filled in with something made up.
3. **Children's privacy comes first.** Only people covered by a Photo Release appear, only totals are published, and the public repo never holds personal data.
4. **Students' work, in students' words.** Let the site feel made by the club, without losing accuracy.
5. **Change data, not pages.** A new year, Stage or Theme should only need a data change.
