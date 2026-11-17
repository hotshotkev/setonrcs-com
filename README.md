# A Little Help

This repository contains the personal fundraiser website for setonrcs-com.

Static, code-only fundraiser page. It includes a session-scoped 18+ self-attestation gate, prominent giving disclosures, and a Stripe Payment Link. Payments are handled by Stripe Checkout.

## Before accepting donations

- Have an attorney review the fundraiser description, alleged reputational losses, legal-cost language, and gift terms.
- Review Stripe's current Payment Links requirements and confirm the account, link, and intended fundraiser use comply.
- The supplied monthly Stripe Payment Link and its QR code are connected in `script.js` and `index.html`. The CTA and QR are revealed only after the visitor acknowledges the disclosures.
- The page states before checkout that Stripe payments recur monthly; confirm the linked amount and billing schedule in Stripe.
- The page displays an organizer-reported offline-gift breakdown ($7,000 from Mike D., $4,000 from Kelly W., and an unitemized hat cash collection) and a total over $12,554. Confirm all figures and obtain permission before publicly identifying donors; update the figures as appropriate. This static repository has no backend or live total endpoint.
- Confirm every factual claim and update totals only from accurate donation records. The page does not simulate online donations.

## Notes board

The page does not display invented supporter names, testimonials, or payment-method claims. Add real names or quotes only with the relevant person's permission. The organizer reports accepting offline gifts directly; no specific offline method or contact details have been supplied for publication.

The age prompt is an 18+ self-attestation stored in `sessionStorage` for the current browser session. It does not collect identity documents or independently verify age.

The key giving disclosures remain beside the payment acknowledgment; the full site and fundraiser disclaimer is on `disclaimer.html`, linked from the giving section and footer. The disclaimer is general website copy, not a substitute for attorney review or individualized legal advice.

Arch AI DataCenters is credited beneath the payment section for contributing to the website's design and implementation.

The page uses responsive HTML/CSS and a small fixed desktop/mobile layout preview toggle. It uses standard browser features; verify the final hosted version in Opera GX, Chrome, Edge, and target mobile browsers before launch.

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` is prepared to publish the fundraiser site from the `hotshotkev-medical-donations-page` branch. Treat the site as unpublished until the Pages deployment completes successfully and its public URL is verified.

Search metadata uses an accurate page title and description. Hidden keyword lists and unrelated church or school names are intentionally omitted so search results do not imply an affiliation or endorsement.
