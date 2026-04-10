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
// PRIMARY KEYWORD: "android app development company in mysore"
// TARGET: 15 exact-match placements + 25+ semantic variations
// ============================================================

const PAGE_URL =
  'https://nakshatranamahacreations.com/android-app-development-company-in-mysore';

// Placement #1: Meta Title
// Placement #2: Meta Description
export const metadata: Metadata = {
  title:
    'Android App Development Company in Mysore | Kotlin, Java Apps | NNC',
  description:
    'Nakshatra Namaha Creations is the top Android app development company in Mysore. Native Android apps in Kotlin & Java. 565+ projects, 35+ in-house developers, Play Store deployment, fixed price. Get a free quote today.',
  keywords: [
    'android app development company in mysore',
    'android app developers mysore',
    'native android app development mysore',
    'kotlin app development mysore',
    'java android app development mysore',
    'play store app development mysore',
    'android application development mysore',
    'hire android developers mysore',
    'custom android app development mysore',
    'enterprise android app development mysore',
  ],
  authors: [{ name: 'Nakshatra Namaha Creations Pvt Ltd' }],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Android App Development Company in Mysore | NNC Digital',
    description:
      'Top Android app development company in Mysore. Kotlin, Java, native Android apps. 565+ projects, 35+ in-house developers.',
    images: ['/og-android-mysore.jpg'],
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Android App Development Company in Mysore | NNC',
    description:
      'Top Android app development company in Mysore. Kotlin, Java, native Android apps.',
    images: ['/og-android-mysore.jpg'],
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Mysore, Karnataka',
    'geo.position': '12.2958;76.6394',
    ICBM: '12.2958, 76.6394',
  },
};

