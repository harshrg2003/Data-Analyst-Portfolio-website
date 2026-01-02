# Harsh R Gayatri - Portfolio Website

A modern, aesthetic portfolio website for a Junior Data Analyst built with React, Tailwind CSS, and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

### Installation & Running

1. **Navigate to the project folder:**
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The site will automatically open at `http://localhost:3000`
   - If not, manually open: `http://localhost:3000`

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be in the `dist` folder, ready to deploy!

## 🌐 Deploy Your Website

### Option 1: Vercel (Recommended - FREE)
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be live in seconds!

### Option 2: Netlify (FREE)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder
3. Done!

### Option 3: GitHub Pages (FREE)
1. Push your code to GitHub
2. Go to Settings > Pages
3. Deploy from branch
4. Your site will be live at `https://yourusername.github.io/portfolio-website`

## 🎨 Customization

### Update Your Information

Edit `src/App.jsx` and update:

1. **Personal Info (Line ~90-110):**
   - Name, title, description
   - Contact details

2. **Projects (Line ~40-70):**
   - Add your project details
   - Update project links

3. **Experience (Line ~75-95):**
   - Update company names
   - Modify achievements

4. **Skills (Line ~100-130):**
   - Add/remove skills
   - Update certifications

5. **Links (throughout):**
   - Update LinkedIn URL
   - Update GitHub URL
   - Update email address

### Change Colors

In `src/App.jsx`, find these gradient classes:
- `from-violet-600` → Change to any Tailwind color
- `to-blue-600` → Change to any Tailwind color

Popular color options:
- Violet: `violet-500`, `violet-600`
- Blue: `blue-500`, `blue-600`
- Purple: `purple-500`, `purple-600`
- Cyan: `cyan-500`, `cyan-600`
- Green: `green-500`, `green-600`
- Pink: `pink-500`, `pink-600`

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── App.jsx          # Main portfolio component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md           # This file
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth animations
- ✅ Modern gradient aesthetics
- ✅ Interactive hover effects
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Mobile-friendly navigation

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- --port 3001
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
Make sure you have Node.js v16+ installed:
```bash
node --version
```

## 📞 Need Help?

If you run into issues:
1. Check the console for error messages
2. Make sure all dependencies are installed
3. Verify Node.js version is 16+
4. Clear cache: `rm -rf node_modules && npm install`

## 📄 License

Feel free to use this template for your own portfolio!

---

Built with ❤️ by Harsh R Gayatri
