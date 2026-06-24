<div align="center">

# 🛒 SunCart

**A modern summer-themed e-commerce web application**
built with Next.js 16, React 19, HeroUI & Better Auth

[![Live Demo](https://img.shields.io/badge/Live%20Demo-suncart--inky.vercel.app-F5A623?style=for-the-badge&logo=vercel&logoColor=white)](https://suncart-inky.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)

</div>

---

## 🌟 Overview

SunCart is a fully responsive e-commerce platform focused on summer essentials — from UV protection sunglasses to portable fans and beach gear. It features smooth animations, secure authentication, and a warm golden amber UI design.

---

## ✨ Features

- 🏠 **Home Page** — Hero banner with Summer Sale 2026 offers, popular products, summer care tips blog section, and top brands carousel
- 🛍️ **Products Page** — Full catalog of summer essentials with ratings, stock info, categories, and pricing
- 📄 **Product Details** — Individual product pages with detailed information
- 👤 **User Authentication** — Sign up & login with Better Auth (email/password)
- 🙍 **My Profile** — Protected user profile page
- 💫 **Smooth Animations** — animate.css powered transitions throughout the UI
- 🎠 **Brand Carousel** — Swiper.js powered infinite brand slider
- 📱 **Fully Responsive** — Mobile-first layout with Tailwind CSS v4

---

## 🛍️ Product Categories

| Category | Example Products |
|---|---|
| Accessories | UV Protection Sunglasses, Cooling Sports Cap |
| Skincare | SPF 50+ Sunscreen, Aloe Vera After Sun Gel |
| Outdoor | Hydration Water Bottle |
| Lifestyle | Summer Beach Towel |
| Electronics | Portable Mini Fan |
| Travel | Lightweight Summer Backpack |
| Footwear | Waterproof Beach Sandals |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| UI Library | React 19 |
| Component Library | HeroUI v3 |
| Styling | Tailwind CSS v4 |
| Animation | animate.css |
| Authentication | Better Auth v1.6 |
| Database | MongoDB v7 |
| DB Adapter | @better-auth/mongo-adapter |
| Slider | Swiper.js v12 |
| Icons | React Icons, Lucide React, Iconify |

---

## 📁 Project Structure

```
suncart/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # Auth API routes
│   │   ├── products/     # Products listing & detail pages
│   │   ├── login/        # Login page
│   │   ├── register/     # Register page
│   │   ├── my-profile/   # Protected profile page
│   │   ├── privacy/      # Privacy policy page
│   │   └── page.js       # Home page
│   ├── components/       # Reusable UI components
│   └── lib/              # Auth config & utilities
├── next.config.mjs
├── package.json
└── tailwind.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB Atlas account
- npm / yarn / pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Morshedul-developer/suncart.git
cd suncart
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

> ⚠️ If MongoDB Atlas connection fails, try switching to Google DNS (`8.8.8.8`) or use a mobile hotspot.

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

Deployed on **Vercel**. To deploy your own instance:

1. Push your code to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in the Vercel dashboard
4. Deploy!

---

## 👨‍💻 Author

**Morshedul Islam Nijhum**

[![GitHub](https://img.shields.io/badge/GitHub-Morshedul--developer-181717?style=flat&logo=github)](https://github.com/Morshedul-developer)