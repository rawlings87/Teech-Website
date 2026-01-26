# Rawlings Global Solutions - Setup & Run Instructions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js), **yarn**, or **pnpm**
- A code editor (VS Code recommended)
- Git (optional, for version control)

## 🚀 Quick Start

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

Or with pnpm:

```bash
pnpm install
```

This will install all required packages:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

### 2. Run Development Server

```bash
npm run dev
```

The development server will start at [http://localhost:3000](http://localhost:3000)

You should see:
```
  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
  - Ready in X.Xs
```

### 3. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

The page will auto-reload when you make changes to the code.

## 🏗️ Build for Production

### Create Production Build

```bash
npm run build
```

This will:
- Compile TypeScript
- Optimise and minify code
- Generate static pages where possible
- Create an optimised production bundle in `.next/`

### Run Production Server Locally

```bash
npm start
```

This starts the production server at [http://localhost:3000](http://localhost:3000)

### Test Production Build

After building, test the production version to ensure everything works correctly before deploying.

## 📝 Required Configuration Before Launch

### 1. Update Contact Information

Edit [lib/content.ts](lib/content.ts):

```typescript
export const siteConfig = {
  name: 'Rawlings Global Solutions',
  // ... other fields
  email: 'your-actual-email@rawlingsglobalsolutions.com', // ← Update this
  phone: '+1 (XXX) XXX-XXXX', // ← Update this
};
```

### 2. Configure Form Submission

Edit [components/contact/QuoteForm.tsx](components/contact/QuoteForm.tsx):

Find the `handleSubmit` function (line ~19) and replace the TODO with actual form handling:

**Option A: Use FormSpree (Easiest)**
```typescript
const formData = new FormData(e.target as HTMLFormElement);
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
});
```

**Option B: Use Netlify Forms**
Add `data-netlify="true"` to the form element in QuoteForm.tsx

**Option C: Custom API Endpoint**
```typescript
const response = await fetch('/api/quote', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### 3. Add Consultation Booking Link

Edit [app/contact/page.tsx](app/contact/page.tsx):

Replace the `href="#"` with your booking tool URL:

```tsx
<Button variant="primary" href="https://calendly.com/your-username" fullWidth>
  {contact.consultation.cta}
</Button>
```

Popular options:
- [Calendly](https://calendly.com)
- [Cal.com](https://cal.com)
- [SavvyCal](https://savvycal.com)

### 4. Add Analytics (Optional)

To add Google Analytics, edit [app/layout.tsx](app/layout.tsx):

Add this before the closing `</body>` tag:

```tsx
{process.env.NODE_ENV === 'production' && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `,
      }}
    />
  </>
)}
```

Then create `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 5. Update Site URL

If your production URL is different from the default, update [lib/content.ts](lib/content.ts):

```typescript
export const siteConfig = {
  // ...
  url: 'https://your-actual-domain.com',
  // ...
};
```

## 🎨 Customising Content

All website copy is centralised in [lib/content.ts](lib/content.ts). Simply edit this file to update:

- Navigation links
- Page headings and descriptions
- Service offerings
- Metrics and statistics
- Contact details
- Footer content

Changes are reflected site-wide automatically.

## 📂 Project Structure

```
RGS webapp/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page + form
│   ├── events/            # Events listing
│   ├── privacy/           # Privacy policy (placeholder)
│   ├── recruitment/       # Recruitment page
│   ├── security/          # Security page (placeholder)
│   ├── services/          # Services overview
│   ├── terms/             # Terms of service (placeholder)
│   ├── training/          # Training programmes
│   ├── layout.tsx         # Root layout (Navbar + Footer)
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # Robots.txt
├── components/
│   ├── home/              # Home page sections
│   ├── layout/            # Navbar, Footer, PageHero
│   ├── contact/           # Quote form
│   └── ui/                # Button, Card, Badge
├── lib/
│   └── content.ts         # 🔑 ALL WEBSITE COPY
├── public/                # Static files
├── .env.example           # Environment variables template
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.ts     # Brand colours & tokens
├── tsconfig.json
├── README.md
└── INSTRUCTIONS.md        # This file
```

## 🎨 Brand Customisation

### Colours

Edit [tailwind.config.ts](tailwind.config.ts) to change the colour palette:

```typescript
colors: {
  ink: '#0A0D12',      // Background
  steel: '#1A1F2E',    // Surface
  primary: '#3B82F6',  // Primary actions
  accent: '#06B6D4',   // Highlights
  // ... etc
}
```

### Typography

To change fonts, edit [app/globals.css](app/globals.css):

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

Then update [tailwind.config.ts](tailwind.config.ts):

```typescript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Next.js - click "Deploy"

**OR** use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next`

### Deploy to Other Platforms

The site is a standard Next.js app and works on:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform
- Self-hosted (Docker, VPS, etc.)

## 🧪 Testing

### Run Linter

```bash
npm run lint
```

### Check TypeScript

```bash
npx tsc --noEmit
```

### Test Production Build Locally

```bash
npm run build && npm start
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Or use a different port:

```bash
PORT=3001 npm run dev
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Styling Not Applied

Ensure Tailwind is processing your files. Check [tailwind.config.ts](tailwind.config.ts) `content` array includes all component paths.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 🆘 Support

For issues specific to this codebase:
1. Check this instructions file
2. Review the [README.md](README.md)
3. Consult the official documentation for Next.js/Tailwind

For Next.js issues:
- [Next.js GitHub Issues](https://github.com/vercel/next.js/issues)
- [Next.js Discord](https://nextjs.org/discord)

---

**Built with Next.js, TypeScript, and Tailwind CSS**
**© 2026 Rawlings Global Solutions**
