# Leo9 Hero Section Clone

A responsive and interactive **Hero Section + Navbar** web page inspired by [Leo9 Studio](https://leo9studio.com/), built with **React** and **plain CSS**, including **dark/light mode** and mobile responsiveness.

---

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Folder Structure](#folder-structure)  
- [Installation & Setup](#installation--setup)  
- [Running Locally](#running-locally)  
- [Build & Deployment](#build--deployment)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Overview

This project recreates the **Hero Section and Navbar** of the Leo9 Studio website with the following enhancements:

- Responsive design for **desktop, tablet, and mobile**  
- **Slide-in mobile navigation menu**  
- **Dark mode / Light mode toggle**  
- Reusable components for scalability  
- Optional sections for "Our Approach" and "Selected Works"

---

## Features

- Sticky Navbar with smooth slide-in menu on mobile  
- Animated blobs background in the Hero section  
- Hero section with headline, subheading, buttons, and mock visual card  
- Two sections below hero:
  1. **Section One**: Our Approach (Research, Design, Build)  
  2. **Section Two**: Selected Works (Project cards)  
- Dark/light mode toggle affecting the **entire page**  

---

## Technologies

- **React** (Functional Components & Hooks)  
- **CSS3** (Flexbox, Grid, Animations)  
- **Vite** (Build tool & development server)  
- **React Icons** (Moon/Sun icons)  

---

## Folder Structure

leo9-hero/

├── public/

│ └── vite.svg

├── src/

│ ├── assets/

│ │ └── react.svg

│ ├── components/

│ │ ├── About.jsx

│ │ ├── About.css

│ │ ├── Contact.jsx

│ │ ├── Contact.css

│ │ ├── Footer.jsx

│ │ ├── Footer.css

│ │ ├── Hero.jsx

│ │ ├── Hero.css

│ │ ├── Navbar.jsx

│ │ ├── Navbar.css

│ │ ├── SectionOne.jsx

│ │ ├── SectionOne.css

│ │ ├── SectionTwo.jsx

│ │ └── SectionTwo.css

│ ├── App.jsx

│ └── main.jsx

├── package.json

├── vite.config.js

└── README.md
---

## Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/Durgaprasadgalla/leo9-hero.git
cd leo9-hero
```
Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser at http://localhost:5173


Running Locally

Fully responsive on desktop, tablet, and mobile

Use the dark mode toggle (Moon/Sun icon) in the Navbar

Mobile: click hamburger ☰ to open menu; ✕ closes it

Build & Deployment

Build the project for production:

npm run build


This creates the dist/ folder.

Preview production locally (optional):

npm run preview


Deploy to GitHub Pages (optional):

npm install gh-pages --save-dev


Add to package.json:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


Deploy:

npm run deploy


Deploy to Vercel or Netlify:

Connect your GitHub repo

Build command: npm run build

Output directory: dist

Deploy

Contributing

Fork the repository

Create a branch: git checkout -b feature/your-feature

Commit changes: git commit -m "Add new feature"

Push branch: git push origin feature/your-feature

Create a Pull Request

License

This project is open-source and free to use.


---

If you want, I can also **add a screenshot section and live demo link section** in this README so it looks **even more professional for GitHub**.  

Do you want me to do that?

## LIVE LINK : https://leo9-hero-io66.vercel.app/

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
