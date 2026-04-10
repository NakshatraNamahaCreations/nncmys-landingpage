import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';
import {
  StatsBar,
  TrustBadges,
  LocationBar,
  WhyUs,
  ProcessSteps,
  TechStack,
  Industries,
  FAQ,
  CTABand,
} from '@/components/Sections';
import {
  SchemaMarkup,
  buildLocalBusinessSchema,
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from '@/lib/schema';

// ============================================================
// PRIMARY KEYWORD: "app development company mysore"
// TARGET: 15 exact-match placements + 25+ semantic variations
// ============================================================

const PAGE_URL = 'https://nakshatranamahacreations.com/app-development-company-mysore';

// Placement #1: Meta Title
// Placement #2: Meta Description
export const metadata: Metadata = {
  title:
    'App Development Company Mysore | Android, iOS & Web Apps | NNC Digital',
  description:
    'Looking for an app development company Mysore businesses trust? Nakshatra Namaha Creations delivers Android, iOS, Flutter and React Native apps. 565+ projects, 35+ in-house developers, fixed price, zero outsourcing. Free quote in 24 hours.',
  keywords: [
    'app development company mysore',
    'app developers mysore',
    'mobile app company mysore',
    'android app company mysore',
    'ios app company mysore',
    'flutter app company mysore',
    'custom app development mysore',
    'enterprise app development mysore',
    'hire app developers mysore',
    'app development agency mysore',
  ],
  authors: [{ name: 'Nakshatra Namaha Creations Pvt Ltd' }],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'App Development Company Mysore | NNC Digital',
    description:
      'Top app development company Mysore. 565+ projects, 35+ in-house developers, Android, iOS, Flutter & React Native apps.',
    images: ['/og-app-dev-mysore.jpg'],
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Development Company Mysore | NNC',
    description: 'Top app development company Mysore. 565+ projects delivered.',
    images: ['/og-app-dev-mysore.jpg'],
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Mysore, Karnataka',
    'geo.position': '12.2958;76.6394',
    ICBM: '12.2958, 76.6394',
  },
};

