# Origin Massage — Website

Bilingual static website for Origin Massage,
C/ Miguel Servet Nº28, local A2, 03190 Pilar de la Horadada, Alicante.

## Structure

```
index.html            Spanish site (default)
en/index.html         English site
assets/css/style.css  shared stylesheet
assets/js/main.js     mobile menu, scroll reveal, WhatsApp bubble
assets/fonts/         self-hosted variable fonts (woff2, latin subset)
```

No build step, no external requests except the Google Maps embed —
fonts are self-hosted (GDPR-friendly, ~88 KB total).

## Live site

**https://originmassage.es/** (Spanish) · **https://originmassage.es/en/** (English)

Hosted on the studio's own hosting (nginx, Hostinger IP), served from this
repository (https://github.com/mkatogui/originmassage). Canonical + hreflang
tags, `robots.txt`, and `sitemap.xml` all point at `originmassage.es`.
After content changes: commit, push, and sync the hosting with the repo.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Language handling

Spanish lives at `/`, English at `/en/` — separate pages (best for SEO),
linked via the ES/EN switch in the header. When editing copy, remember to
update **both** files.

## Booking engine (cita.online / Calens)

The platform supports iframe-embedding public storefront pages
(`?embed=1` hides its header/footer) — full guide in the platform repo,
`booking_platform/docs/embedding.md`. The booking section of both pages
contains a ready, commented-out iframe + button. To activate:

1. **Platform side** (two blockers as of 2026-07-25):
   - The deployed allowlist has a typo: `EMBED_ALLOWED_ORIGINS` must be
     `https://originmassage.es` (production currently allows
     `originmassages.es`, which is not this site's domain).
   - Origin Massage's storefront doesn't exist yet — no slug on
     cita.online resolves. Onboard the salon and note its real slug.
2. **This site**: search both `index.html` and `en/index.html` for
   `SLUG`, replace with the real storefront slug, and uncomment the
   iframe block and the "Reservar online" / "Book online" button.
3. Optionally point the hero and header booking CTAs at the same page.

Caveat: if a Stripe deposit is required, card entry redirects out of the
iframe to Stripe and back — expected behavior.

Until then, WhatsApp and Instagram remain the live booking CTAs.

## Content still to confirm with the owners

- Opening hours (currently "by appointment — ask on WhatsApp")
- "About us" / founders' story text (site uses placeholder copy;
  their Instagram "Sobre Nosotras" highlight has the real story)
- Which number is the main booking contact (or a shared WhatsApp Business number)
- Cancellation / booking policy, gift vouchers, parking & accessibility
- High-resolution logo (header/hero use a hand-drawn hamsa SVG placeholder)
  and treatment-room photos — ask for the original files, don't hotlink
  the Google Drive price-list images
- **Permission to publish the client testimonials** (taken from their
  Instagram feed; shown with first names only until confirmed)

## Page structure

Hero → About → Team (Flor / Tatiana) → Services & prices → Philosophy strip →
Testimonials → Booking CTAs (WhatsApp / Instagram) → Contact + Google Maps
embed → Footer. A floating WhatsApp button (bottom-right) offers both
therapists' numbers on every scroll position.
