# Take the Leap — Website

This is your website, built with Eleventy (a static site generator) so that:
- The design stays exactly as built — no template constraints.
- Your blog is editable through a visual dashboard (no code) once deployed.
- Hosting is free on Netlify.

## What's what

- `src/pages/` — Home, About, Services, Results, Contact. Hand-built HTML.
  Edit these directly in a text editor, or ask Claude to update them for you.
- `src/blog/posts/` — Blog posts as Markdown files. These are the files the
  CMS dashboard edits for you once deployed.
- `src/css/style.css` — All site styling and design tokens (colors, fonts).
- `admin/` — The CMS dashboard config. Visit `yoursite.com/admin/` after
  deploying to edit blog posts through a simple form-based interface.

## First-time setup (see the step-by-step guide from Claude)

1. Push this project to a GitHub repository.
2. Connect that repository to Netlify (drag-and-drop or Git import).
3. In Netlify: enable **Identity** and **Git Gateway** (under Site settings →
   Identity). This is what lets `/admin/` log you in securely.
4. Invite yourself as a user under Identity, and you're in.

## Local preview (optional, for the technically curious)

```
npm install
npm run start
```

This runs a local preview server so you can see changes before pushing them.

## Adding a new blog post without the CMS

Copy an existing file in `src/blog/posts/`, change the front matter (the
`---` block at the top) and the content below it, then rebuild.
