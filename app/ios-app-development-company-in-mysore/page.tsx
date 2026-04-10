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
// PRIMARY KEYWORD: "ios app development company in mysore"
// ============================================================

const PAGE_URL =
  'https://nakshatranamahacreations.com/ios-app-development-company-in-mysore';

// Placement #1: Meta Title
// Placement #2: Meta Description
export const metadata: Metadata = {
  title: 'iOS App Development Company in Mysore | Swift & iPhone Apps | NNC',
  description:
    'Nakshatra Namaha Creations is the top iOS app development company in Mysore. Native iPhone & iPad apps in Swift and SwiftUI. 565+ projects, 35+ in-house developers, App Store deployment, fixed price. Get a free quote today.',
  keywords: [
    'ios app development company in mysore',
    'iphone app development mysore',
    'swift app development mysore',
    'ipad app development mysore',
    'native ios app development mysore',
    'app store app development mysore',
    'ios developers mysore',
    'hire ios developers mysore',
    'swiftui app development mysore',
    'enterprise ios app development mysore',
  ],
  authors: [{ name: 'Nakshatra Namaha Creations Pvt Ltd' }],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'iOS App Development Company in Mysore | NNC Digital',
    description:
      'Top iOS app development company in Mysore. Swift, SwiftUI, native iPhone & iPad apps. 565+ projects delivered.',
    images: ['/og-ios-mysore.jpg'],
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iOS App Development Company in Mysore | NNC',
    description: 'Top iOS app development company in Mysore. Swift, SwiftUI, native apps.',
    images: ['/og-ios-mysore.jpg'],
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Mysore, Karnataka',
    'geo.position': '12.2958;76.6394',
    ICBM: '12.2958, 76.6394',
  },
};

