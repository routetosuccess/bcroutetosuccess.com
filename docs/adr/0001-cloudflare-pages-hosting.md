# Host on Cloudflare Pages, with DNS moved off Porkbun

The site is hosted on Cloudflare Pages, and bcroutetosuccess.com's nameservers point to Cloudflare, even though the domain is still registered at Porkbun. We chose Cloudflare because its free plan never takes the site offline for deploying too often: Netlify's free plan allows about 20 production deploys a month and pauses every site when the credits run out, which a student pushing small changes while learning could hit in the weeks before a Math Competition.

## Considered Options

- **Netlify:** could have kept DNS and email forwarding at Porkbun, but was rejected because of the deploy limit and the site being paused.
- **GitHub Pages:** also free and next to the repo, but the club chose a host with a preview link for every pull request.

## Consequences

- Cloudflare only lets a root domain (not just `www`) point at Pages when its nameservers are on Cloudflare, so DNS records are managed in Cloudflare, not Porkbun.
- Porkbun email forwarding stops working once the nameservers move. contact@ forwarding is handled by Cloudflare Email Routing instead, and has to be set up at the same moment as the nameserver change.
- Renewing the domain still happens at Porkbun.
- Cloudflare's privacy policy says its services aren't intended for under-18s, so the Cloudflare account is held by an adult, using the club email.
