# Quick Start Installation Guide

## Prerequisites
- Node.js 18.x or higher ([Download here](https://nodejs.org/))
- npm (comes with Node.js)

## Installation Steps

### 1. Navigate to Project Directory
```bash
cd securefunds-nextjs
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- next@^14.2.0
- react@^18.3.0
- react-dom@^18.3.0
- typescript@^5.0.0
- tailwindcss@^3.4.0
- And other dev dependencies

### 3. Run Development Server
```bash
npm run dev
```

Your app will be running at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production
```bash
npm run build
```

### 5. Start Production Server
```bash
npm start
```

## Troubleshooting

### If npm install fails:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### If port 3000 is already in use:
```bash
# Run on different port
PORT=3001 npm run dev
```

### If you see TypeScript errors:
```bash
# Generate types
npm run build
```

## What's Installed?

### Core Dependencies
- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework

### Dev Dependencies
- **autoprefixer**: CSS vendor prefixing
- **postcss**: CSS processing
- **@types/***: TypeScript type definitions

## File Structure
```
securefunds-nextjs/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
├── public/                # Static files
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind config
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
└── postcss.config.js      # PostCSS config
```

## Next Steps

1. **Customize Content**: Edit files in `app/` and `components/`
2. **Update Metadata**: Modify SEO tags in `app/layout.tsx`
3. **Add Your Logo**: Replace images in `public/`
4. **Deploy**: See DEPLOYMENT.md for deployment options

## Support

If you encounter issues:
1. Check Node.js version: `node --version` (should be 18+)
2. Check npm version: `npm --version`
3. Clear cache and reinstall
4. Check the README.md for detailed docs

## Quick Commands Reference

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

Happy coding! 🚀
