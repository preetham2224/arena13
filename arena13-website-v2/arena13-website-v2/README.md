# ARENA 13 Funzone

Static website for Vercel. The deployed site is plain HTML, CSS, JavaScript,
and images; it needs no server, database, package install, or build step.

## Deploy

Import this folder as a Vercel project. `vercel.json` selects the **Other**
framework preset and enables clean URLs. Leave the build and install commands
empty, and use `public` as the output directory. The site is ready to deploy
as-is.

Vercel serves the pages without `.html` extensions using `vercel.json`.

## Files

- `public/` contains the site Vercel serves.
- `public/index.html` and the other HTML files are the website pages.
- `public/games/` contains activity detail pages.
- `public/static/` contains styles, scripts, and images.

`.vercelignore` limits deployment to the static site and Vercel configuration.