export default function IosAppDevelopmentCompanyMysorePage() {
  // Placement #3: LocalBusiness schema
  const localBusinessSchema = buildLocalBusinessSchema({
    name: 'NNC - iOS App Development Company in Mysore',
    description:
      'Nakshatra Namaha Creations is the leading iOS app development company in Mysore building native iPhone and iPad applications in Swift and SwiftUI for premium brands, enterprises and funded startups since 2015.',
    url: PAGE_URL,
  });

  // Placement #4: Service schema
  const serviceSchema = buildServiceSchema({
    serviceType: 'iOS App Development Company in Mysore',
    description:
      'End-to-end iOS app development services in Mysore. Native iPhone and iPad apps in Swift, SwiftUI, App Store deployment, TestFlight distribution and post-launch maintenance.',
    offers: [
      'Native iOS App Development',
      'Swift App Development',
      'SwiftUI App Development',
      'iPhone App Development',
      'iPad App Development',
      'Apple Watch App Development',
    ],
  });

  // Placements #5, #6, #7: FAQ with primary keyword
  const faqItems = [
    {
      question: 'Which is the best iOS app development company in Mysore?',
      answer:
        'Nakshatra Namaha Creations is the leading iOS app development company in Mysore with 10+ years of native iPhone and iPad app delivery, 565+ projects completed, and 35+ in-house developers specialising in Swift and SwiftUI.',
    },
    {
      question: 'How much does an iOS app development company in Mysore charge?',
      answer:
        'A professional iOS app development company in Mysore typically charges ₹2 lakh to ₹25 lakh depending on complexity, Apple ecosystem coverage (iPhone, iPad, Apple Watch), features and backend requirements. We provide fixed-price quotes in writing.',
    },
    {
      question: 'Does your iOS app development company in Mysore work in Swift?',
      answer:
        'Yes. All new iOS projects are built in Swift and SwiftUI, the modern Apple-recommended stack. We also maintain Objective-C legacy codebases and can migrate them to Swift when required.',
    },
    {
      question: 'Do you handle App Store submission and review support?',
      answer:
        'Yes. Complete Apple App Store submission, developer account setup, TestFlight beta distribution, store listing, screenshots, App Store Optimisation and review response support are included.',
    },
    {
      question: 'Can you build apps for iPhone, iPad and Apple Watch?',
      answer:
        'Yes. We build universal apps for iPhone and iPad from a single codebase using SwiftUI, and companion watchOS apps for Apple Watch where the use case requires it.',
    },
    {
      question: 'Do you provide iOS app maintenance after launch?',
      answer:
        'Yes. 30 days of free support included with delivery, plus optional long-term maintenance contracts covering iOS version updates, bug fixes, security patches and feature additions.',
    },
  ];

  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema(
    'iOS App Development Company in Mysore',
    PAGE_URL,
  );

  const whyUsItems = [
    {
      num: '01',
      title: 'Dedicated iOS Developers',
      description:
        'Specialists in Swift, SwiftUI, Combine, Core Data and the modern iOS SDK not generalists who also "do iOS" on the side.',
    },
    {
      num: '02',
      title: 'Apple Human Interface Guidelines',
      description:
        'Every iOS app we build follows Apple\'s HIG precisely. No Android ports pretending to be iOS apps. Native patterns, native gestures, native polish.',
    },
    {
      num: '03',
      title: 'App Store Submission Included',
      description:
        'TestFlight setup, developer account, store listing, screenshots, descriptions and submission handled end-to-end by our team.',
    },
    {
      num: '04',
      title: '565+ Delivered Projects',
      description:
        'Operating continuously since 2015. Verifiable portfolio. 4.9 stars on Google across 87 reviews. Not a new agency.',
    },
    {
      num: '05',
      title: 'Fixed Price, No Surprises',
      description:
        'Written quotation agreed before any design starts. 565+ projects, zero clients ever invoiced more than the agreed amount.',
    },
    {
      num: '06',
      title: 'Source Code Ownership',
      description:
        'Every .xcodeproj file, provisioning profile, App Store Connect access and certificate handed over on delivery. Your app is yours.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery',
      description: 'Target users, iOS version support, iPhone/iPad/Watch scope.',
      duration: 'Day 1-2',
    },
    {
      num: '02',
      title: 'Fixed Quote',
      description: 'Scope and price agreed in writing before any work begins.',
      duration: 'Day 2-3',
    },
    {
      num: '03',
      title: 'HIG-Compliant Design',
      description: 'Figma designs following Apple Human Interface Guidelines.',
      duration: 'Week 1-2',
    },
    {
      num: '04',
      title: 'Swift Development',
      description: 'Weekly TestFlight builds for beta testing and client review.',
      duration: 'Week 2-10',
    },
    {
      num: '05',
      title: 'QA & Testing',
      description: 'Multi-device testing across iPhone generations and iPad.',
      duration: 'Week 10-12',
    },
    {
      num: '06',
      title: 'App Store Launch',
      description: 'Submission, review support and launch day coordination.',
      duration: 'Week 12+',
    },
  ];

  const technologies = [
    { name: 'Swift', category: 'iOS' },
    { name: 'SwiftUI', category: 'UI' },
    { name: 'Combine', category: 'Reactive' },
    { name: 'Core Data', category: 'Storage' },
    { name: 'CloudKit', category: 'Sync' },
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

      {/* Placement #8: H1 */}
      <section className="bg-gradient-to-br from-navy to-slate-900 text-white py-16 md:py-24">
        <div className="container-nnc">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div>
              <span className="inline-block bg-sky/10 border border-sky text-sky text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-5">
                4.9★ · 87 Google Reviews · 565+ Projects
              </span>
              <h1 className="heading-h1 mb-5">
                iOS App Development Company in{' '}
                <span className="text-sky">Mysore</span>
              </h1>
              {/* Placement #9: First paragraph */}
              <p className="text-lg md:text-xl text-white/90 mb-7 leading-relaxed">
                Nakshatra Namaha Creations is the leading iOS app development
                company in Mysore building native iPhone and iPad apps in
                Swift and SwiftUI for premium brands, enterprises and funded
                startups. 565+ projects, 35+ in-house iOS developers, full App
                Store deployment included.
              </p>
              <StatsBar />
              <TrustBadges />
              <div className="flex flex-wrap gap-4">
                <a href="#enquiry" className="btn-primary">
                  Get Free iOS Quote
                </a>
                <a href="tel:+919900566466" className="btn-secondary">
                  Call +91 99005 66466
                </a>
              </div>
            </div>
            <EnquiryForm
              serviceType="iOS App Development Mysore"
              heading="Get Your iOS App Quote"
              subheading="Fixed-price proposal in 24 hours. NDA available."
            />
          </div>
        </div>
      </section>

      <LocationBar />

      {/* Placement #10: H2 */}
      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">About NNC</span>
          <h2 className="heading-h2">
            The Trusted iOS App Development Company in Mysore
          </h2>
          <p className="lead-text">
            Native iPhone and iPad apps built by a dedicated Swift team
            in-house, production-grade, fixed price.
          </p>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              iOS users are consistently the most valuable segment of any
              consumer app audience higher ARPU, higher engagement, higher
              retention. For premium brands and serious B2B apps, iOS is not
              optional. The challenge is that building quality iOS apps
              requires specialist knowledge: Swift language fundamentals,
              SwiftUI declarative UI, Combine reactive patterns, Core Data,
              iCloud sync, TestFlight workflows, App Store Connect and Apple's
              strict review guidelines. That is why this work cannot be left
              to freelancers or generalists.
            </p>
            {/* Placement #11: Body - Primary keyword */}
            <p>
              Nakshatra Namaha Creations has been the iOS app development
              company in Mysore businesses trust for this exact reason. Our
              iOS team writes in Swift and SwiftUI, follows Apple's Human
              Interface Guidelines religiously, and delivers apps that feel
              native on every Apple device from the smallest iPhone mini to
              the largest iPad Pro. We do not port Android apps to iOS and
              call it cross-platform. We build true native experiences.
            </p>
            <p>
              Whether you need a premium consumer app, a SaaS companion
              product, an enterprise field app for sales teams, a healthcare
              patient app, a fintech platform, or an iPad-focused
              point-of-sale application, our in-house iOS developers have
              shipped something very similar. We operate from four physical
              offices across India Bengaluru, Mumbai, Mysuru and Hyderabad
              and every iOS engagement comes with a named project manager,
              weekly TestFlight builds for client review, and full Apple
              Developer account handover on delivery.
            </p>
            <p>
              Every iOS project includes complete App Store submission:
              developer account setup, provisioning profiles, certificates,
              TestFlight beta distribution, store listing, screenshots,
              descriptions, keyword targeting, submission and Apple review
              support. Your app goes from concept to the App Store entirely
              through our in-house team.
            </p>
          </div>
        </div>
      </section>

      {/* Placement #12: Services H2 */}
      <section className="py-20 bg-slate-50">
        <div className="container-nnc">
          <span className="section-tag">What We Build</span>
          <h2 className="heading-h2">
            Services From Our iOS App Development Company in Mysore
          </h2>
          <p className="lead-text">
            Every type of native Apple platform application delivered in-house
            by our Swift specialists.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: 'Native iPhone App Development',
                description:
                  'Modern iPhone apps in Swift and SwiftUI, optimised for every iPhone generation from iPhone SE to iPhone Pro Max with full compliance to Apple HIG.',
              },
              {
                title: 'iPad App Development',
                description:
                  'iPad-optimised apps with split view, multitasking, Apple Pencil support, drag-and-drop and iPad-specific UI patterns where required.',
              },
              {
                title: 'SwiftUI Development',
                description:
                  'Modern declarative UI development in SwiftUI for apps targeting iOS 15 and later. Faster development, cleaner code, future-proof architecture.',
              },
              {
                title: 'Enterprise iOS Apps',
                description:
                  'Internal iOS apps for field sales, executive dashboards, inventory tracking and workflow automation with enterprise MDM support.',
              },
              {
                title: 'Apple Watch Companion Apps',
                description:
                  'watchOS companion apps for fitness, health tracking, notifications and productivity use cases built alongside the main iPhone app.',
              },
              {
                title: 'App Store Submission & ASO',
                description:
                  'Developer account, certificates, provisioning, TestFlight, store listing, screenshots, keyword research and App Store Optimisation.',
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

      {/* Placement #13: Why Us heading */}
      <WhyUs
        heading="Why We Are The Preferred iOS App Development Company in Mysore"
        subheading="Six facts that separate NNC from generalist agencies, freelancers and offshore vendors claiming iOS expertise."
        items={whyUsItems}
      />

      <ProcessSteps
        heading="Six Steps. Your Approval At Every Stage."
        items={processSteps}
      />

      <TechStack technologies={technologies} />

      <Industries />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">Case Studies</span>
          <h2 className="heading-h2">Real iOS Apps. Measured Outcomes.</h2>
          <p className="lead-text">
            Representative Apple platform projects delivered by our in-house
            Swift team.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                client: 'Pro Leverage',
                sector: 'Finance iOS App',
                headline: '10K Downloads Month One',
                stack: 'Swift · REST API',
                description:
                  'Native iOS finance app with real-time charts and live data feeds. 10,000+ App Store downloads in month one.',
                metrics: ['10K+ Downloads', '4.4★ App Store', '60% Fewer Queries', '6wk Build'],
              },
              {
                client: 'Vijaya Home Services',
                sector: 'On-Demand iOS App',
                headline: 'iOS + Android Ecosystem',
                stack: 'Swift + Kotlin',
                description:
                  'iPhone customer app with booking, payments and real-time tracking. Delivered alongside native Android counterpart.',
                metrics: ['340% Growth', '4.6★ Rating', 'Both Platforms', '8wk Build'],
              },
              {
                client: 'Healthcare Network',
                sector: 'Hospital iOS App',
                headline: 'Patient Engagement Platform',
                stack: 'Swift · Firebase',
                description:
                  'Native iOS app for patient appointments, reports and doctor chat. Face ID authentication and offline support.',
                metrics: ['HIPAA Ready', 'Face ID', 'Offline Mode', '10wk Build'],
              },
            ].map((cs) => (
              <div
                key={cs.client}
                className="bg-slate-50 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
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

      {/* Placement #14: FAQ heading */}
      <FAQ
        heading="iOS App Development Company in Mysore: Questions Answered"
        items={faqItems}
      />

      {/* Placement #15: Final CTA */}
      <CTABand
        heading="Ready To Hire The Best iOS App Development Company in Mysore?"
        subheading="Tell us about your iPhone or iPad app. We come back with clear scope, timeline and a fixed-price quote within 24 hours."
      />

      <Footer />
    </>
  );
}
