# A Little Help

This repository contains the personal fundraiser website for setonrcs-com.

Static, code-only fundraiser page. It includes a session-scoped 18+ self-attestation gate and prominent giving disclosures. Online payments are temporarily disabled pending a matching, verified Stripe Checkout link.

## Before accepting donations

- Have an attorney review the fundraiser description, alleged reputational losses, legal-cost language, and gift terms.
- Review Stripe's current Payment Links requirements and confirm the account, link, and intended fundraiser use comply.
- The previously supplied Stripe checkout did not match the fundraiser details and has been removed from the current site; no payment link or QR code is enabled.
- Before enabling a replacement link, confirm in Stripe that the recipient, fundraiser purpose, amount, and recurring schedule are correct. Do not publish a link until those details match the disclosures.
- The page displays an organizer-reported offline-gift breakdown ($7,000 from Mike D., $4,000 from Kelly W., and an unitemized hat cash collection) and a total over $12,554. Confirm all figures and obtain permission before publicly identifying donors; update the figures as appropriate. This static repository has no backend or live total endpoint.
- Confirm every factual claim and update totals only from accurate donation records. The page does not simulate online donations.

## Notes board

The page does not display invented supporter names, testimonials, or payment-method claims. Add real names or quotes only with the relevant person's permission. The organizer reports accepting offline gifts directly; no specific offline method or contact details have been supplied for publication.

The age prompt is an 18+ self-attestation stored in `sessionStorage` for the current browser session. It does not collect identity documents or independently verify age.

The key giving disclosures remain beside the online-giving status; the full site and fundraiser disclaimer is on `disclaimer.html`, linked from the giving section and footer. The disclaimer is general website copy, not a substitute for attorney review or individualized legal advice.

Arch AI DataCenters is credited beneath the payment section for contributing to the website's design and implementation.

The page uses responsive HTML/CSS and a small fixed desktop/mobile layout preview toggle. It uses standard browser features; verify the final hosted version in Opera GX, Chrome, Edge, and target mobile browsers before launch.

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` publishes the fundraiser site from the `hotshotkev-medical-donations-page` branch. The current public preview is https://hotshotkev.github.io/setonrcs-com/.

Search metadata uses an accurate page title and description. Hidden keyword lists and unrelated church or school names are intentionally omitted so search results do not imply an affiliation or endorsement.

## Cloudflare Pages

The site is plain static HTML, CSS, JavaScript, and assets; its local links are relative, so it can also be hosted at a domain root on Cloudflare Pages without a code build.

To connect it in Cloudflare Pages, select this GitHub repository and use:

- Production branch: `hotshotkev-medical-donations-page`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `.`

The repository root is the site's root directory (the default). After the first successful deployment, add `www.setonrcs.com` under the Pages project's **Custom domains**. If the DNS zone is in the same Cloudflare account, Cloudflare can create the DNS record; if DNS is managed elsewhere, add a CNAME for `www` pointing to the Pages project's `*.pages.dev` hostname. Keep the GitHub Pages preview until the Cloudflare deployment and custom domain are verified.
