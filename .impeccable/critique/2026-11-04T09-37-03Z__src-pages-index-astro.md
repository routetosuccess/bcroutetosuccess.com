---
target: homepage
total_score: 24
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
target_identity: "file:/Users/pde201/work/bcroutetosuccess.com/src/pages/index.astro"
target_fingerprint: "sha256:c3fd0273490059a27274eba2320b847904b3d038805b6be929f0e8849c4d4198"
target_path: /Users/pde201/work/bcroutetosuccess.com/src/pages/index.astro
timestamp: 2026-11-04T09-37-03Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + measurements). No browser tool: no screenshots.

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Status pill + countdown good; "Registration opening in November" is vague now it is November |
| 2 | Match System / Real World | 3 | Plain parent language; Rounds/Divisions explained only mid-page |
| 3 | User Control and Freedom | 3 | Nothing traps; whole sponsor card is a mailto dead end on phones |
| 4 | Consistency and Standards | 2 | Softened CSS contradicts DESIGN.md No Blur Rule; primary button keeps ink border, everything else pale |
| 5 | Error Prevention | 3 | No dead Register button in any Stage |
| 6 | Recognition Rather Than Recall | 3 | Facts grouped; Divisions separated from "Who can enter" |
| 7 | Flexibility and Efficiency | n/a | Landing page |
| 8 | Aesthetic and Minimalist Design | 2 | 45-word hero lead duplicates the Next stop card; Parent and Sponsor CTAs compete |
| 9 | Error Recovery | 2 | Before registration opens, the Parent's main task has no destination or notify option |
| 10 | Help and Documentation | 3 | FAQ button, email, map link |
| Total | | 24/36 | Acceptable (67%) |

## Priority Issues
1. [P1] Softening contradicts DESIGN.md (No Blur Rule, 2px Navy Ink outlines) and drops border contrast: --line on white 1.74:1, below 3:1; secondary button edge faint. Fix: restore ink outlines on buttons/chips or update DESIGN.md deliberately. polish / document.
2. [P1] Registration has no destination before it opens; copy vague. Fix: a date, "tell me when it opens", verb CTA. clarify.
3. [P1] Hero lead is a 45-word run-on serving Parents and Sponsors at once. Fix: one sentence; move Become a Sponsor down. distill.
4. [P2] Sponsor proof thin: no photos, no past years, sponsor card is mailto not Prospectus. shape.
5. [P2] White text over hero artwork relies on text-shadow; eyebrow and lead unverified on phones. audit.
