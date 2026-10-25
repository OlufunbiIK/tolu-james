# Eventlybuilt: Wedding Website Template (React + Vite)

A responsive, data-driven wedding website. Every word on the page lives in `src/data/wedding.js`.

## Run
    npm install
    npm run dev        # local dev server
    npm run build      # production build in dist/
    npm run preview    # serve the build locally

`dist/` uses relative paths (`base: './'`), so it works on Vercel, Netlify, or any static host.

## Make it a client's wedding
1. Edit `src/data/wedding.js`: names, dates, `countdownTo`, story, events, dress code, venues, FAQ, gifts, RSVP details. All current content is sample data.
2. Replace the photos in `src/assets/img/` (keep filenames, or update `src/assets/images.js`). The included images are third-party samples, so swap them for licensed or client photos before going live.
3. Change colours in the `:root` variables at the top of `src/styles.css`.

## Google Maps
The Travel section has a venue picker, an embedded map, "Get directions" and "Open in Google Maps" buttons.
- It uses the keyless embed `https://www.google.com/maps?q=<query>&output=embed`, so no API key or billing is needed.
- Set each venue's `mapQuery` in `wedding.js` to the real venue name plus address. The samples point to neighbourhoods because the venues are fictional.
- Optional: for a styled map, use the Maps Embed API with a key (see the comment in `src/components/VenueMap.jsx`).

## RSVP
Set `VITE_RSVP_ENDPOINT` (for example a Formspree, Getform or your own endpoint URL) in a `.env` file. The form POSTs JSON there. Without it, replies are logged to the browser console and the thank-you message still shows, which is fine for demos only.

## Responsiveness
Tested at 320 to 2560 px wide, plus phone landscape (844×390). There is no horizontal overflow, and tap targets are at least 40px. It respects `prefers-reduced-motion` and device safe areas.
