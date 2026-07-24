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

## Booking engine (cita.online)

The studio will get a booking link on **cita.online** (Calens — beauty &
wellness booking platform). The site is pre-wired for it:

1. When the link arrives, search both `index.html` and `en/index.html`
   for `BOOKING_URL`.
2. Replace `BOOKING_URL` with the real link and uncomment the
   "Reservar online" / "Book online" button (the surrounding comment
   explains it in place).
3. Optionally make it the main CTA: point the hero's "Reservar cita" /
   "Book an appointment" button and the header's "Reservar" / "Book now"
   button at the same link instead of the `#reservar` / `#book` anchor.
4. If cita.online offers an embeddable widget, it could replace the
   booking section entirely — check their integration options once the
   account exists.

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
