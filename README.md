# 🌌 Gowtham — Full-Stack Engineer Portfolio

> **Zero-G Physics & Anti-Gravity Developer Portfolio** engineered for high performance, smooth particle dynamics, and modern interactive aesthetics.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Python](https://img.shields.io/badge/Python-Backend-3776AB?style=for-the-badge&logo=python)](https://python.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## ✨ Features & Architecture

### 1. 🪐 Anti-Gravity / Zero-G Physics Aesthetic
- **Canvas-based Interactive Starfield:** Brownian zero-G floating dust particles that smoothly deflect away from the cursor using inverse-distance repulsion mathematics.
- **Dynamic Constellation Tethers:** Subtle SVG and Canvas energy lines that form dynamically between neighboring particles within proximity of the mouse.
- **Multi-Layer Cursor Parallax:** Perspective-based depth shifts across the hero terminal, orbital satellite badges, and project cards (`rotateX` / `rotateY` transforms).
- **Glassmorphism Design System:** Tailored deep cosmic void palette (`#08090E`, `#0D1117`), electric cyan (`#00F2FE`), neon violet (`#9D4EDD`), and layered frosted glass surfaces (`backdrop-blur-md`, subtle border glows).

### 2. ⚡ Section Breakdown
- **Hero Section (Zero-G Launchpad):**
  - High-impact typography and floating status pill with breathing green light (`Available for high-impact engineering roles`).
  - Interactive 3D layered code block toggling between **Python Flask Microservice** and **React Custom Zero-G Hook**.
  - Dual CTAs: "Explore Systems" (smooth scroll) and "Contact Terminal" (triggers micro-terminal).
- **Interactive Tech Stack (Floating Orbital Field):**
  - Filter by category: **Frontend**, **Backend & APIs**, **Cloud & Tooling**.
  - Magnetic badges that tether to complementary architecture layers on hover.
  - Interactive tooltip inspection for each skill's architectural role.
- **Featured Projects (Gravitational Pull Cards):**
  - **Neurostore — Full-Stack E-Commerce Platform:** React, Flask, REST APIs, Azure, Tailwind CSS. Includes interactive architecture flow inspector (Client ↔ API Gateway ↔ Python Engine ↔ Azure).
  - **Jubilant — Real-Time Catalog & Inventory Web App:** React, State Management, RESTful Endpoints, UI/UX. Includes client latency metrics and state flow inspection.
- **Experience & Engineering Philosophy:**
  - Coordinate beam vertical timeline showcasing work as an **Associate Software Engineer**.
  - Pillars: Low-Latency First, Modular Decoupling, Production Resilience.
- **Interactive Terminal & Quick Contact Dock:**
  - Floating bottom dock with command-line micro-terminal (`help`, `skills`, `projects`, `contact`, `email`, `socials`, `clear`).
  - One-click copy email button with confetti particle feedback and toast notification.
  - Direct links to GitHub, LinkedIn, and Resume download.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19 + Vite |
| **Styling** | Tailwind CSS (custom keyframes & glassmorphism) |
| **Motion & Physics** | Framer Motion + Canvas API + `requestAnimationFrame` |
| **Icons** | Lucide-React |
| **CI/CD & Hosting** | Vercel (Edge-optimized) + GitHub Actions |

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+`

### Installation
```bash
# 1. Clone repository
git clone https://github.com/gowtham-dev/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Production Build

```bash
# Run production build
npm run build

# Preview production bundle locally
npm run preview
```

---

## 🌐 Deploy to Vercel (One-Click)

This project contains a pre-configured `vercel.json` file ready for automatic deployment:

1. Push your code to your GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.

### Automatic CI/CD
A GitHub Actions workflow is included at `.github/workflows/deploy-check.yml`. Every `push` and `pull_request` to `main` executes an automated dependency install and build verification check.

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy-check.yml     # Automated build verification CI
├── public/
│   └── favicon.svg              # Zero-G orbital favicon
├── src/
│   ├── components/
│   │   ├── BackgroundCanvas.jsx # Interactive particle canvas with mouse repel
│   │   ├── ContactDock.jsx      # Micro-terminal & quick copy floating dock
│   │   ├── Experience.jsx       # Coordinate beam timeline & philosophy
│   │   ├── Hero.jsx             # 3D interactive code block & launchpad
│   │   ├── Navbar.jsx           # Floating frosted glass navigation
│   │   ├── Projects.jsx         # 3D perspective cards with architecture modal
│   │   └── TechOrbit.jsx        # Floating skill badges with energy tether
│   ├── App.jsx                  # Master portfolio view
│   ├── index.css                # Tailwind directives & cosmic glass utilities
│   └── main.jsx                 # React root render
├── index.html                   # HTML entry point with Google Fonts & SEO
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Cosmic color tokens & zero-g keyframes
├── vercel.json                  # Single-page app routing & cache configuration
├── vite.config.js               # Vite bundler config
└── README.md                    # Project documentation
```

---

## 📜 License
Distributed under the MIT License.
