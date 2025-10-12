Code full developed by lene software development 
Notice :- NO OPEN SOURCE CODES WERE USED FOR THIS WEBSITE
Developed by Fasil bazezew (Bsc in software engineering)
Tech Stack

- [React](https://react.dev/) - JavaScript library for user interfaces
- [Vite](https://vitejs.dev/) - Next-gen frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router](https://reactrouter.com/) - Routing for React applications

1. **Install dependencies**
   bash
   npm install
   2. **Start development server**
   bash
   npm run dev
   3. **Build for production**
   bash
   npm run build
   4. **Preview production build**
   bash
   npm run preview
   ## 📁 Project Structure

text
.
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── styles/           # Global styles & Tailwind
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.js      # Vite configuration
## 💻 Development

- Components are in `src/components/`
- Pages are in `src/pages/`
- Add routes in `App.jsx`
- Customize Tailwind in `tailwind.config.js`
- Static assets go in `public/`

## ⚙️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## 🎨 Styling

This project uses Tailwind CSS. Customize your design system in `tailwind.config.js`:

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Your custom theme configuration
    }
  }
