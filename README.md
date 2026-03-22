# Nakola Expert Systems — Portfolio Website

> **Intelligent Solutions. Built in Nairobi.**

A modern, high-performance portfolio website for **Nakola Expert Systems** — a premium AI, software engineering, and cloud solutions provider based in Nairobi, Kenya.

![Status](https://img.shields.io/badge/status-live-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## Overview

This is a conversion-focused portfolio site showcasing Nakola's services, featured projects, tech stack, client testimonials, and contact information. It is designed to attract enterprise and startup clients looking for world-class technology partners.

### Key Sections

- **Hero** — Bold headline with animated code block visual and tech stack preview
- **About** — Company bio, location, team size, and social links
- **Services** — AI & ML, Full-Stack Web & Mobile, Enterprise Systems, UI/UX Design, Cloud Architecture, Technology Consulting
- **Skills & Tech Stack** — Progress bars and a visual tech grid (Python, React, AWS, Docker, TensorFlow, etc.)
- **Stats** — Animated counters (projects delivered, clients, engineering hours, countries)
- **Projects** — 6 featured project cards with descriptions and tech stack tags
- **Testimonials** — 4 client quotes with star ratings
- **Contact** — Form with strong CTA ("Start Your Project Today")
- **Footer** — Multi-column with branding, quick links, contact info, and social icons

### Features

- Dark / Light mode toggle (persisted via localStorage)
- Sticky header with glassmorphism blur and shrink-on-scroll
- Responsive mobile hamburger menu with smooth animation
- Scroll-triggered fade-up animations (Intersection Observer)
- Animated stat counters on scroll
- Active nav link highlighting based on scroll position
- Back-to-top button

---

## Tech Stack

| Layer     | Technology                             |
| --------- | -------------------------------------- |
| Structure | HTML5 (semantic)                       |
| Styling   | CSS3 (custom properties, glassmorphism)|
| Framework | Bootstrap 5.3                          |
| Icons     | Font Awesome 6.7.2 (self-hosted)       |
| Fonts     | Inter, JetBrains Mono (Google Fonts)   |
| Scripts   | Vanilla JavaScript (ES6+)              |

---

## Project Structure

```
├── index.html                  # Main page
├── css/
│   └── styles.css              # Custom styles (dark/light themes)
├── js/
│   └── scripts.js              # Interactions & animations
├── img/                        # Images (hero, projects, about)
├── fontawesome-free-6.7.2-web/ # Self-hosted Font Awesome
├── robots.txt                  # Search engine directives
├── .gitignore                  # Git ignore rules
├── LICENSE                     # MIT License
└── README.md                   # This file
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/nakola-portfolio.git

# Navigate into the project
cd nakola-portfolio

# Open in browser (or use VS Code Live Server)
open index.html
```

No build tools or dependencies required — it is a static site ready to deploy.

---

## Deployment

Deploy to any static hosting platform:

- **Vercel** — vercel --prod
- **Netlify** — drag-and-drop or connect repo
- **GitHub Pages** — push to gh-pages branch

Live site: [nakolaexpertsystems.vercel.app](https://nakolaexpertsystems.vercel.app/)

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

<p align="center">
  Built with precision by <a href="https://nakolaexpertsystems.vercel.app/">Nakola Expert Systems</a> — Intelligent solutions for forward-thinking businesses.
</p>
