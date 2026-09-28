# Kirti Yadav — portfolio

Production site for Kirti Yadav, Full-Stack AI Engineer. The visual and written source is `Portfolio.html`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run lint
npm run build
npm start
```

## Before deploy

Set `NEXT_PUBLIC_SITE_URL` to the public origin, with no trailing slash. See `.env.example`.

Add the two resume PDFs referenced by the approved prototype:

- `public/resume/Kirti_Yadav_3Yr_Exp_Full-Stack.pdf`
- `public/resume/Kirti_Yadav_AI_Engineer.pdf`
