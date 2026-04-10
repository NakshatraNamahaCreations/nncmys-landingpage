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

// PRIMARY KEYWORD: "flutter app development company in mysore"

const PAGE_URL =
  'https://nakshatranamahacreations.com/flutter-app-development-company-in-mysore';

export const metadata: Metadata = {
  title: 'Flutter App Development Company in Mysore | Cross-Platform Apps | NNC',
  description:
    'Nakshatra Namaha Creations is the top Flutter app development company in Mysore. Cross-platform Android + iOS apps in Dart and Flutter. 565+ projects, 35+ in-house developers, fixed price, zero outsourcing.',
  keywords: [
    'flutter app development company in mysore',
    'flutter developers mysore',
    'dart app development mysore',
    'cross platform app development mysore',
    'flutter mobile app mysore',
    'hire flutter developers mysore',
    'flutter app services mysore',
    'flutter android ios mysore',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Flutter App Development Company in Mysore | NNC',
    description:
      'Top Flutter app development company in Mysore. Cross-platform Android and iOS apps from a single Dart codebase. 565+ projects.',
    images: ['/og-flutter-mysore.jpg'],
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flutter App Development Company in Mysore',
    description: 'Top Flutter app development company in Mysore. Cross-platform apps.',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Mysore, Karnataka',
    'geo.position': '12.2958;76.6394',
    ICBM: '12.2958, 76.6394',
  },
};

