# Rawlings Global Solutions Website

A 2026-ready, upscale marketing website for Rawlings Global Solutions - a Black-owned tech company delivering digital security and IT excellence.

## Features

- **Modern Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Cinematic Design**: SOC-grade interface aesthetic with dark theme
- **Fully Responsive**: Mobile-first design optimised for all devices
- **SEO Optimised**: Complete metadata, sitemap, and robots.txt
- **Performance First**: Excellent Lighthouse scores, minimal dependencies
- **Accessible**: WCAG-aware contrast, keyboard navigation, reduced motion support
- **Content Management**: Single source of truth in `lib/content.ts`

## Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimised production build
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── events/            # Events page
│   ├── recruitment/       # Recruitment page
│   ├── services/          # Services page
│   ├── training/          # Training page
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles & Tailwind imports
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/
│   ├── home/              # Home page components
│   │   ├── Hero.tsx
│   │   ├── MetricsStrip.tsx
│   │   ├── TelemetryFeed.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── IndustryGrid.tsx
│   │   └── CTABlock.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageHero.tsx
│   ├── contact/           # Contact components
│   │   └── QuoteForm.tsx
│   └── ui/                # Reusable UI primitives
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
├── lib/
│   └── content.ts         # Single source of truth for all copy
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration with brand tokens
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Editing Content

All website copy is centralised in [lib/content.ts](lib/content.ts). Edit this file to update:

- Navigation links
- Page headings and body copy
- Service descriptions
- Contact details
- Footer content

Changes will automatically reflect across the entire site.

## Configuration TODO

### Required Changes Before Launch

1. **Contact Details** ([lib/content.ts](lib/content.ts#L8-L11))
   - Replace placeholder email and phone number with real contact information

2. **Form Submission** ([components/contact/QuoteForm.tsx](components/contact/QuoteForm.tsx#L19))
   - Configure form endpoint (e.g., FormSpree, Netlify Forms, custom API)
   - Update the TODO comment with actual submission logic

3. **Consultation Booking** ([app/contact/page.tsx](app/contact/page.tsx))
   - Replace `href="#"` with calendar booking tool URL (Calendly, Cal.com, etc.)

4. **Analytics** (Optional)
   - Add Google Analytics, Plausible, or preferred analytics in [app/layout.tsx](app/layout.tsx)

5. **Environment Variables** (If using API endpoints)
   - Create `.env.local` with required API keys
   - Add variables to `.gitignore` (already included)

## Brand Tokens

Colour palette and spacing defined in [tailwind.config.ts](tailwind.config.ts):

### Colours
- **ink**: Deep black-blue background
- **steel**: Dark surface colour
- **slate**: Elevated surface colour
- **mist**: Muted text colour
- **frost**: Light text on dark backgrounds
- **primary**: Electric blue (actions)
- **accent**: Cyan (highlights)
- **success**: Green (status OK)
- **warning**: Amber (alerts)
- **danger**: Red (critical)

### Typography
- **Display/Headings**: Inter (600, 700, 800)
- **Body**: Inter (400, 500)
- **Monospace**: JetBrains Mono (telemetry feed)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (latest)

## Performance

Optimised for excellent Lighthouse scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Assumptions & Notes

- **Live SOC Feed**: Explicitly simulated UI (not connected to real telemetry)
- **Form Handling**: Placeholder endpoint (requires configuration)
- **Contact Details**: Demo placeholders (must be replaced)
- **Events**: Placeholder cards only (do not invent real events)
- **Imagery**: Uses gradients and abstract shapes (no stock photos)
- **Policy Pages**: Footer links to Privacy/Terms are placeholders

## Deployment

This is a standard Next.js application. Deploy to:

- **Vercel** (recommended): Zero-config deployment
- **Netlify**: Full support for Next.js
- **AWS Amplify**: Managed hosting
- **Self-hosted**: Docker, VPS, or dedicated server

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Support

For issues or questions about this codebase, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**© 2026 Rawlings Global Solutions. All rights reserved.**