export default function AppDevelopmentCompanyMysorePage() {
  // Placement #3: LocalBusiness schema description
  const localBusinessSchema = buildLocalBusinessSchema({
    name: 'NNC - App Development Company Mysore',
    description:
      'Nakshatra Namaha Creations is a leading app development company Mysore businesses rely on for Android, iOS, Flutter and React Native applications. 565+ delivered projects, 35+ in-house developers, zero outsourcing since 2015.',
    url: PAGE_URL,
  });

  // Placement #4: Service schema
  const serviceSchema = buildServiceSchema({
    serviceType: 'App Development Company Mysore',
    description:
      'End-to-end application development services from an in-house app development company Mysore businesses trust. Android, iOS, Flutter, React Native and custom enterprise apps.',
    offers: [
      'Android App Development',
      'iOS App Development',
      'Flutter App Development',
      'React Native App Development',
      'Custom Enterprise App Development',
      'On-Demand App Development',
    ],
  });

  // Placements #5, #6, #7: FAQ questions use the primary keyword
  const faqItems = [
    {
      question: 'Which is the best app development company Mysore businesses recommend?',
      answer:
        'Nakshatra Namaha Creations is among the most trusted app development companies in Mysore with 10+ years of delivery, 565+ completed projects, 35+ in-house developers and a 4.9-star Google rating. We build Android, iOS, Flutter and React Native apps.',
    },
    {
      question: 'How much does an app development company Mysore typically charge?',
      answer:
        'A quality app development company Mysore typically charges between ₹1 lakh and ₹25 lakh depending on platform, complexity, features, integrations and design requirements. We provide fixed-price quotes with zero surprise invoices.',
    },
    {
      question: 'What apps has your app development company Mysore built?',
      answer:
        'Our portfolio includes on-demand booking apps, healthcare and hospital apps, real estate apps, fintech apps, e-commerce apps, educational platforms and enterprise field-force automation apps across 10+ industries.',
    },
    {
      question: 'How long does an app project take?',
      answer:
        'MVP apps take 6-10 weeks, medium complexity apps take 12-16 weeks, and enterprise apps take 16-28 weeks with weekly sprint-based demos on a live staging environment.',
    },
    {
      question: 'Do you sign an NDA before discussing my app idea?',
      answer:
        'Yes. We sign mutual NDAs on request before detailed project discussions. Your idea, business logic and data remain fully confidential.',
    },
    {
      question: 'Do you handle Play Store and App Store submission?',
      answer:
        'Yes. Full Play Store and App Store deployment, ASO setup, screenshots, store listings, developer accounts handled by our team as part of delivery.',
    },
  ];

  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema(
    'App Development Company Mysore',
    PAGE_URL,
  );

  const whyUsItems = [
    {
      num: '01',
      title: 'Zero Outsourcing Ever',
      description:
        'Every developer on your project is a permanent NNC employee. No freelancers. No offshore contractors. Walk into our Mysuru office and meet the team.',
    },
    {
      num: '02',
      title: 'Fixed Price, Agreed Upfront',
      description:
        'Quoted before a single wireframe is drawn. In 565+ projects over a decade, not one client has been invoiced more than the agreed amount.',
    },
    {
      num: '03',
      title: 'You Own The Source Code',
      description:
        'On delivery: every source file, database, credential and store login is yours forever. No lock-in, no monthly fees, no strings.',
    },
    {
      num: '04',
      title: '565+ Delivered Projects',
      description:
        'Operating continuously since 2015. 87 verified Google reviews. 4.9-star rating. A verifiable track record not marketing claims.',
    },
    {
      num: '05',
      title: 'PageSpeed 90+ Guaranteed',
      description:
        'Not a target, a contractual requirement. Every app and web project we ship meets Core Web Vitals benchmarks before final handover.',
    },
    {
      num: '06',
      title: 'Named Project Manager',
      description:
        'One dedicated PM from discovery to handover. Weekly staging updates. Direct access. No runaround, no confusion, no excuses.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery',
      description: 'Understand business, users, goals and constraints in detail.',
      duration: 'Day 1-2',
    },
    {
      num: '02',
      title: 'Fixed-Price Quote',
      description: 'Scope, timeline and cost agreed in writing before any work.',
      duration: 'Day 2-3',
    },
    {
      num: '03',
      title: 'UI/UX Design',
      description: 'Figma wireframes and full designs approved before coding.',
      duration: 'Week 1-2',
    },
    {
      num: '04',
      title: 'Development',
      description: 'Weekly sprints with live staging builds you can test.',
      duration: 'Week 2-10',
    },
    {
      num: '05',
      title: 'QA & Launch',
      description: 'Cross-device testing, store deployment, go-live support.',
      duration: 'Week 10-12',
    },
    {
      num: '06',
      title: 'Post-Launch',
      description: '30 days free support plus optional long-term maintenance.',
      duration: 'Week 12+',
    },
  ];

  const technologies = [
    { name: 'React Native', category: 'Cross-Platform' },
    { name: 'Flutter', category: 'Cross-Platform' },
    { name: 'Kotlin', category: 'Android' },
    { name: 'Swift', category: 'iOS' },
    { name: 'Node JS', category: 'Backend' },
    { name: 'Next JS', category: 'Web' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
  ];

  return (
    <>
      <SchemaMarkup
        schemas={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <Header />

      {/* ============ HERO ============ */}
      {/* Placement #8: H1 - Primary keyword */}
      <section className="bg-gradient-to-br from-navy to-slate-900 text-white py-16 md:py-24">
        <div className="container-nnc">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div>
              <span className="inline-block bg-sky/10 border border-sky text-sky text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-5">
                4.9★ · 87 Google Reviews · 565+ Projects
              </span>
              <h1 className="heading-h1 mb-5">
                App Development Company <span className="text-sky">Mysore</span>{' '}
                Businesses Trust
              </h1>
              {/* Placement #9: First paragraph - Primary keyword */}
              <p className="text-lg md:text-xl text-white/90 mb-7 leading-relaxed">
                Nakshatra Namaha Creations is the app development company
                Mysore businesses rely on to build production-grade Android,
                iOS, Flutter and React Native applications. Ten years of
                in-house delivery, 565+ completed projects, zero outsourcing
                ever.
              </p>
              <StatsBar />
              <TrustBadges />
              <div className="flex flex-wrap gap-4">
                <a href="#enquiry" className="btn-primary">
                  Get Free Quote
                </a>
                <a href="tel:+919900566466" className="btn-secondary">
                  Call +91 99005 66466
                </a>
              </div>
            </div>
            <EnquiryForm
              serviceType="App Development Company Mysore"
              heading="Get Your Free App Quote"
              subheading="Fixed-price proposal in 24 hours. No obligation."
            />
          </div>
        </div>
      </section>

      <LocationBar />

      {/* ============ INTRO ============ */}
      {/* Placement #10: H2 - Primary keyword */}
      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">About NNC</span>
          <h2 className="heading-h2">
            The Only App Development Company Mysore Businesses Can Walk Into
          </h2>
          <p className="lead-text">
            A decade of mobile, web and enterprise application delivery from a
            permanent in-house team you can meet in person.
          </p>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              Choosing an app development partner is a decision most businesses
              get wrong the first time. They hire freelancers who disappear
              mid-project, offshore vendors with communication gaps, or
              so-called "agencies" that sub-contract every line of code. NNC
              operates differently and that difference is why we have become
              the app development company Mysore enterprises, funded startups
              and growing businesses across Karnataka rely on for serious
              mobile and web projects.
            </p>
            {/* Placement #11: Body paragraph - Primary keyword */}
            <p>
              As an app development company Mysore-based clients can actually
              visit, NNC operates four physical offices across India
              Bengaluru, Mumbai, Mysuru and Hyderabad. Our Mysuru branch sits
              at Suswani Towers, JP Nagar 2nd Stage, and every client engagement
              is built around full transparency. You meet the team. You see the
              staging builds every week. You approve every milestone. Nothing
              is hidden behind a project manager inbox.
            </p>
            <p>
              Our app development services cover the complete spectrum: native
              Android development in Kotlin and Java, native iOS development in
              Swift and SwiftUI, cross-platform development in Flutter and
              React Native, backend development in Node JS with MongoDB and
              PostgreSQL, and full cloud deployment on AWS. Whether you need a
              simple MVP to validate a startup idea or a complex enterprise
              platform integrated with your existing ERP and CRM systems, our
              in-house team has shipped it before.
            </p>
            <p>
              Every app project comes with a fixed-price quote in writing, a
              named project manager as your single point of contact, weekly
              staging demos, cross-device QA testing, Play Store and App Store
              deployment, and full source code ownership on delivery. There is
              no platform lock-in, no hidden monthly fees, no surprise invoices.
              Your app is yours forever.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      {/* Placement #12: Services H2 */}
      <section className="py-20 bg-slate-50">
        <div className="container-nnc">
          <span className="section-tag">What We Build</span>
          <h2 className="heading-h2">
            Services Offered By Our App Development Company Mysore Branch
          </h2>
          <p className="lead-text">
            Every major app category delivered entirely by our permanent
            in-house engineering team.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: 'Android App Development',
                description:
                  'Native Android apps in Kotlin and Java. Optimised for performance, battery and the Android device landscape. Play Store deployment included.',
              },
              {
                title: 'iOS App Development',
                description:
                  'Native iOS apps in Swift and SwiftUI. Full App Store compliance. iPhone, iPad and Apple Watch support where required.',
              },
              {
                title: 'Flutter Cross-Platform Apps',
                description:
                  'Flutter apps with Dart giving you one codebase for Android and iOS. Near-native performance with pixel-perfect UI consistency.',
              },
              {
                title: 'React Native Apps',
                description:
                  'Faster time-to-market with React Native. Shared JavaScript codebase, platform-specific modules where performance matters.',
              },
              {
                title: 'Enterprise Mobile Applications',
                description:
                  'Field force automation, inventory tracking, sales apps, dealer portals and workflow digitisation for enterprise clients.',
              },
              {
                title: 'On-Demand & Marketplace Apps',
                description:
                  'Complete ecosystems booking apps, delivery platforms, marketplaces with customer app, vendor app, admin panel and CRM.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl border-l-4 border-sky shadow-card hover:shadow-card-hover transition-shadow"
              >
                <h3 className="heading-h3 text-lg">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      {/* Placement #13: Why Us heading */}
      <WhyUs
        heading="Why NNC Is The App Development Company Mysore Enterprises Choose"
        subheading="These are not promises. They are verifiable operating facts you can confirm by walking into our JP Nagar office in Mysuru."
        items={whyUsItems}
      />

      {/* ============ PROCESS ============ */}
      <ProcessSteps
        heading="Six Steps. Your Approval At Every Stage."
        items={processSteps}
      />

      {/* ============ TECH STACK ============ */}
      <TechStack technologies={technologies} />

      {/* ============ INDUSTRIES ============ */}
      <Industries />

      {/* ============ CASE STUDIES ============ */}
      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">Case Studies</span>
          <h2 className="heading-h2">Real Apps. Measured Outcomes.</h2>
          <p className="lead-text">
            Three representative NNC projects the brief, what was built and
            the measured result.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                client: 'Vijaya Home Services',
                sector: 'On-Demand Services',
                headline: '340% Booking Growth in 6 Months',
                stack: 'React Native · Node JS · AWS',
                description:
                  'Complete ecosystem Android customer app, vendor staff app, admin CRM. 340% booking growth in six months.',
                metrics: ['340% Growth', '4.6★ Rating', '0 Phone Orders', '8wk Build'],
              },
              {
                client: 'Pro Leverage',
                sector: 'Finance & Investment',
                headline: '10K Downloads in Month 1',
                stack: 'Flutter · REST API',
                description:
                  'Flutter finance app with real-time charts, live feeds and retail-investor UI. 10,000+ downloads first month.',
                metrics: ['10K+ Downloads', '4.4★ Rating', '60% Fewer Queries', '6wk Build'],
              },
              {
                client: '3M Car Care',
                sector: 'Automotive Services',
                headline: 'SaaS CRM Across Franchise',
                stack: 'Next JS · Node · MongoDB',
                description:
                  'Multi-tenant SaaS CRM rolled out across car care franchise locations with GST invoicing and subscription billing.',
                metrics: ['Multi-tenant', 'GST Compliant', 'Razorpay Live', '10wk Build'],
              },
            ].map((cs) => (
              <div
                key={cs.client}
                className="bg-slate-50 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="bg-navy text-white p-5">
                  <div className="text-xs text-sky font-semibold mb-1">
                    {cs.sector}
                  </div>
                  <div className="font-bold text-lg">{cs.client}</div>
                </div>
                <div className="p-6">
                  <h3 className="heading-h3 text-base mb-2">{cs.headline}</h3>
                  <div className="text-xs text-sky-med font-semibold mb-3">
                    {cs.stack}
                  </div>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {cs.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {cs.metrics.map((m) => (
                      <div
                        key={m}
                        className="bg-sky-pale text-navy text-xs font-bold text-center py-2 rounded"
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      {/* Placement #14: FAQ heading */}
      <FAQ
        heading="App Development Company Mysore: Questions Answered"
        items={faqItems}
      />

      {/* ============ CTA BAND ============ */}
      {/* Placement #15: Final CTA heading */}
      <CTABand
        heading="Ready To Work With The Top App Development Company Mysore Has?"
        subheading="Tell us about your project. We will come back with clear scope, timeline and a fixed-price proposal within 24 hours."
      />

      <Footer />
    </>
  );
}
