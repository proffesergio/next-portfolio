## 🎉 Project Overview

My personal portfolio website built using Next.js, Tailwind CSS and Framer-motion.

## 📍 Live

Live portfolio: [billsbro.vercel.app](https://billsbro.vercel.app/)

The portfolio preserves its animated particle background and card galleries,
with responsive navigation, project search and filters, and accessible previews.
Project content and deployment notes live in `src/lib/project-data.ts`; original
creative work and experience content live in `src/lib/data.tsx`.

New project screenshots are stored in `public/images/projects/` as WebP files.
Use real page captures, and distinguish live sites, demos, sign-in-only projects,
and repositories without a verified deployment.

## 💾 Installation

Download the project to your computer and install needed packages with command:

```bash
$ npm install
```

Then create .env file:

```bash
SITE_URL='https://example.com' ## Required to generate sitemap by next-sitemap
RESEND_API_KEY='your_resend_api_key' ## Required to send email by resend
```

Then start the project on the local server with the command:

```bash
$ npm run dev
```

and open http://localhost:3000 to see this app.

## 🔧 Tech/framework used

- Next.js
- TypeScript
- Tailwind CSS
- Framer-motion
- React-hook-form
- Resend

If you encounter a problem, write to this e-mail address:
[bilal.hossai1@gmail.com](mailto:bilal.hossai1@gmail.com)
