---
target: home page
total_score: 23
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:/Users/pde201/work/bcroutetosuccess.com/src/pages/index.astro"
target_fingerprint: "sha256:43daa87f01c540180c2028823d6d56df7604a376e97ac4e88778ea7fe7e29244"
target_path: /Users/pde201/work/bcroutetosuccess.com/src/pages/index.astro
timestamp: 2026-10-12T09-02-44Z
slug: src-pages-index-astro
closed: true
---
# Critique 3: home page (src/pages/index.astro)

Method: dual-agent (A: design review · B: detector + browser evidence, on the running dev server)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Status pill, Stage note, countdown clear; hero stale after the event |
| 2 | Match System / Real World | 3 | Round names and Mu Alpha Theta unexplained |
| 3 | User Control and Freedom | 3 | Skip link; Escape closes dropdown |
| 4 | Consistency and Standards | 3 | "Other Events"/"Events", "Past Competitions"/"Past Math Competitions" naming |
| 5 | Error Prevention | 2 | CTAs lead to unfinished pages; hero can offer Register now after the event |
| 6 | Recognition Rather Than Recall | 3 | Labelled facts |
| 7 | Flexibility and Efficiency | n/a | One-page persuade surface |
| 8 | Aesthetic and Minimalist Design | 3 | Date 5 times; Rounds band repeats Math Competition page |
| 9 | Error Recovery | 2 | No working way to ask a question (Contact coming soon) |
| 10 | Help and Documentation | 1 | Contact and FAQ both coming soon |
| Total | | 23/36 | Acceptable (64%) |

Home-page issues from critique 2 all verified fixed; score now limited mainly by unfinished destination pages (Contact, Sponsors, FAQ).

## Design Specificity Verdict
Grounded: date headline, exact facts list, data-driven route timeline with honest gap stop, Theme artwork. Generic: Get involved twin cards.
Detector: 1 CLI false positive (index.astro:489 SVG glyph 40px). Overlay: 7 known/intentional (5 eyebrows, card accent edge, aria-hidden fact numeral). All text pairs pass; phone h1 highlight worst 4.08:1 (was 2.63); yellow focus ring 5.2:1 on blue; no tap targets under 44px; no overflow; Escape and aria-expanded work. Weak spot: "Become a Sponsor" on phones worst 4.13:1 before shadow.

## Priority Issues
- [P1] Main links lead to unfinished pages (Sponsors, Contact, FAQ). Fix: build Contact with an approved email; shape and build Sponsors; relabel "Details, Rounds & Divisions" until FAQ exists. Command: /impeccable shape sponsors (+ Contact page)
- [P1] Nothing to do while Upcoming. Fix: "Add to calendar" (.ics from 2026.json) as main action during Upcoming; say how Parents hear registration opened once confirmed. Command: /impeccable onboard
- [P2] Hero stale after Nov 21 (third run). Fix: daily rebuild via deploy hook, or extend script to hero. Command: /impeccable harden (script option)
- [P2] Low-pressure/fun positioning missing; Round names unexplained. Fix: kid-friendly line per Round from the club; one sentence on a friendly first contest. Command: /impeccable clarify
- [P3] Repetition: date 5 times; Rounds band duplicates Math Competition page. Fix: drop card date line; shrink Rounds band. Command: /impeccable distill

## Persona Red Flags
Jordan: Mu Alpha Theta, Round names, "Other Events" naming. Riley: stale hero; dropdown focus ring touches menu border; "Sea" orphan on phone; thin Divisions card with no current competition. Casey: 180px two-row nav; time and fee need a scroll; artwork loads first at 45% on phones. Parent: no registration date or reminder; how to pay unclear; Contact dead end. Sponsor: Sponsor link to coming soon; no named contact; first stop has no year.

## Minor Observations
Other Events 2px lower; aria-expanded on a link; ink shadow roughens body-size lead; card below fold at 1440x900; big "4" crowds Countdown chip; "Next stop" twice.

## Questions to Consider
What should Parents do today? Should Become a Sponsor appear before the Sponsors page has content? Does home need the Rounds band? Timeline as Sponsor trust section?
