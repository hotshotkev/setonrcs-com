# A Little Help

This repository contains the personal fundraiser website for setonrcs-com.

Static, code-only personal fundraiser page with a separate Stripe subscription listing. It includes a session-scoped 18+ self-attestation gate and prominent payment disclosures. The Stripe link is for the $32/month “Thank you for your apology” subscription only; it is not an online payment for the personal fundraiser.

## Payment disclosures

- The Stripe Checkout displays “Thank you for your apology,” $32.00 per month, recurring until canceled, and Kevin Walters as merchant. Confirm the current product, price, billing schedule, cancellation details, and any refund terms in Stripe before relying on them.
- The Stripe Payment Link and QR code are for that paid service only. The personal fundraiser does not accept online payments, and the subscription proceeds are not represented as fundraiser support.
- Attorney and Stripe review is still required. No review or endorsement by either is represented as complete.
- The page displays an organizer-reported offline-support breakdown ($7,000 from Mike D., $4,000 from Kelly W., and an unitemized hat cash collection) and a total over $12,554. Confirm all figures and obtain permission before publicly identifying people; update the figures as appropriate. This static repository has no backend or live total endpoint.
- Confirm every factual claim and update totals only from accurate records. Stripe transactions are not included in the static offline total.

## Notes board

The page does not display invented supporter names, testimonials, or payment-method claims. Add names or quotes only with the relevant person's permission. The organizer reports accepting offline personal transfers directly; no specific offline method or contact details have been supplied for publication.

The age prompt is an 18+ self-attestation stored in `sessionStorage` for the current browser session. It does not collect identity documents or independently verify age.

The subscription price, recurring schedule, service distinction, and acknowledgment appear beside the Stripe link and QR; the full disclosures are on `disclaimer.html`, linked from the payment section and footer. The disclaimer is general website copy, not a substitute for attorney review or individualized legal advice.

Arch AI DataCenters is credited beneath the payment section for contributing to the website's design and implementation.

The page uses responsive HTML/CSS and a small fixed desktop/mobile layout preview toggle. It uses standard browser features; verify the final hosted version in Opera GX, Chrome, Edge, and target mobile browsers before launch.

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` publishes the fundraiser site from the `hotshotkev-medical-donations-page` branch. The current public preview is https://hotshotkev.github.io/setonrcs-com/.

Search metadata uses an accurate page title and description. Hidden keyword lists and unrelated church or school names are intentionally omitted so search results do not imply an affiliation or endorsement.

## Cloudflare Pages

The fundraiser is a plain static site, served from the repository root by the Cloudflare Pages project `setonrcs-com`.

The fundraiser Pages project uses:

- Production branch: `hotshotkev-medical-donations-page`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `.`

The fundraiser Pages hostname is https://setonrcs-com.pages.dev/. The apex domains `setonrcs.com` and `setonsrc.com` are configured on this project and verified over HTTPS. No `www` aliases are configured. GitHub Pages remains available as a fallback.

The separate Pages project `setonrcs-defamation` serves `defamation-site/` from the same production branch at `defamation.setonrcs.com`. Its page contains general, non-person-specific Missouri defamation-law information and is not legal advice or a legal notice.
