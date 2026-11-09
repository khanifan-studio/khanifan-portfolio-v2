# Khanifan's Portfolio

AI Engineering, Machine Learning, and Computer Vision portfolio of Khanifan.

Live site: https://khanifan.my.id

## Tech Stack

- Next.js
- React
- Chart.js
- Lucide React
- Tailwind CSS

## Pages

- `/`: Home page
- `/projects`: Projects list
- `/projects/[slug]`: Project details
- `/experience`: Work experience
- `/about`: About page
- `/certifications`: Certifications

## Run Locally

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Updating Content

Portfolio content lives in `src/data/index.ts`, including projects, skills, certifications, work experiences, and skill growth data. Type definitions are in `src/types/index.ts`.

## Environment Variables

`NEXT_PUBLIC_TAWK_EMBED_PATH` is optional and uses the format `PROPERTY_ID/WIDGET_ID`. The chat widget is skipped when the variable is unset. See `.env.example`.
