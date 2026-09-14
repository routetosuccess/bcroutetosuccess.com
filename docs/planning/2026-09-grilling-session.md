# Planning session: bcroutetosuccess.com

A record of the planning session (September 13–14, 2026) that turned the club's website outline into a plan. Each question shows what was suggested and what the club decided.

The terms used here (Math Competition, Division, Stage, Payment Method, and so on) are defined in [`CONTEXT.md`](../../CONTEXT.md). The hosting decision is recorded in [`docs/adr/0001-cloudflare-pages-hosting.md`](../adr/0001-cloudflare-pages-hosting.md).

## Starting point

The domain bcroutetosuccess.com was bought from Porkbun for two years. The club's outline for the site was:

- **Top menu:** What we do, Why we do it / Who we are, Contact and Volunteer
- **What we do:** Math Competition (current summary, past photos, demographics, donations), Sadie Hawkins, STEM Fest, and one page for smaller events (Fall Fest, Asian Night Market, fundraisers, STEM Week)
- **Home page:** the current Math Competition (Rounds, Divisions, location, date, registration, FAQ, sample questions)
- **Footer:** Programs (Division 1–3 sign-ups, Sample Prep), Company (About, Volunteer, Contact), Resources (Sponsors)
- **Theme:** not decided yet

## Round 1: the club and the site

### Q1. Who is the site for?

**Suggested:** Parents and students registering for the Math Competition first, then Sponsors and Volunteers.

**Decided:** As suggested.

### Q2. Who will update the site after launch?

**Suggested:** Several club members, including ones who don't code.

**Decided:** Aryana, who writes Python and Java and is learning JavaScript and React, with help from her dad.

### Q3. What's the deadline?

**Suggested:** Launch a first version about four weeks before registration opens.

**Decided:** The Math Competition is on November 21, 2026. Registration opens at least a week before. The club also needs time to find Sponsors.

### Q4. What exactly is "BC Route to Success"?

**Suggested:** Needed the club's full name, affiliation and donation status.

**Decided:** "BC" is BASIS Chandler. Route to Success is the club name. It is a school club, and a 501(c)(3) is involved (clarified in Q9).

### Q5. What are Divisions, and what does signing up mean?

**Suggested:** Divisions are grade bands. One registration form with a Division field, stored in a Google Form and Sheet the club controls.

**Decided:** As suggested. Parents register their children. There is an Entry Fee, and it must be easy to change for each competition. Data goes to a Google Form and Sheet.

### Q6. How should the site protect students' privacy?

**Suggested:** Only post photos covered by a Photo Release, never name students in photos, and publish demographics only as totals.

**Decided:** As suggested.

### Q7. Should we call them Programs or Events?

**Suggested:** Event (dated), Math Competition (the flagship Event, with Rounds and Divisions), Program (ongoing). Rename the footer's "Programs" to "Math Competition".

**Decided:** As suggested. ANM stands for Asian Night Market, a school Event the club takes part in.

### Q8. Do you want email addresses on the domain?

**Suggested:** Yes, contact@ forwarding to a club Gmail account (not a personal one).

**Decided:** As suggested.

## Round 2: money, tools and phases

### Q9. Whose 501(c)(3) is it?

**Suggested:** Money goes through BASIS Chandler's nonprofit, not the club's own.

**Decided:** As suggested.

### Q10. How do parents pay the Entry Fee?

**Suggested:** Depends on Q9. The site only shows the fee and links to the payment step.

**Decided:** In the past, the club used the school's payment system, and also had parents send screenshots of donations to a nonprofit the event was benefiting. (Settled further in Q19 and Q28.)

### Q11. What should the site be built with?

**Suggested:** Astro with React components.

**Decided:** As suggested.

### Q12. Where should it be hosted?

**Suggested:** GitHub Pages.

**Decided:** A host with preview links instead (Cloudflare Pages or Netlify). Settled in Q27.

### Q13. What goes live first?

**Suggested:** Phase 1 (about Sept 27): Home, About, Sponsors, Contact. Phase 2 (about Oct 11): full Math Competition page, registration, FAQ, Volunteer. Phase 3 (after Nov 21): other Events, photos and results. Open registration about six weeks ahead.

**Decided:** As suggested. Sponsors will also be emailed a detailed Sponsorship Prospectus.

### Q14. What should the site show over the competition's lifecycle?

**Suggested:** Four Stages: Upcoming, Registration Open, Registration Closed, Past. One value switches the whole site.

**Decided:** As suggested.

### Q15. Is the Math Competition held every year, and what changes each time?

**Suggested:** Yearly. Each year's details live in one file, and past years stay as archive pages.

**Decided:** As suggested. There have been several competitions, but only two can go on the site.

### Q16. Does the school need to approve it?

**Suggested:** The Club Adviser approves Phase 1 content and use of the school name before launch.

