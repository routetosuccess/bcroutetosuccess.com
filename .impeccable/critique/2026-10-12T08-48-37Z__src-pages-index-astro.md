---
target: home page
total_score: 24
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:/Users/pde201/work/bcroutetosuccess.com/src/pages/index.astro"
target_fingerprint: "sha256:ff666f97d44655c4b5173b81f0d00ba792036d49dbf3766f0358c661eaba98ad"
target_path: /Users/pde201/work/bcroutetosuccess.com/src/pages/index.astro
timestamp: 2026-10-12T08-48-37Z
slug: src-pages-index-astro
closed: true
---
# Critique 2: home page (src/pages/index.astro)

Method: dual-agent (A: design review · B: detector + browser evidence, on the running dev server)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Hero never says whether you can register; on a phone the Stage sentence is ~1,740px down |
| 2 | Match System / Real World | 3 | Hero button "2026 Math Competition" is a label, not an action |
| 3 | User Control and Freedom | 3 | Escape closes dropdown; nothing traps |
| 4 | Consistency and Standards | 3 | Date appears 4 times; "Next stop" twice |
| 5 | Error Prevention | 2 | After Nov 21 the static hero stays stale until rebuild |
| 6 | Recognition Rather Than Recall | 3 | Facts list puts planning facts in one place |
| 7 | Flexibility and Efficiency | n/a | One-page persuade surface |
| 8 | Aesthetic and Minimalist Design | 3 | Rounds band repeats Math Competition page content |
| 9 | Error Recovery | 3 | Old dead ends now always offer Details and Contact |
| 10 | Help and Documentation | 2 | FAQ still coming soon |
| Total | | 24/36 | Acceptable (67%) |

All issues from critique 1 fixed; a fresh, stricter pass found new ones.

## Design Specificity Verdict
Mostly specific to the club now (route timeline, Next stop card, calendar tile, Theme). Stock patterns remain in the hero pattern, the Rounds feature row and the two Get Involved cards. No students visible on a "run by students" page.
Detector: 1 CLI finding (index.astro:451 SVG glyph 40px, false positive); BaseLayout and RouteTimeline clean. Overlay: 7 known/intentional items (5 eyebrows, card accent edge, aria-hidden fact numeral). No tap targets under 44px except inline map link; no overflow; desktop hero text >= 7.1:1.

## Priority Issues
- [P1] Focus ring invisible on themed blue (navy on #1c4ea3 ~1.8:1). Fix: Highlighter Yellow focus ring in themed hero and themed Rounds band. Command: /impeccable harden
- [P1] Hero doesn't say whether you can register; Stage sentence buried. Fix: Stage-driven status line in hero; Stage sentence above facts list as highlighted note; calendar tile beside heading on phones. Command: /impeccable layout
- [P2] Hero text over art on phones: lead worst 3.26:1 (p90 4.57), yellow date worst 2.63:1, Become a Sponsor text link has no shadow over coral. Fix: shadow on text link, darker wash behind text on phones. Command: /impeccable polish
- [P2] Timeline undercounts history: "Our 1st Math Competition" (no year) then 2024 vs "7th". Fix: visible gap "and more", or data files for earlier years. Command: /impeccable clarify
- [P2] Hero, button and timeline tag go stale after Nov 21 on the static build. Fix: daily Cloudflare Pages rebuild, or extend client script. Command: /impeccable harden

## Persona Red Flags
Jordan: hero button label not an action. Riley: stale hero after date; no day-of copy; slogan fallback. Casey: status two screens down; 180px two-row nav; artwork loaded first. Parent: no "how to pay" detail, no reminder. Sponsor: all Sponsor links to coming soon; "get recognised by the families" unsupported; no people named.

## Minor Observations
Date 4 times; 5 eyebrows; no aria-expanded on Other Events; dropdown overlaps card edge when scrolled; map link under 44px; loose white gap before the timeline.

## Questions to Consider
Hero action "Get reminded when registration opens"? Is the Rounds band earning its place? How to show student-made without photos? Timeline higher for Sponsors?
