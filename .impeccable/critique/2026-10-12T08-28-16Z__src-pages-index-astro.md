---
target: home page
total_score: 24
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:/Users/pde201/work/bcroutetosuccess.com/src/pages/index.astro"
target_fingerprint: "sha256:f1a6c696792ee5e9028ee8fe6bdf4553091d51496538d0eda54883495f640782"
target_path: /Users/pde201/work/bcroutetosuccess.com/src/pages/index.astro
timestamp: 2026-10-12T08-28-16Z
slug: src-pages-index-astro
closed: true
---
# Critique: home page (src/pages/index.astro)

Method: dual-agent (A: design review · B: detector + browser evidence, on a static build because the dev server was showing a font error at the time)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Stage, date, countdown clear; no date for when the registration link appears |
| 2 | Match System / Real World | 3 | Round names unexplained |
| 3 | User Control and Freedom | 3 | Dropdown doesn't close on Escape |
| 4 | Consistency and Standards | 3 | Sponsor action in four styles |
| 5 | Error Prevention | 2 | Time and eligibility missing from home page |
| 6 | Recognition Rather Than Recall | 3 | Payment Method and time need another page |
| 7 | Flexibility and Efficiency | n/a | One-page persuade surface |
| 8 | Aesthetic and Minimalist Design | 3 | "4 Rounds, 2 Divisions" said three times; half-empty desktop card |
| 9 | Error Recovery | 2 | "Link coming soon" and "closed, no Walk-ins" are dead ends |
| 10 | Help and Documentation | 2 | FAQ only in footer; no contact near the card |
| Total | | 24/36 | Acceptable (67%) |

## Design Specificity Verdict
Parts are specific to the club (ink outlines, sticker shadows, calendar tile, countdown, Theme layer); the page order is a stock landing page. Headline is a slogan; student-run, 7th edition, Co-host and Beneficiary story are missing. The route drawing disappears whenever a Theme has artwork.
Detector: 9 advisory CLI findings (5 index.astro, 4 BaseLayout.astro), mostly false positives on documented one-offs; the rest are sizes DESIGN.md doesn't list (0.9375rem, 1rem, footer tagline clamp, skip-link 0.5rem radius). Overlay on a static build: kicker-above-heading x4, fact numeral low contrast 1.4:1 (not aria-hidden), border-accent-on-rounded (intentional).

## Priority Issues
- [P1] First screen leaves out what Parents need and the club's differences (time, eligibility, 7th, Co-host, student-run). Fix: factual lead, time on date line, "Who can enter" line. Command: /impeccable clarify
- [P1] On phones the date is below the fold (card at ~750px on 390px) and the card has no tappable next step. Fix: date/Stage line in hero, always a "Details, Rounds & FAQ" button, dated promise + contact instead of "coming soon", fact row on desktop, Sponsor hero button to text link. Command: /impeccable layout
- [P2] Lead and eyebrow have no ink shadow; lead contrast drops to 2.44:1 at desktop right edge over art, p90 4.52:1 on mobile. Fix: add shadow, keep lead off the art on desktop, dim art more on mobile. Command: /impeccable polish
- [P2] Signature route vanishes under a Theme; no history proof. Fix: route as a timeline of past Math Competitions ending at the 2026 star, surviving a Theme. Command: /impeccable bolder
- [P2] Data edge cases: "Zero Divisions" with no current competition; closed with no Walk-ins dead end; stale "opening in November" after the date. Command: /impeccable harden

## Persona Red Flags
Jordan: slogan reads like tutoring; eligibility ~1,700px down on mobile; Round names unexplained. Riley: Zero Divisions, closed dead end, stale stage text. Casey: no date on first screen; nothing tappable in card; nav 37px and footer links 20px tall. Parent: no time or payment method; Divisions far from card. Sponsor: no history/edition/Co-host; Prospectus only in footer.

## Minor Observations
Dropdown no Escape / tabs through all items; fact numerals collide with text on mobile and need aria-hidden; double gap in "to  success"; address not a map link; Theme name styled as muted metadata; Rounds card empty lower half on desktop; nav current pill and calendar month strip at 4.71:1.

## Questions to Consider
Route as the club's history? Hero order by Stage? Factual h1 instead of slogan? Where does the page show it's student-made?
