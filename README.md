# IDEALS PlayWorld 🧸

A colorful, premium, highly interactive kids' toys & games e-commerce
front-end built with **React + Vite + Tailwind CSS + Framer Motion + React
Router**.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Tech stack

- **React 18** with function components + hooks
- **Vite** for a fast dev server and build
- **Tailwind CSS** for styling, with a custom playful color palette
  (sky blue, sunshine yellow, coral, mint, cream, navy)
- **Framer Motion** for page transitions, scroll reveals, hover/tap
  micro-interactions, the intro loader, hero parallax, and the testimonial
  carousel
- **React Router v6** for client-side routing across 6 pages
- **lucide-react** for icons
- Global React Context (`CartContext`) for cart + wishlist state, shared
  across the navbar badges, product cards, and product details page

## Project structure

```
src/
  animations/       reusable Framer Motion variants
  components/       Navbar, Hero, ProductCard, Footer, etc.
  context/          CartContext (cart + wishlist state)
  data/             mock products, categories, testimonials
  pages/            Home, Shop, Categories, ProductDetails, About, Contact
  App.jsx           routes, page transitions, loader, toast
  main.jsx          entry point
```

## Notes

- All product/category/testimonial data is mock data in `src/data/` — swap
  in a real API or CMS by replacing those files.
- Product images are sourced from Unsplash via URL; replace with your own
  product photography before going live.
- The cart and wishlist are in-memory only (no persistence/backend) — wire
  up a real backend or `localStorage` if you need persistence.
- The scrollbar is hidden globally per the design brief, while
  `scroll-behavior: smooth` keeps scrolling smooth on anchor/route changes.
