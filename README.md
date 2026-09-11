# Bekele Shimelis — Personal Portfolio

A clean, dark-navy personal tech portfolio website built with pure **HTML, CSS, and JavaScript** — no build tools or dependencies required.

## 🚀 Quick Start

Just open `index.html` in your browser. That's it.

Or serve it locally with Python:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080`

---

## 📁 File Structure

```
portfolio/
├── index.html      ← All page content (sections, text, projects, experience)
├── style.css       ← All styling (colors, layout, animations)
├── main.js         ← Interactivity (navbar, tabs, form, animations)
├── resume.pdf      ← Your CV / Resume file for the navbar Resume button
├── avatar.jpg      ← Your profile photo (replace with your real photo)
└── README.md       ← This file
```

---

## ✏️ How to Update Content

### Change your name / title / bio
Open `index.html` and edit the **Hero** section (`#hero`):
```html
<h1 class="hero-name">Bekele Shimelis.</h1>
<h2 class="hero-title">I build things for the web & beyond.</h2>
<p class="hero-bio">...</p>
```

### Add / edit projects
Find the `#projects` section in `index.html`. Each project is an `<article class="project-card">`. Copy an existing card and change:
- `id` on the `<h3>` (for accessibility)
- `<h3 class="project-title">` — project name
- `<p class="project-desc">` — description
- `<ul class="project-tech">` — technologies
- `href` on the GitHub/Live links

### Update experience tabs
Find the `#experience` section. Edit the `<button class="exp-tab">` labels and `<div class="exp-panel">` content blocks.

### Change contact info
Replace in `index.html`:
```html
<a href="mailto:bekeleezra995@gmail.com" ...>bekeleezra995@gmail.com</a>
```

### Change colors
Open `style.css` and edit the `:root` variables at the top:
```css
:root {
  --clr-bg:      #0a192f;   /* page background */
  --clr-accent:  #64ffda;   /* green-teal highlight */
  --clr-text:    #ccd6f6;   /* body text */
  /* ... */
}
```

### Replace profile photo
Just replace `avatar.jpg` with your own photo (keep the same filename) or update the `src` attribute in `index.html`.

---

## 📬 Making the Contact Form Work

The form currently **simulates** submission. To make it send real emails, add one of these:

**Option A — Formspree (free, easy)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint URL
3. In `main.js`, replace the simulation block with:
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message })
});
```

**Option B — EmailJS (free, client-side)**
See [emailjs.com](https://www.emailjs.com) docs.

---

## 🌐 Deploying

**GitHub Pages** (free):
1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: main branch → `/ (root)`
3. Your site will be live at `https://yourusername.github.io/portfolio-`

**Netlify / Vercel** (free):
1. Drag and drop the folder at [netlify.com/drop](https://app.netlify.com/drop) or [vercel.com](https://vercel.com)

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--clr-bg` | `#0a192f` | Page background |
| `--clr-bg-alt` | `#112240` | Section alternates |
| `--clr-accent` | `#64ffda` | Teal highlight |
| `--clr-text` | `#ccd6f6` | Body text |
| `--clr-text-muted` | `#8892b0` | Secondary text |
| `--font-sans` | Inter | Body font |
| `--font-mono` | Fira Code | Code / labels |

---

Built with ❤️ by Bekele Shimelis
