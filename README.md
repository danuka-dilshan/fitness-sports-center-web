# 🏋️ Fitness Sports Center — Web App

A modern, fully responsive gym website built with **React + Vite**. Features real-time search, EmailJS API integration, and advanced form handling.

---

## 🚀 Live Demo

[https://fitness-sports-center-web.vercel.app](https://fitness-sports-center-web.vercel.app)

---

## 🛠 Tech Stack

- **React 18** — UI components
- **Vite** — build tool & dev server
- **EmailJS** — email API integration (no backend needed)
- **CSS Modules** — component-scoped styles
- **localStorage** — client-side form submission history

---

## ✨ Features

### Core
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll navigation with sticky navbar
- Hero section with animated marquee
- About, Services, Plans, Contact, Footer sections
- Scroll reveal animations

### Extra Credit
- **🔍 Search & Filter** — real-time keyword search and category filter on Services section
- **🌐 API Integration** — EmailJS sends real emails on form submission
- **📋 Advanced Form Handling** — real-time validation, character counter, submission history log saved to localStorage

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── logo.png
│   └── hero.png
├── components/
│   ├── sections/
│   │   ├── About.jsx / About.css
│   │   ├── Contact.jsx / Contact.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Plans.jsx / Plans.css
│   │   └── Services.jsx / Services.css
│   ├── Footer.jsx / Footer.css
│   ├── Marquee.jsx / Marquee.css
│   ├── Nav.jsx / Nav.css
│   └── Reveal.jsx
├── styles/
│   └── global.css
├── constants.js
├── App.jsx
└── main.jsx
```

---

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/danuka-dilshan/fitness-sports-center-web.git
cd fitness-sports-center-web
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run the dev server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 📧 EmailJS Setup

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create an Email Service (Gmail)
3. Create a template with variables: `{{from_name}}`, `{{from_email}}`, `{{interest}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key into `.env`

---

## 🌐 Deployment

Deployed on **Vercel** with automatic GitHub integration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📄 License

MIT — free to use for personal and commercial projects.
