# Bekele Shimelis — Personal Portfolio

A modern, dark-navy personal tech portfolio website built with pure **HTML, CSS, and JavaScript** — no build tools or dependencies required. Deployed live on Vercel.

🔗 **Live Site:** [portfolio-man-221b.vercel.app](https://portfolio-man-221b.vercel.app)
🐙 **GitHub:** [github.com/bekeleezra995-colud](https://github.com/bekeleezra995-colud)

---

## 🛠️ Skills & Technologies

### 🖥️ Frontend
- JavaScript (ES6+), TypeScript
- React, Next.js
- HTML5, CSS3, Tailwind CSS
- Responsive Design, State Management

### ⚙️ Backend
- Node.js, Express
- Python, Flask, FastAPI
- REST APIs, Socket.io
- JWT Authentication, Google OAuth
- GraphQL

### 📱 Mobile
- Flutter, Dart
- Cross-Platform UI, Responsive Layouts

### 🗄️ Databases
- PostgreSQL, MongoDB, MySQL, SQLite
- Redis, Firebase, Supabase

### 🤖 AI & Machine Learning
- OpenCV, Face Recognition
- Computer Vision
- AI / ML Integration
- Scikit-learn, Data Processing

### 🛠️ DevOps & Tools
- Git & GitHub (31+ public repos)
- Docker, GitHub Actions
- CI/CD Pipelines, Vercel
- Linux / Bash

---

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
├── index.html        ← All page content (sections, text, projects, experience)
├── style.css         ← All styling (colors, layout, animations)
├── main.js           ← Interactivity (navbar, tabs, form, animations)
├── resume.jpg        ← CV / Resume image for the navbar Resume button
├── s.jpg             ← Hero section profile photo
├── n.jpg             ← About section photo
├── healthlink.png    ← HealthLink 360 project screenshot
├── edubridge.jpg     ← EduBridge project screenshot
├── attendance.jpg    ← Smart Attendance System screenshot
├── inventory.jpg     ← Inventory System screenshot
├── syncwrite.jpg     ← SyncWrite Collab Editor screenshot
├── auth.jpg          ← Authentication System screenshot
└── README.md         ← This file
```

---

## 📂 Featured Projects

| Project | Tech Stack | Link |
|---------|-----------|------|
| HealthLink 360 | React, Node.js, PostgreSQL, Socket.io, AI/ML | [GitHub](https://github.com/bekeleezra995-colud/halth-link) |
| Smart Attendance System | Python, OpenCV, Flask, React, SQLite | [GitHub](https://github.com/bekeleezra995-colud/atendance-system-full-stuck-project-) |
| Inventory Store Management | Python, Tkinter, MySQL, Pillow | [GitHub](https://github.com/bekeleezra995-colud/inventory-store-management-system) |
| SyncWrite Collab Editor | React, Node.js, Socket.io, MongoDB | [GitHub](https://github.com/bekeleezra995-colud/syncwrite-collab-editor) |
| Authentication System | Node.js, Express, JWT, Google OAuth, MongoDB | [GitHub](https://github.com/bekeleezra995-colud/AUTONTICATION-SYSTEM) |

---

## ✏️ How to Update Content

### Change name / title / bio
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
- `href` on the GitHub / Live links

### Update skills
Find the `#skills` section in `index.html`. Each category is a `<div class="skill-card">`. Add or remove `<li class="skill-tag">` items inside `<ul class="skill-tags">`.

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
Replace `s.jpg` (hero) or `n.jpg` (about section) with your own photo, keeping the same filename — or update the `src` attribute in `index.html`.

---

## 📬 Making the Contact Form Work

The form currently **simulates** submission. To make it send real emails:

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

**Vercel** (currently live):
- Push to `main` branch on GitHub → Vercel auto-deploys

**GitHub Pages** (free alternative):
1. Go to Settings → Pages → Source: main branch → `/ (root)`
2. Live at `https://bekeleezra995-colud.github.io/portfolio-`

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

Built with ❤️ by **Bekele Shimelis** — Debre Birhan, Ethiopia