export default function FlutterAppDevelopmentCompanyMysorePage() {
  const localBusinessSchema = buildLocalBusinessSchema({
    name: 'NNC - Flutter App Development Company in Mysore',
    description:
      'Nakshatra Namaha Creations is the leading Flutter app development company in Mysore building cross-platform mobile apps for Android and iOS from a single Dart codebase. 565+ projects delivered, 35+ in-house Flutter developers since 2015.',
    url: PAGE_URL,
  });

  const serviceSchema = buildServiceSchema({
    serviceType: 'Flutter App Development Company in Mysore',
    description:
      'Cross-platform Flutter app development services. Android + iOS apps from a single Dart codebase with near-native performance and pixel-perfect UI.',
    offers: [
      'Flutter Cross-Platform App Development',
      'Flutter Android App Development',
      'Flutter iOS App Development',
      'Flutter UI/UX Development',
      'Flutter Web Development',
      'Flutter App Maintenance',
    ],
  });

  const faqItems = [
    {
      question: 'Which is the best Flutter app development company in Mysore?',
      answer:
        'Nakshatra Namaha Creations is the leading Flutter app development company in Mysore with 10+ years of mobile delivery, 565+ projects completed, and 35+ in-house developers specialising in Flutter, Dart and cross-platform mobile architectures.',
    },
    {
      question: 'How much does a Flutter app development company in Mysore charge?',
      answer:
        'A professional Flutter app development company in Mysore typically charges ₹1.5 lakh to ₹20 lakh depending on scope, features, integrations and design complexity. Cross-platform Flutter delivery is usually 30-40% cheaper than building separate native Android and iOS apps.',
    },
    {
      question: 'Why should I choose Flutter over native Android and iOS?',
      answer:
        'Flutter delivers near-native performance from a single codebase for both Android and iOS, cutting development time and cost by 30-40%. It is the best choice for MVPs, funded startups, enterprise apps and any project where time-to-market matters without sacrificing UI quality.',
    },
    {
      question: 'Do you build Flutter apps for web and desktop too?',
      answer:
        'Yes. Flutter now supports web, Windows, macOS and Linux from the same codebase. For projects targeting mobile + web from launch, Flutter can be the most efficient choice.',
    },
    {
      question: 'Can you integrate Flutter apps with our existing backend?',
      answer:
        'Yes. Flutter apps integrate with any REST API, GraphQL backend, Firebase, Node JS server, or existing enterprise system. Our team also builds custom backends in Node JS with MongoDB or PostgreSQL when required.',
    },
    {
      question: 'Do you handle Play Store and App Store deployment for Flutter apps?',
      answer:
        'Yes. Complete deployment to both Google Play Store and Apple App Store is included developer accounts, store listings, screenshots, ASO, submission and review support.',
    },
  ];

  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema(
    'Flutter App Development Company in Mysore',
    PAGE_URL,
  );

  const whyUsItems = [
    {
      num: '01',
      title: 'Dedicated Flutter Team',
      description:
        'Specialists in Dart, Flutter, Riverpod, Bloc, and modern Flutter architecture patterns not generalists doing Flutter on the side.',
    },
    {
      num: '02',
      title: 'Cross-Platform From One Codebase',
      description:
        'Ship Android and iOS simultaneously from a single Dart codebase. 30-40% faster than native development without compromising UX.',
    },
    {
      num: '03',
      title: 'Pixel-Perfect Flutter UI',
      description:
        'Custom widgets, smooth 60fps animations, Material 3 and Cupertino design systems all crafted to match your brand precisely.',
    },
    {
      num: '04',
      title: '565+ Projects Delivered',
      description:
        'Operating since 2015. 87 verified Google reviews. 4.9-star rating. A track record you can verify, not marketing claims.',
    },
    {
      num: '05',
      title: 'Fixed Price, Agreed Upfront',
      description:
        'Written quotation before work starts. 565+ projects, zero clients ever invoiced more than agreed.',
    },
    {
      num: '06',
      title: '100% Source Code Ownership',
      description:
        'Flutter project, pubspec, store credentials, everything handed over on delivery. No lock-in, no dependencies.',
    },
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', description: 'Scope, users, platforms, backend integrations.', duration: 'Day 1-2' },
    { num: '02', title: 'Fixed Quote', description: 'Scope and pricing agreed in writing upfront.', duration: 'Day 2-3' },
    { num: '03', title: 'UI/UX Design', description: 'Figma designs reviewed and approved before code.', duration: 'Week 1-2' },
    { num: '04', title: 'Flutter Build', description: 'Weekly APK and TestFlight builds for review.', duration: 'Week 2-10' },
    { num: '05', title: 'QA & Testing', description: 'Cross-device testing on Android and iOS.', duration: 'Week 10-12' },
    { num: '06', title: 'Dual Store Launch', description: 'Play Store and App Store deployment support.', duration: 'Week 12+' },
  ];

  const technologies = [
    { name: 'Flutter', category: 'Framework' },
    { name: 'Dart', category: 'Language' },
    { name: 'Riverpod', category: 'State' },
    { name: 'Bloc', category: 'State' },
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
                Flutter App Development Company in <span className="text-sky">Mysore</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-7 leading-relaxed">
                Nakshatra Namaha Creations is the leading Flutter app development
                company in Mysore building cross-platform Android and iOS apps
                from a single Dart codebase. 565+ projects delivered, 35+ in-house
                Flutter developers, 30-40% faster than native builds.
              </p>
              <StatsBar />
              <TrustBadges />
              <div className="flex flex-wrap gap-4">
                <a href="#enquiry" className="btn-primary">Get Free Flutter Quote</a>
                <a href="tel:+919900566466" className="btn-secondary">Call +91 99005 66466</a>
              </div>
            </div>
            <EnquiryForm
              serviceType="Flutter App Development Mysore"
              heading="Get Your Flutter App Quote"
              subheading="Fixed-price proposal in 24 hours. NDA available."
            />
          </div>
        </div>
      </section>

      <LocationBar />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">About NNC</span>
          <h2 className="heading-h2">The Trusted Flutter App Development Company in Mysore</h2>
          <p className="lead-text">
            Cross-platform Android and iOS apps built in Flutter and Dart by a dedicated in-house team.
          </p>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              Flutter has become the default choice for businesses that want to ship mobile apps on both
              Android and iOS simultaneously without doubling their development cost and timeline. Built
              and maintained by Google, Flutter delivers near-native performance, pixel-perfect UI control,
              and a single codebase that runs everywhere including web, Windows, macOS and Linux. For
              MVPs, funded startups, enterprise apps and any project where time-to-market matters, Flutter
              is usually the right technical call.
            </p>
            <p>
              Nakshatra Namaha Creations is the Flutter app development company in Mysore businesses
              trust to make this choice pay off. Our Flutter team writes idiomatic Dart, follows modern
              architecture patterns (Riverpod, Bloc, Clean Architecture), and delivers production-grade
              apps that are fast, smooth, and visually indistinguishable from native Android and iOS apps.
              We do not treat Flutter as a "cheap alternative" to native we treat it as a professional
              framework that, used correctly, delivers better outcomes for most business use cases.
            </p>
            <p>
              Whether you need a consumer-facing booking app, an e-commerce platform, a fintech product
              with real-time charts, a healthcare app with offline support, or an enterprise internal
              tool, our in-house Flutter developers have shipped something very similar. One of our
              showcase projects delivered 10,000+ downloads in month one on Google Play Store using
              Flutter proof that cross-platform can absolutely compete with native when done well.
            </p>
            <p>
              Every Flutter project we deliver includes fixed-price quotation, weekly staging builds for
              Android and iOS, cross-device QA testing, complete Play Store and App Store deployment,
              and full source code ownership on handover. Your Flutter project is yours forever no
              licensing, no lock-in, no surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container-nnc">
          <span className="section-tag">What We Build</span>
          <h2 className="heading-h2">Services From Our Flutter App Development Company in Mysore</h2>
          <p className="lead-text">
            Every type of Flutter application delivered by our specialist Dart team.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: 'Cross-Platform Mobile Apps',
                description: 'One Flutter codebase, two stores. Android and iOS apps shipped together with platform-specific polish where it matters.',
              },
              {
                title: 'Flutter E-Commerce Apps',
                description: 'Shopping apps with payment gateway integration, cart, wishlist, order tracking and seamless checkout flows.',
              },
              {
                title: 'Flutter Fintech Apps',
                description: 'Finance and investment apps with real-time charts, live data feeds, biometric authentication and secure transactions.',
              },
              {
                title: 'Flutter Enterprise Apps',
                description: 'Internal field force, dealer management, inventory and workflow apps with role-based access and ERP integration.',
              },
              {
                title: 'Flutter Healthcare Apps',
                description: 'Patient engagement, appointment booking, telemedicine and hospital information system integrations.',
              },
              {
                title: 'Flutter App Maintenance',
                description: 'Legacy Flutter project upgrades, dependency updates, bug fixes and feature additions for existing apps.',
              },
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
        heading="Why We Are The Preferred Flutter App Development Company in Mysore"
        subheading="Six facts that separate NNC from generalists, freelancers and offshore vendors claiming Flutter expertise."
        items={whyUsItems}
      />

      <ProcessSteps heading="Six Steps. Your Approval At Every Stage." items={processSteps} />

      <TechStack technologies={technologies} />

      <Industries />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">Case Studies</span>
          <h2 className="heading-h2">Real Flutter Apps. Measured Outcomes.</h2>
          <p className="lead-text">Representative Flutter projects delivered by our in-house Dart team.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                client: 'Pro Leverage',
                sector: 'Finance Flutter App',
                headline: '10K Downloads in Month One',
                stack: 'Flutter · REST API',
                description: 'Retail investor app built in Flutter with real-time charts. 10,000+ Play Store downloads in the first month.',
                metrics: ['10K+ Downloads', '4.4★ Rating', '60% Fewer Queries', '6wk Build'],
              },
              {
                client: 'Vijaya Home Services',
                sector: 'On-Demand Flutter App',
                headline: '340% Booking Growth',
                stack: 'Flutter + Node',
                description: 'Cross-platform customer app for home services booking. 340% growth in six months with single codebase.',
                metrics: ['340% Growth', '4.6★ Rating', 'Single Codebase', '8wk Build'],
              },
              {
                client: 'Healthcare Network',
                sector: 'Hospital Flutter App',
                headline: 'Patient Engagement',
                stack: 'Flutter · Firebase',
                description: 'Flutter hospital app with appointments, reports, telemedicine and HIS integration for Android and iOS.',
                metrics: ['HIPAA Ready', 'Offline Mode', 'Dual Platform', '10wk Build'],
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

      <FAQ heading="Flutter App Development Company in Mysore: Questions Answered" items={faqItems} />

      <CTABand
        heading="Ready To Hire The Best Flutter App Development Company in Mysore?"
        subheading="Tell us about your app. We come back with clear scope, timeline and fixed-price quote within 24 hours."
      />

      <Footer />
    </>
  );
}
