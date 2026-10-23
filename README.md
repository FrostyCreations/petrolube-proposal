# PetroLube Energy – Website Proposal

Client review site for the Big On Digital website proposal to PetroLube Energy. React + Vite, built from the OMODA | JAECOO The Glen proposal template.

## Editing

- All proposal copy, prices and images: `src/data/proposalData.js`
- The quotes and their prices (excluding VAT) are in `quote.quotes`, matching quotes BOD-PLE-2026-01 to 04
- Client website links: add each address to `websites[].url` under the ClientShowcase section
- Section components: `src/components/pl/` and `src/components/dealer/`
- PetroLube skin: `src/petrolube-ui.css`
- Images: `public/pl/`, `public/clients/` and `public/team/`

## Local

```bash
npm install
npm run dev
```

## Deploy

Vercel builds with `npm run build` and serves `dist/` (settings in `vercel.json`). Every route falls back to `index.html` (so `/quotes` works), and all responses carry `X-Robots-Tag: noindex, nofollow` so the review site stays out of search results.

`public/.htaccess` keeps the same behaviour if the site is ever moved back to Xneelo.
