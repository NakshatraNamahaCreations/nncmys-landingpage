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

// PRIMARY KEYWORD: "react native app development company in mysore"

const PAGE_URL =
  'https://nakshatranamahacreations.com/react-native-app-development-company-in-mysore';

export const metadata: Metadata = {
  title: 'React Native App Development Company in Mysore | JS Mobile Apps | NNC',
  description:
    'Nakshatra Namaha Creations is the top React Native app development company in Mysore. Cross-platform mobile apps in JavaScript. 565+ projects, 35+ in-house developers, fixed price. Get a free quote.',
  keywords: [
    'react native app development company in mysore',
    'react native developers mysore',
    'javascript mobile app development mysore',
    'cross platform react native mysore',
    'hire react native developers mysore',
    'react native enterprise apps mysore',
    'react native services mysore',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'React Native App Development Company in Mysore | NNC',
    description:
      'Top React Native app development company in Mysore. Cross-platform Android + iOS apps in JavaScript. 565+ projects.',
    images: ['/og-react-native-mysore.jpg'],
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Native App Development Company in Mysore',
    description: 'Top React Native app development company in Mysore.',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Mysore, Karnataka',
    'geo.position': '12.2958;76.6394',
    ICBM: '12.2958, 76.6394',
  },
};

export default function ReactNativeAppDevelopmentCompanyMysorePage() {
  const localBusinessSchema = buildLocalBusinessSchema({
    name: 'NNC - React Native App Development Company in Mysore',
    description:
      'Nakshatra Namaha Creations is the leading React Native app development company in Mysore building cross-platform mobile apps in JavaScript and TypeScript. 565+ projects, 35+ in-house developers since 2015.',
    url: PAGE_URL,
  });

  const serviceSchema = buildServiceSchema({
    serviceType: 'React Native App Development Company in Mysore',
    description:
      'Cross-platform React Native app development services. Android and iOS apps from a shared JavaScript codebase with native modules where performance matters.',
    offers: [
      'React Native Cross-Platform Apps',
      'React Native Android Development',
      'React Native iOS Development',
      'React Native Enterprise Apps',
      'React Native Maintenance',
      'React Native Migration',
    ],
  });

  const faqItems = [
    {
      question: 'Which is the best React Native app development company in Mysore?',
      answer:
        'Nakshatra Namaha Creations is the leading React Native app development company in Mysore with 10+ years of mobile experience, 565+ projects, and 35+ in-house developers specialising in React Native, JavaScript, TypeScript and cross-platform architectures.',
    },
    {
      question: 'How much does a React Native app development company in Mysore charge?',
      answer:
        'A quality React Native app development company in Mysore typically charges ₹1.5 lakh to ₹20 lakh depending on scope, features, native module requirements and backend complexity. Cross-platform React Native usually saves 30-40% compared to native Android + iOS.',
    },
    {
      question: 'Why React Native over native Android and iOS?',
      answer:
        'React Native lets you ship one JavaScript codebase to both Android and iOS with native components under the hood. For most business apps, it delivers faster time-to-market, lower cost, and near-native performance while allowing native modules where performance matters.',
    },
    {
      question: 'Is React Native good for enterprise apps?',
      answer:
        'Yes. Companies like Meta, Microsoft, Shopify, Discord, Coinbase and Walmart run React Native in production. For internal enterprise apps, dealer portals, sales apps and B2B platforms, it is an excellent choice.',
    },
    {
      question: 'Can you integrate native modules when needed?',
      answer:
        'Yes. Our team writes native iOS (Swift/Objective-C) and Android (Kotlin/Java) modules inside React Native apps when specific features require direct native performance or platform APIs not available in JavaScript.',
    },
    {
      question: 'Do you handle Play Store and App Store deployment?',
      answer:
        'Yes. Complete deployment to both Google Play Store and Apple App Store developer accounts, store listings, screenshots, ASO, submission and review support handled end-to-end.',
    },
  ];

  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema(
    'React Native App Development Company in Mysore',
    PAGE_URL,
  );

  const whyUsItems = [
    {
      num: '01',
      title: 'Dedicated React Native Team',
      description:
        'Specialists in React Native, JavaScript, TypeScript, Redux, React Navigation and native module integration not generalist web developers.',
    },
    {
      num: '02',
      title: 'Faster Time To Market',
      description:
        'Ship Android and iOS from one React Native codebase. 30-40% faster than building separate native apps, without compromising UX.',
    },
    {
      num: '03',
      title: 'Native Modules When Needed',
      description:
        'We write native Swift/Kotlin modules inside React Native apps when performance-critical features demand it. Best of both worlds.',
    },
    {
      num: '04',
      title: '565+ Delivered Projects',
      description:
        'Operating since 2015. 87 verified Google reviews. 4.9-star rating. A verifiable track record, not marketing promises.',
    },
    {
      num: '05',
      title: 'Fixed Price, No Surprises',
      description:
        'Written quote agreed before work starts. 565+ projects delivered, zero clients ever invoiced more than the agreed amount.',
    },
    {
      num: '06',
      title: 'Full Source Code Ownership',
      description:
        'React Native project, backend code, store credentials, all documentation handed over on delivery. No lock-in ever.',
    },
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', description: 'Requirements, users, platforms and native features.', duration: 'Day 1-2' },
    { num: '02', title: 'Fixed Quote', description: 'Scope and pricing agreed in writing before work.', duration: 'Day 2-3' },
    { num: '03', title: 'UI/UX Design', description: 'Figma designs approved before any code is written.', duration: 'Week 1-2' },
    { num: '04', title: 'RN Development', description: 'Weekly builds delivered via Expo or direct APK/IPA.', duration: 'Week 2-10' },
    { num: '05', title: 'QA & Testing', description: 'Cross-device testing on real Android and iOS hardware.', duration: 'Week 10-12' },
    { num: '06', title: 'Dual Store Launch', description: 'Play Store and App Store submission and review.', duration: 'Week 12+' },
  ];

  const technologies = [
    { name: 'React Native', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Redux', category: 'State' },
    { name: 'Expo', category: 'Tooling' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Node JS', category: 'API' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
  ];

  return (
    <>
      <SchemaMarkup schemas={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]} />
      <Header />

      <section className="bg-gradient-to-br from-navy to-slate-900 text-white py-16 md:py-24">
        <div className="container-nnc">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div>
              <span className="inline-block bg-sky/10 border border-sky text-sky text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-5">
                4.9★ · 87 Google Reviews · 565+ Projects
              </span>
              <h1 className="heading-h1 mb-5">
                React Native App Development Company in <span className="text-sky">Mysore</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-7 leading-relaxed">
                Nakshatra Namaha Creations is the leading React Native app development
                company in Mysore building cross-platform Android and iOS mobile apps
                from a shared JavaScript codebase. 565+ projects delivered, 35+ in-house
                React Native developers, production-grade apps shipped.
              </p>
              <StatsBar />
              <TrustBadges />
              <div className="flex flex-wrap gap-4">
                <a href="#enquiry" className="btn-primary">Get Free RN Quote</a>
                <a href="tel:+919900566466" className="btn-secondary">Call +91 99005 66466</a>
              </div>
            </div>
            <EnquiryForm
              serviceType="React Native Development Mysore"
              heading="Get Your React Native Quote"
              subheading="Fixed-price proposal in 24 hours. NDA available."
            />
          </div>
        </div>
      </section>

      <LocationBar />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">About NNC</span>
          <h2 className="heading-h2">The Trusted React Native App Development Company in Mysore</h2>
          <p className="lead-text">
            Cross-platform React Native apps for Android and iOS built in JavaScript
            and TypeScript by a dedicated in-house team.
          </p>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              React Native has become the cross-platform framework of choice for businesses that
              want to leverage their existing JavaScript and React talent while shipping mobile
              apps on both Android and iOS. Built and maintained by Meta (Facebook), React Native
              powers apps at companies including Shopify, Microsoft Teams, Discord, Coinbase,
              Walmart and countless Y Combinator startups. Its architecture lets you write once in
              JavaScript, render native UI components on each platform, and drop into native
              Swift or Kotlin code whenever performance demands it.
            </p>
            <p>
              Nakshatra Namaha Creations is the React Native app development company in Mysore
              businesses trust to use this framework correctly. Our team writes idiomatic
              TypeScript, follows modern React Native architecture patterns (Redux Toolkit, React
              Query, React Navigation), and understands when to drop into native modules versus
              when JavaScript is perfectly sufficient. We do not treat React Native as a shortcut;
              we treat it as a professional mobile framework that rewards careful engineering.
            </p>
            <p>
              Whether you need a consumer-facing marketplace, a fintech app, a healthcare platform,
              an enterprise field-force tool, an e-commerce mobile app, or an internal B2B product,
              our in-house React Native developers have shipped similar work over the past decade.
              We operate from four physical offices across India Bengaluru, Mumbai, Mysuru and
              Hyderabad and every engagement includes a named project manager, weekly staging
              builds, and full source code ownership on delivery.
            </p>
            <p>
              Every React Native project we deliver comes with a fixed-price quotation in writing,
              cross-device QA testing, complete Play Store and App Store deployment, and post-launch
              support. Your React Native project is yours forever no licensing, no lock-in, no
              surprise invoices ever.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container-nnc">
          <span className="section-tag">What We Build</span>
          <h2 className="heading-h2">Services From Our React Native App Development Company in Mysore</h2>
          <p className="lead-text">
            Every type of React Native application delivered in-house by our JavaScript mobile team.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'Cross-Platform Mobile Apps', description: 'Single React Native codebase deployed to both Android and iOS with platform-specific polish where it matters.' },
              { title: 'React Native E-Commerce', description: 'Shopping apps with cart, checkout, payment gateway, order tracking and loyalty programs.' },
              { title: 'React Native Fintech Apps', description: 'Investment, banking and finance apps with charts, secure transactions and biometric auth.' },
              { title: 'Enterprise React Native Apps', description: 'Field force, dealer management, inventory and internal workflow apps with ERP integration.' },
              { title: 'React Native Migration', description: 'Legacy native app migration to React Native, or React Native version upgrades for existing projects.' },
              { title: 'React Native Maintenance', description: 'Bug fixes, OS version updates, dependency upgrades and feature additions for existing RN apps.' },
            ].map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-xl border-l-4 border-sky shadow-card hover:shadow-card-hover transition-shadow">
                <h3 className="heading-h3 text-lg">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs
        heading="Why We Are The Preferred React Native App Development Company in Mysore"
        subheading="Six facts that separate NNC from freelancers, offshore vendors and generalist agencies claiming React Native skills."
        items={whyUsItems}
      />

      <ProcessSteps heading="Six Steps. Your Approval At Every Stage." items={processSteps} />

      <TechStack technologies={technologies} />

      <Industries />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">Case Studies</span>
          <h2 className="heading-h2">Real React Native Apps. Measured Outcomes.</h2>
          <p className="lead-text">Representative React Native projects delivered by our in-house JavaScript mobile team.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                client: 'Vijaya Home Services',
                sector: 'On-Demand React Native App',
                headline: '340% Booking Growth',
                stack: 'React Native · Node · AWS',
                description: 'Complete RN ecosystem: customer app, vendor app, admin CRM. 340% booking growth in six months.',
                metrics: ['340% Growth', '4.6★ Rating', 'Dual Platform', '8wk Build'],
              },
              {
                client: 'Marketplace Platform',
                sector: 'B2B Marketplace RN App',
                headline: 'Multi-Vendor Platform',
                stack: 'React Native · TypeScript',
                description: 'Cross-platform marketplace app with multi-vendor support, commission tracking and chat.',
                metrics: ['Multi-Vendor', 'Real-time Chat', 'Razorpay Live', '12wk Build'],
              },
              {
                client: 'Healthcare Network',
                sector: 'Hospital RN App',
                headline: 'Patient Engagement App',
                stack: 'React Native · Firebase',
                description: 'React Native app for appointments, reports, prescriptions and doctor chat across Android and iOS.',
                metrics: ['HIPAA Ready', 'Biometric Auth', 'Offline Mode', '10wk Build'],
              },
            ].map((cs) => (
              <div key={cs.client} className="bg-slate-50 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                <div className="bg-navy text-white p-5">
                  <div className="text-xs text-sky font-semibold mb-1">{cs.sector}</div>
                  <div className="font-bold text-lg">{cs.client}</div>
                </div>
                <div className="p-6">
                  <h3 className="heading-h3 text-base mb-2">{cs.headline}</h3>
                  <div className="text-xs text-sky-med font-semibold mb-3">{cs.stack}</div>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">{cs.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cs.metrics.map((m) => (
                      <div key={m} className="bg-sky-pale text-navy text-xs font-bold text-center py-2 rounded">{m}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ heading="React Native App Development Company in Mysore: Questions Answered" items={faqItems} />

      <CTABand
        heading="Ready To Hire The Best React Native App Development Company in Mysore?"
        subheading="Tell us about your React Native app idea. We come back with clear scope, timeline and fixed-price quote within 24 hours."
      />

      <Footer />
    </>
  );
}