export default function AndroidAppDevelopmentCompanyMysorePage() {
  // Placement #3: LocalBusiness schema description
  const localBusinessSchema = buildLocalBusinessSchema({
    name: 'NNC - Android App Development Company in Mysore',
    description:
      'Nakshatra Namaha Creations is the leading Android app development company in Mysore building native Android applications in Kotlin and Java for businesses and enterprises. 565+ projects delivered since 2015, 35+ in-house Android developers.',
    url: PAGE_URL,
  });

  // Placement #4: Service schema
  const serviceSchema = buildServiceSchema({
    serviceType: 'Android App Development Company in Mysore',
    description:
      'End-to-end Android app development services from an in-house team. Native Kotlin and Java development, Play Store deployment, ASO support and post-launch maintenance.',
    offers: [
      'Native Android App Development',
      'Kotlin App Development',
      'Java Android App Development',
      'Android Enterprise Applications',
      'Android Play Store Deployment',
      'Android App Maintenance & Support',
    ],
  });

  // Placements #5, #6, #7: FAQ questions use primary keyword
  const faqItems = [
    {
      question: 'Which is the best Android app development company in Mysore?',
      answer:
        'Nakshatra Namaha Creations is the leading Android app development company in Mysore with 10+ years of native Android delivery, 565+ projects completed, and 35+ in-house developers specialising in Kotlin, Java and modern Android architectures.',
    },
    {
      question: 'What does an Android app development company in Mysore charge?',
      answer:
        'A quality Android app development company in Mysore typically charges ₹1 lakh to ₹20 lakh depending on complexity, features, backend requirements, third-party integrations and design scope. We offer fixed-price quotes in writing.',
    },
    {
      question:
        'Does your Android app development company in Mysore work in Kotlin or Java?',
      answer:
        'Both. We write new Android apps primarily in Kotlin, which is now the Google-recommended language for Android development. We also maintain legacy Java codebases and can migrate them to Kotlin when required.',
    },
    {
      question: 'Do you handle Play Store submission and ASO?',
      answer:
        'Yes. Complete Play Store submission, developer account setup, store listing optimisation, screenshots, descriptions, keyword targeting and App Store Optimisation (ASO) are included in our Android app delivery.',
    },
    {
      question: 'Can you build enterprise Android apps for our company?',
      answer:
        'Yes. We build internal enterprise Android applications for field force automation, inventory management, sales tracking, dealer portals, CRM integration and workflow digitisation.',
    },
    {
      question: 'Do you provide post-launch Android app maintenance?',
      answer:
        'Yes. 30 days of free support is included with every delivery, plus optional long-term maintenance contracts covering OS updates, bug fixes, security patches and feature additions.',
    },
  ];

  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema(
    'Android App Development Company in Mysore',
    PAGE_URL,
  );

  const whyUsItems = [
    {
      num: '01',
      title: 'Dedicated Android Developers',
      description:
        'Specialists in Kotlin, Java, Jetpack Compose, Room, Retrofit and the modern Android architecture components. Not generalists pretending to know mobile.',
    },
    {
      num: '02',
      title: 'Native Performance Focus',
      description:
        'We build truly native Android apps optimised for battery life, memory usage, smooth 60fps UI and the Android device fragmentation landscape.',
    },
    {
      num: '03',
      title: 'Play Store Deployment Included',
      description:
        'Store listing, screenshots, descriptions, developer account setup, ASO and submission all handled by our team as part of delivery.',
    },
    {
      num: '04',
      title: '565+ Delivered Projects',
      description:
        'Operating continuously since 2015. 87 verified Google reviews. 4.9-star rating. A verifiable track record not marketing claims.',
    },
    {
      num: '05',
      title: 'Fixed Price, Agreed Upfront',
      description:
        'Quoted before work begins. In 565+ projects over 10 years, not one client has been invoiced more than the agreed amount.',
    },
    {
      num: '06',
      title: 'Full Source Code Ownership',
      description:
        'Every source file, Android Studio project, signed keystore and Play Console credential handed over on delivery. No lock-in, no dependencies.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery',
      description: 'Understand users, devices, Android version targets and scope.',
      duration: 'Day 1-2',
    },
    {
      num: '02',
      title: 'Fixed Quote',
      description: 'Scope and price agreed in writing before any work starts.',
      duration: 'Day 2-3',
    },
    {
      num: '03',
      title: 'UI/UX Design',
      description: 'Material You design, wireframes and prototypes in Figma.',
      duration: 'Week 1-2',
    },
    {
      num: '04',
      title: 'Development',
      description: 'Kotlin/Java sprints with weekly APK builds for testing.',
      duration: 'Week 2-10',
    },
    {
      num: '05',
      title: 'QA & Testing',
      description: 'Multi-device testing, Firebase crashlytics, performance audit.',
      duration: 'Week 10-12',
    },
    {
      num: '06',
      title: 'Play Store',
      description: 'Store listing, ASO, submission and launch day support.',
      duration: 'Week 12+',
    },
  ];

  const technologies = [
    { name: 'Kotlin', category: 'Android' },
    { name: 'Java', category: 'Android' },
    { name: 'Jetpack Compose', category: 'UI' },
    { name: 'Room', category: 'Local DB' },
    { name: 'Retrofit', category: 'Networking' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Node JS', category: 'API' },
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
                Android App Development Company in{' '}
                <span className="text-sky">Mysore</span>
              </h1>
              {/* Placement #9: First paragraph - Primary keyword */}
              <p className="text-lg md:text-xl text-white/90 mb-7 leading-relaxed">
                Nakshatra Namaha Creations is the leading Android app
                development company in Mysore building native Android apps in
                Kotlin and Java for startups, SMEs and enterprises. 565+
                projects delivered, 35+ in-house Android developers, full Play
                Store deployment included.
              </p>
              <StatsBar />
              <TrustBadges />
              <div className="flex flex-wrap gap-4">
                <a href="#enquiry" className="btn-primary">
                  Get Free Android Quote
                </a>
                <a href="tel:+919900566466" className="btn-secondary">
                  Call +91 99005 66466
                </a>
              </div>
            </div>
            <EnquiryForm
              serviceType="Android App Development Mysore"
              heading="Get Your Android App Quote"
              subheading="Fixed-price proposal in 24 hours. NDA available."
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
            The Trusted Android App Development Company in Mysore
          </h2>
          <p className="lead-text">
            Ten years of native Android delivery. 565+ shipped projects.
            Thirty-five permanent engineers. Zero outsourcing.
          </p>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              Android dominates the Indian smartphone market with roughly 95%
              market share, which makes native Android app development the
              single most important mobile channel for any business targeting
              Indian consumers. Building a high-quality Android app is not just
              about writing code it is about understanding device
              fragmentation, battery optimisation, OS version compatibility,
              Material You design, Google Play policies and the ever-changing
              Android architecture components. That is why serious businesses
              do not trust this work to freelancers.
            </p>
            {/* Placement #11: Body paragraph - Primary keyword */}
            <p>
              Nakshatra Namaha Creations has been the Android app development
              company in Mysore businesses turn to when they need production
              grade Android applications built right the first time. Our
              dedicated Android team writes in Kotlin (the Google-recommended
              language for new projects), maintains Java codebases when
              required, and builds with the modern Android toolkit: Jetpack
              Compose, Room, Retrofit, Hilt, Coroutines, WorkManager and
              Firebase.
            </p>
            <p>
              Whether you need a consumer-facing booking app, an enterprise
              field-force application integrated with your ERP, a healthcare
              patient engagement platform, an on-demand delivery service or an
              e-commerce Android app, our in-house team has shipped something
              very similar in the past decade. We operate from four physical
              offices across India Bengaluru, Mumbai, Mysuru and Hyderabad
              and every client engagement is backed by a named project manager,
              weekly staging builds, and full source code ownership on
              handover.
            </p>
            <p>
              Every Android project we deliver includes complete Play Store
              deployment: developer account setup, store listing, screenshots,
              descriptions, ASO keyword targeting, submission and review
              support. You get a production-ready app on day one of launch
              along with crash monitoring, analytics dashboards and 30 days of
              free post-launch support.
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
            Services From Our Android App Development Company in Mysore
          </h2>
          <p className="lead-text">
            Every type of native Android application delivered end-to-end by
            our in-house engineering team.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: 'Native Kotlin App Development',
                description:
                  'Modern Android apps written in Kotlin with Jetpack Compose, Coroutines and the latest Android architecture components. The Google-recommended stack for new projects.',
              },
              {
                title: 'Java Android Development',
                description:
                  'Legacy Java codebase maintenance, bug fixes, version upgrades and gradual migration to Kotlin for businesses running older Android apps.',
              },
              {
                title: 'Enterprise Android Apps',
                description:
                  'Field force automation, dealer management, inventory tracking, sales apps and internal workflow apps with ERP and CRM integration.',
              },
              {
                title: 'Consumer & E-Commerce Apps',
                description:
                  'Shopping apps, booking platforms, on-demand service apps, food delivery apps and marketplace apps with payment gateway and logistics integration.',
              },
              {
                title: 'Android App Maintenance',
                description:
                  'OS version updates, bug fixes, security patches, feature additions and performance optimisation for existing Android apps.',
              },
              {
                title: 'Play Store Deployment & ASO',
                description:
                  'Developer account setup, store listings, keyword research, screenshots, descriptions and App Store Optimisation for maximum organic installs.',
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
        heading="Why We Are The Preferred Android App Development Company in Mysore"
        subheading="Six operating facts that separate us from every freelancer, offshore vendor and reseller agency in the Mysore region."
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
          <h2 className="heading-h2">
            Real Android Apps. Measured Outcomes.
          </h2>
          <p className="lead-text">
            Representative Android projects built by our in-house team with
            verifiable results.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                client: 'Vijaya Home Services',
                sector: 'On-Demand Android App',
                headline: '340% Bookings · 4.6★ Play Store',
                stack: 'Kotlin · Node JS · AWS',
                description:
                  'Native Android customer app with booking, payments, real-time tracking and support. 4.6 stars on Play Store with 340% growth.',
                metrics: ['340% Growth', '4.6★ Rating', '0 Phone Orders', '8wk Build'],
              },
              {
                client: 'Pro Leverage',
                sector: 'Finance Android App',
                headline: '10K Downloads First Month',
                stack: 'Flutter + Android',
                description:
                  'Retail investor Android app with real-time charts, live data feeds and clean UI. 10,000+ Play Store downloads in month one.',
                metrics: ['10K+ Downloads', '4.4★ Rating', '60% Less Queries', '6wk Build'],
              },
              {
                client: 'Healthcare Network',
                sector: 'Hospital Android App',
                headline: 'Patient Engagement Platform',
                stack: 'Kotlin · Firebase',
                description:
                  'Native Kotlin Android app for patient appointments, reports, prescriptions and doctor chat. Integrated with hospital HIS.',
                metrics: ['HIPAA Ready', 'Bio Auth', 'Offline Mode', '10wk Build'],
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
        heading="Android App Development Company in Mysore: Questions Answered"
        items={faqItems}
      />

      {/* ============ CTA BAND ============ */}
      {/* Placement #15: Final CTA heading */}
      <CTABand
        heading="Ready To Hire The Best Android App Development Company in Mysore?"
        subheading="Tell us what you need. We come back with clear scope, timeline and a fixed-price quote within 24 hours."
      />

      <Footer />
    </>
  );
}