**Decided:** As suggested. The Club Adviser is a teacher at the school.

### Q17. How should the Contact and Volunteer pages work?

**Suggested:** A Google Form for Volunteer, and a contact@ email link for Contact.

**Decided:** As suggested.

### Q18. What materials already exist?

**Decided:** The logo, past photos, past sample questions and FAQ, the past Google Form, and past Sponsors all exist. Club colour: light blue.

## Round 3: Sponsors, archives and accounts

### Q19. How do parents pay the Entry Fee for November 21?

**Suggested:** One Payment Method per year.

**Decided:** The money will most likely go to a Beneficiary, to be named once confirmed. In past years the school also collected money and gave In-kind Donations.

### Q20. What do the Sponsors page and the prospectus each cover?

**Suggested:** A short pitch, Sponsor logos, and the prospectus PDF on the site. Sponsors are listed per Math Competition.

**Decided:** As suggested.

### Q21. Which two past competitions go on the site?

**Decided:** 2024 and 2025. They had the same Rounds and Divisions as 2026.

### Q22. Should the site use one look, or a theme per competition?

**Suggested:** The club's light blue everywhere, with each Math Competition adding its own Theme on its own page and the home page banner.

**Decided:** As suggested. Each competition has its own Theme.

### Q23. How do photos and files get into the repo safely?

**Suggested:** Only commit cleared photos from a shared Drive folder. Never commit registration data or children's names. Rules added to `CLAUDE.md`.

**Decided:** As suggested.

### Q24. Who owns the accounts?

**Suggested:** A club Gmail owns every account. Later revised: GitHub doesn't allow shared logins, so use a GitHub organisation with personal accounts.

**Decided:** The club email already exists. Other account logins will move to the club email later.

### Q25. How will you and your daughter work together on the code?

**Suggested:** Branches and pull requests with preview links, reviewed before merging. Phases tracked as GitHub Issues.

**Decided:** As suggested.

### Q26. What should the menus be called?

**Suggested:** Top menu: Math Competition · Events · About · Sponsors · Volunteer · Contact. Footer: Math Competition · Club · Support. Designed for phones first.

**Decided:** As suggested.

## Round 4: hosting and follow-ups

### Q27. Cloudflare Pages or Netlify?

**Suggested:** Cloudflare Pages. Netlify's free plan allows about 20 deploys a month and takes the site offline when credits run out. Cloudflare needs the nameservers moved, with email handled by Cloudflare Email Routing.

**Decided:** As suggested.

### Q28. How does 2026 Entry Fee money reach the Beneficiary?

**Suggested:** School Payment. Only name the Beneficiary once confirmed.

**Decided:** The club needs to decide. Keep it easy to change.

### Q29. Should the GitHub account become an organisation?

**Suggested:** Convert the `bcroutetosuccess` user account into an organisation.

**Decided:** Aryana created a new organisation, `routetosuccess`, and added herself (`Aryana-D`) and her dad (`pde201`). The old `bcroutetosuccess` account was deleted.

### Q30. How should the domain account be secured?

**Suggested:** Use the club email for the login, and turn on auto-renew, two-factor login and WHOIS privacy.

**Decided:** This will be done later.

### Q31. When will the 2026 Theme be ready?

**Suggested:** Launch Phase 1 in light blue and add the Theme in Phase 2.

**Decided:** The 2026 Theme should be decided this week. The archive pages reuse old Themes: 2025 was Around the World, 2024 was Chompers and Thompers (dinosaurs).

### Q32. Should past competitions show how much they raised?

**Suggested:** Yes, only with figures the school confirms.

**Decided:** As suggested. Both years benefited Homeless Youth Connection. 2025 gave In-kind Donations; in 2024, parents donated money directly.

## Round 5: final questions

### Q33. When does the club need to pick the Payment Method?

**Suggested:** By October 4. School Payment if not decided.

**Decided:** As suggested.

### Q34. Registration form and dates

**Suggested:** Copy the 2025 form with Division, Photo Release and payment fields, and link to it. Registration opens October 11 and closes November 14.

**Decided:** The club will complete and provide the form. The dates are fine but may change. The club has taken Walk-ins on the day in the past.

### Q35. How should the site handle Walk-ins?

**Suggested:** Each Math Competition records whether it accepts Walk-ins, and the closed-registration message mentions them.

**Decided:** As suggested. The club will decide for 2026.

### Decision record and plan

- **Decision record for Cloudflare hosting:** yes, written as `docs/adr/0001-cloudflare-pages-hosting.md`.
- **Plan confirmed:** setup, then Phase 1 (about Sept 27), Phase 2 (about Oct 11), and Phase 3 (after Nov 21). Tracked as GitHub Issues #1–4.
- **Commits:** Aryana makes every commit herself.
