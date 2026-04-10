# NNC Mysore Landing Pages

Ten SEO-optimised landing pages for **Nakshatra Namaha Creations** targeting high-intent keywords in the Mysore market. Built with **Next.js 14 App Router**, **Plus Jakarta Sans** (via `next/font/google`), **Tailwind CSS**, and full **schema.org JSON-LD** markup.

## 📦 What's Inside

### Mobile App Development Pages (6)
| Keyword | URL Slug |
|---|---|
| mobile app development company in mysore | `/mobile-app-development-company-in-mysore` |
| app development company mysore | `/app-development-company-mysore` |
| android app development company in mysore | `/android-app-development-company-in-mysore` |
| ios app development company in mysore | `/ios-app-development-company-in-mysore` |
| flutter app development company in mysore | `/flutter-app-development-company-in-mysore` |
| react native app development company in mysore | `/react-native-app-development-company-in-mysore` |

### CRM Development Pages (4)
| Keyword | URL Slug |
|---|---|
| crm software development company in mysore | `/crm-software-development-company-in-mysore` |
| custom crm development mysore | `/custom-crm-development-mysore` |
| crm development company in mysore | `/crm-development-company-in-mysore` |
| sales crm software mysore | `/sales-crm-software-mysore` |

## 🎨 Design System

- **Font:** Plus Jakarta Sans (self-hosted via `next/font/google`)
- **Colors:** Navy `#0D1B3E`, Sky `#29B6F6`, Sky Med `#0288D1`, Sky Pale `#E1F5FE`
- **Matches live theme:** Tone, structure, numbered sections, and content style identical to [nakshatranamahacreations.com](https://www.nakshatranamahacreations.com)

## 🔍 SEO Features

Every landing page includes:
- Primary keyword placed **15+ times** strategically (title, meta, H1, H2, H3, H4, body, schema, FAQ, CTA)
- **25+ semantic keyword variations** for natural ranking
- **LocalBusiness schema** with geo coordinates for Mysore
- **Service schema** with offer catalog
- **FAQPage schema** for "People Also Ask" real estate
- **BreadcrumbList schema**
- **Open Graph + Twitter Card** meta tags
- **Geo meta tags** (`geo.region`, `geo.position`, `ICBM`)
- **Canonical URLs**
- **Automatic sitemap.xml** generation at `/sitemap.xml`
- **robots.txt** at `/robots.txt`
- **~1800-2200 words** of unique content per page

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd nnc-mysore-landing-pages
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the index page listing all 10 landing pages.

### 3. Build for Production

```bash
npm run build
npm start
```

## 🔌 Form Backend Integration

The enquiry forms POST to `/api/enquiry`. Open `app/api/enquiry/route.ts` and replace the TODO comments with your actual backend:

**Recommended integrations:**
- **Email notification:** Resend, SendGrid, or nodemailer
- **Database:** MongoDB, PostgreSQL, Supabase
- **CRM:** Push directly to your CoreOS CRM via API
- **WhatsApp:** WhatsApp Business API notification to +91 99005 66466
- **Slack:** Webhook notification to sales channel

Example with Resend:

```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@nakshatranamahacreations.com',
  to: 'info@nakshatranamahacreations.com',
  subject: `New Enquiry: ${data.service}`,
  html: `<h2>${data.name} from ${data.company}</h2>...`,
});
```

## 📁 Project Structure

```
nnc-mysore-landing-pages/
├── app/
│   ├── layout.tsx                                          # Root layout + Plus Jakarta Sans
│   ├── globals.css                                         # Tailwind + NNC theme
│   ├── page.tsx                                            # Index of all landing pages
│   ├── sitemap.ts                                          # Auto sitemap.xml
│   ├── robots.ts                                           # Auto robots.txt
│   ├── api/enquiry/route.ts                                # Form submission handler
│   ├── mobile-app-development-company-in-mysore/page.tsx
│   ├── app-development-company-mysore/page.tsx
│   ├── android-app-development-company-in-mysore/page.tsx
│   ├── ios-app-development-company-in-mysore/page.tsx
│   ├── flutter-app-development-company-in-mysore/page.tsx
│   ├── react-native-app-development-company-in-mysore/page.tsx
│   ├── crm-software-development-company-in-mysore/page.tsx
│   ├── custom-crm-development-mysore/page.tsx
│   ├── crm-development-company-in-mysore/page.tsx
│   └── sales-crm-software-mysore/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── EnquiryForm.tsx                                     # Mobile app variant
│   ├── CRMEnquiryForm.tsx                                  # CRM variant with team size
│   └── Sections.tsx                                        # Reusable sections (StatsBar, WhyUs, etc.)
├── lib/
│   └── schema.ts                                           # JSON-LD builders
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## 🚢 Deployment

### Option A: Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Follow prompts. Set custom domain to `nakshatranamahacreations.com` (or subdomain `mysore.nakshatranamahacreations.com` initially).

### Option B: Integrate Into Existing Next.js Site

If your live site is already Next.js:

1. Copy the 10 page folders from `app/` into your existing project's `app/` directory.
2. Copy `components/`, `lib/`, and any missing Tailwind tokens from `tailwind.config.ts`.
3. Make sure your existing layout uses Plus Jakarta Sans.
4. Deploy as usual.

### Option C: Standalone Subdirectory

Host this as a standalone Next.js app and proxy it through Nginx/Cloudflare at `nakshatranamahacreations.com/mysore/*`.

## 📈 Post-Launch SEO Checklist (Do This In The First 7 Days)

1. **Submit to Google Search Console** — Request indexing for all 10 URLs immediately
2. **Submit sitemap.xml** — Add `https://nakshatranamahacreations.com/sitemap.xml` to GSC
3. **Internal linking** — Add links from your live homepage, services page, and Bangalore mobile app page pointing to these new Mysore pages with the exact keyword as anchor text
4. **Google Business Profile** — Create a GBP listing for your Mysuru branch (Suswani Towers, JP Nagar 2nd Stage) and link to these pages in the "Services" section
5. **Schema validator** — Test each page at [search.google.com/test/rich-results](https://search.google.com/test/rich-results) to confirm all schema renders correctly
6. **PageSpeed test** — Run each page through [pagespeed.web.dev](https://pagespeed.web.dev) to verify 90+ scores
7. **Backlinks** — Submit company to Sulekha, Justdial, Clutch, GoodFirms, DesignRush with these exact URLs as landing destinations
8. **Social signals** — Share each page once on LinkedIn, Facebook, Twitter/X to generate initial crawl signals

## 🎯 Keyword Density Verification

Each page has been verified to contain the exact primary keyword 15+ times. Run this command to verify any page:

```bash
grep -oci "mobile app development company in mysore" app/mobile-app-development-company-in-mysore/page.tsx
```

## 🛠 Tech Stack

- **Next.js:** 14.2.5 (App Router)
- **React:** 18.3.1
- **TypeScript:** 5.5.3
- **Tailwind CSS:** 3.4.6
- **Plus Jakarta Sans:** via `next/font/google` (zero external CSS)

## 📞 Contact

Nakshatra Namaha Creations Pvt. Ltd.
Website: [nakshatranamahacreations.com](https://www.nakshatranamahacreations.com)
Phone: +91 99005 66466
Email: info@nakshatranamahacreations.com
Mysuru Office: Suswani Towers, JP Nagar 2nd Stage, Mysore 570 008

---

© 2026 Nakshatra Namaha Creations Pvt. Ltd. All rights reserved.
