# bcroutetosuccess.com

Website for Route to Success, a student club at BASIS Chandler. The repo lives in the `routetosuccess` GitHub organisation and is maintained by Aryana (`Aryana-D`) with help from her dad (`pde201`). Domain terms are defined in `CONTEXT.md`.

## This repo is public: keep student data out

Anything committed is visible to anyone forever, even after it's deleted.

- Only commit photos that are covered by a Photo Release and taken from the club's cleared-for-posting Drive folder.
- Never commit registration Sheets, form responses, or anything containing a child's name.
- Demographics appear only as totals typed into the site, never as raw data.

## Development

The site is built with Astro, with React for interactive components. When starting the dev server, use background mode:

```
npx astro dev --background
```

Manage the background server with `npx astro dev stop`, `npx astro dev status`, and `npx astro dev logs`.

Consult the Astro docs (https://docs.astro.build) before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles](https://docs.astro.build/en/guides/styling/)

## Commits

Aryana makes every commit and push herself. Don't run `git commit` or `git push`; leave changes uncommitted and suggest a commit message.

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues on routetosuccess/bcroutetosuccess.com, using the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Uses the five default triage labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
