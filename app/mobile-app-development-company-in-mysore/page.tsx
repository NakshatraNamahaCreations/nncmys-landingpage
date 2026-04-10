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
// PRIMARY KEYWORD: "mobile app development company in mysore"
// TARGET: 15 exact-match placements + 25+ semantic variations
// ============================================================

const PAGE_URL =
  'https://nakshatranamahacreations.com/mobile-app-development-company-in-mysore';

// Placement #1: Meta Title
// Placement #2: Meta Description
export const metadata: Metadata = {
  title:
    'Mobile App Development Company in Mysore | Android, iOS, Flutter | NNC',
  description:
    'Nakshatra Namaha Creations is the top mobile app development company in Mysore. 565+ projects, 35+ in-house developers, 10+ years. Android, iOS, Flutter & React Native. Fixed price, PageSpeed 90+, zero outsourcing. Get a free quote today.',
  keywords: [
    'mobile app development company in mysore',
    'mobile app developers mysore',
    'android app development mysore',
    'ios app development mysore',
    'flutter app development mysore',
    'react native app development mysore',
    'custom mobile app development mysore',
    'enterprise mobile app development mysore',
    'app development services mysore',
    'hire mobile app developers mysore',
  ],
  authors: [{ name: 'Nakshatra Namaha Creations Pvt Ltd' }],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Mobile App Development Company in Mysore | NNC Digital',
    description:
      'Top mobile app development company in Mysore. 565+ projects delivered, 35+ in-house team, 10+ years. Android, iOS, Flutter & React Native app development.',
    images: ['/og-mobile-app-mysore.jpg'],
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company in Mysore | NNC',
    description:
      'Top mobile app development company in Mysore. 565+ projects, 35+ in-house developers.',
    images: ['/og-mobile-app-mysore.jpg'],
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Mysore, Karnataka',
    'geo.position': '12.2958;76.6394',
    ICBM: '12.2958, 76.6394',
  },
};

export default function MobileAppDevelopmentCompanyMysorePage() {
  // Placement #3: LocalBusiness schema description
  const localBusinessSchema = buildLocalBusinessSchema({
    name: 'NNC - Mobile App Development Company in Mysore',
    description:
      'Nakshatra Namaha Creations is the leading mobile app development company in Mysore delivering custom Android, iOS, Flutter and React Native mobile applications since 2015. 565+ projects, 35+ in-house developers, zero outsourcing.',
    url: PAGE_URL,
  });

  // Placement #4: Service schema
  const serviceSchema = buildServiceSchema({
    serviceType: 'Mobile App Development Company in Mysore',
    description:
      'End-to-end mobile app development services in Mysore including Android app development, iOS app development, Flutter, React Native and custom mobile application development for businesses and enterprises.',
    offers: [
      'Android App Development in Mysore',
      'iOS App Development in Mysore',
      'Flutter App Development in Mysore',
      'React Native App Development in Mysore',
      'Custom Mobile App Development in Mysore',
      'Enterprise Mobile App Development in Mysore',
    ],
  });

  // Placements #5 & #6: FAQ questions use the primary keyword
  const faqItems = [
    {
      question: 'Which is the best mobile app development company in Mysore?',
      answer:
        'Nakshatra Namaha Creations is the leading mobile app development company in Mysore with 10+ years of experience, 565+ projects delivered, 35+ in-house developers and a 4.9-star Google rating. We build Android, iOS, Flutter and React Native apps for businesses across Karnataka.',
    },
    {
      question:
        'How much does it cost to hire a mobile app development company in Mysore?',
      answer:
        'Hiring a reliable mobile app development company in Mysore costs between ₹1 lakh and ₹25 lakh depending on app complexity, platform, features, design sophistication, backend requirements and integrations. We offer fixed-price quotes with no surprises.',
    },
    {
      question: 'Do you develop apps for both Android and iOS?',
      answer:
        'Yes. We build native Android apps using Kotlin and Java, native iOS apps using Swift, and cross-platform apps using Flutter and React Native for faster time-to-market.',
    },
    {
      question: 'How long does it take to develop a mobile app in Mysore?',
      answer:
        'Simple MVP apps take 6-10 weeks, medium complexity apps take 12-16 weeks, and enterprise-grade mobile applications take 16-28 weeks with agile sprint-based delivery and weekly staging updates.',
    },
    {
      question: 'Who owns the source code after the mobile app is delivered?',
      answer:
        'You own 100% of the source code, database, design files, and all credentials forever. No platform lock-in, no monthly fees, no obligations after handover.',
    },
    {
      question: 'Do you outsource mobile app development work?',
      answer:
        'No. Zero outsourcing, ever. Every developer, designer, QA engineer and project manager is a permanent in-house NNC employee. You can walk into any of our four offices and meet the team.',
    },
  ];

  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema(
    'Mobile App Development Company in Mysore',
    PAGE_URL,
  );

  const whyUsItems = [
    {
      num: '01',
      title: '35+ Permanent In-House Developers',
      description:
        'Every person on your mobile app project is a full-time NNC employee. Zero outsourcing. Zero freelancers. You can walk into our Mysuru office and meet the team.',
    },
    {
      num: '02',
      title: 'Fixed Price Agreed Before Work Starts',
      description:
        'Quoted before a single wireframe is drawn. In 565+ projects over 10 years, not one client has been invoiced more than what was agreed upfront.',
    },
    {
      num: '03',
      title: '100% Source Code Ownership',
      description:
        'On delivery: every source file, database, admin credential and store login is yours. No platform lock-in, no monthly fees, no strings attached.',
    },
    {
      num: '04',
      title: 'PageSpeed 90+ & Play Store Ready',
      description:
        'Mobile apps delivered with crash-free rates above 99.5%, App Store and Play Store compliance built-in, and full ASO support on launch.',
    },
    {
      num: '05',
      title: '565+ Delivered Projects. 10+ Years.',
      description:
        'Operating continuously since 2015. 565+ completed projects, 87 verified Google reviews, 4.9-star rating. Not a new agency practising on your project.',
    },
    {
      num: '06',
      title: 'One Named Project Manager',
      description:
        'Every project has a dedicated PM from discovery to handover. Weekly staging updates, direct access, no "that is not my department" moments.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery',
      description: 'We understand your business, users and goals. No assumptions.',
      duration: 'Day 1-2',
    },
    {
      num: '02',
      title: 'Scope & Quote',
      description: 'Fixed-price proposal agreed in writing before any work starts.',
      duration: 'Day 2-3',
    },
    {
      num: '03',
      title: 'UI/UX Design',
      description: 'Figma wireframes and designs approved before development begins.',
      duration: 'Week 1-2',
    },
    {
      num: '04',
      title: 'Development',
      description: 'Weekly sprints with staging builds you can test and review.',
      duration: 'Week 2-10',
    },
    {
      num: '05',
      title: 'QA & Testing',
      description: 'Cross-device testing, performance audits and bug-free delivery.',
      duration: 'Week 10-12',
    },
    {
      num: '06',
      title: 'Launch & Handoff',
      description: 'Play Store, App Store deployment plus 30 days free support.',
      duration: 'Week 12+',
    },
  ];

  const technologies = [
    { name: 'React Native', category: 'Cross-Platform' },
    { name: 'Flutter', category: 'Cross-Platform' },
    { name: 'Kotlin', category: 'Android Native' },
    { name: 'Swift', category: 'iOS Native' },
    { name: 'Node JS', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Firebase', category: 'Real-time' },
  ];

  return (
    <>
      <SchemaMarkup
        schemas={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <Header />

      {/* ============ HERO SECTION ============ */}
      {/* Placement #7: H1 - Primary keyword */}
      {/* <section className="bg-gradient-to-br from-navy to-slate-900 text-white py-16 md:py-24">
        <div className="container-nnc">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div>
              <span className="inline-block bg-sky/10 border border-sky text-sky text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-5">
                Top Rated 4.9★ · 87 Google Reviews
              </span>
              <h1 className="heading-h1 mb-5">
                Mobile App Development Company in{' '}
                <span className="text-sky">Mysore</span>
              </h1>
             
              <p className="text-lg md:text-xl text-white/90 mb-7 leading-relaxed">
                Nakshatra Namaha Creations is the leading mobile app development
                company in Mysore building custom Android, iOS, Flutter and
                React Native mobile applications for businesses and enterprises
                across Karnataka. 565+ projects delivered, 35+ in-house
                developers, zero outsourcing.
              </p>
              <StatsBar />
              <TrustBadges />
              <div className="flex flex-wrap gap-4">
                <a href="#enquiry" className="btn-primary">
                  Get Free App Quote
                </a>
                <a href="tel:+919900566466" className="btn-secondary">
                  Call +91 99005 66466
                </a>
              </div>
            </div>
            <EnquiryForm
              serviceType="Mobile App Development Mysore"
              heading="Get Your Free App Quote"
              subheading="Fixed-price proposal within 24 hours. No obligation."
            />
          </div>
        </div>
      </section> */}
      <section className="relative bg-gradient-to-br from-[#0d1f3c] via-[#0a1628] to-[#061020] text-white py-20 md:py-18 overflow-hidden">
  {/* Glow Effect */}
  <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-sky-400/10 blur-3xl rounded-full pointer-events-none" />

  <div className="container-nnc grid lg:grid-cols-[2fr_1fr] gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-sky-400/40 px-4 py-1.5 rounded-full text-xs text-slate-300 mb-6">
        <span className="text-sky-400 font-semibold">4.9★</span>
        <span>·</span>
        <span>87 GOOGLE REVIEWS</span>
        <span>·</span>
        <span>565+ PROJECTS</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        Mobile App Development <br />
        Company in{" "}
        <span className="text-sky-400">Mysore</span>
      </h1>

      {/* Description */}
      <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
        Nakshatra Namaha Creations builds high-performance Android, iOS,
        Flutter, and React Native apps for startups and enterprises.
        565+ projects delivered. 35+ in-house developers. Zero outsourcing.
      </p>

      {/* Stats */}
      <div className="flex gap-8 flex-wrap mb-8">
        {[
          { value: "10+", label: "Years In Business" },
          { value: "565+", label: "Projects Delivered" },
          { value: "35+", label: "In-house Team" },
          { value: "4.9★", label: "Google Rating" },
        ].map((item) => (
          <div key={item.label}>
            <div className="text-2xl md:text-3xl font-bold text-sky-400">
              {item.value}
            </div>
            <div className="text-sm text-slate-400 mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap gap-4 mb-8 text-sm text-slate-400">
        {[
          "PageSpeed 90+ Guaranteed",
          "Source Code Yours",
          "Fixed Price",
          "Zero Outsourcing",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-sky-400/20 flex items-center justify-center">
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-4">
        <a
          href="#enquiry"
          className="bg-sky-400 hover:bg-sky-500 text-[#0d1f3c] font-semibold px-6 py-3 rounded-lg transition"
        >
          Get Free App Quote →
        </a>

        <a
          href="tel:+919900566466"
          className="border border-slate-400/30 hover:border-slate-300 px-6 py-3 rounded-lg flex items-center gap-2 text-slate-300 hover:text-white transition"
        >
          📞 +91 99005 66466
        </a>
      </div>
    </div>

    {/* RIGHT CARD */}
    <div className="bg-[#0f2a4a]/60 border border-sky-400/10 rounded-2xl p-6 backdrop-blur-md">

      {/* Mock Phone UI */}
      <div className="flex justify-center mb-6">
        <div className="w-40 h-72 bg-[#061b33] rounded-xl border border-sky-400/20 flex flex-col p-4 gap-3">
          <div className="h-2 bg-sky-400/30 rounded w-16" />
          <div className="flex gap-2">
            <div className="flex-1 h-16 bg-sky-400/20 rounded" />
            <div className="flex-1 h-16 bg-sky-400/10 rounded" />
          </div>
          <div className="flex-1 bg-sky-400/10 rounded" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { value: "565+", label: "Projects Delivered" },
          { value: "4.9★", label: "Google Rating" },
          { value: "10+", label: "Years Operating" },
          { value: "35+", label: "In-house Team" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-[#061b33] rounded-lg p-4 text-center border border-sky-400/10"
          >
            <div className="text-xl font-bold text-sky-400">
              {item.value}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <LocationBar />

      {/* ============ INTRO / ABOUT SECTION ============ */}
      {/* Placement #9: H2 - Primary keyword */}
      {/* <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">About NNC</span>
          <h2 className="heading-h2">
            Why NNC Is The Most Trusted Mobile App Development Company in Mysore
          </h2>
          <p className="lead-text">
            Ten years of mobile app delivery. 565+ shipped projects. Thirty-five
            permanent engineers across four Indian cities. Zero outsourcing.
          </p>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              Businesses across Karnataka search for a mobile app development
              partner they can actually hold accountable and for most, that
              search ends with Nakshatra Namaha Creations. We are a full-stack
              digital agency headquartered in Bengaluru with a dedicated branch
              office in Mysuru, and our mobile app developers have delivered
              applications for healthcare networks, real estate builders,
              on-demand service platforms, fintech startups and enterprise
              clients since 2015.
            </p>
            {/* Placement #10: Body paragraph - Primary keyword */}
            {/* <p>
              What makes NNC different from every other mobile app development
              company in Mysore is our operating model. We do not outsource to
              freelancers. We do not pass work to offshore contractors. We do
              not sub-let projects to partner agencies. Every single line of
              code, every design decision and every project update comes
              directly from our 35+ permanent in-house employees. You can walk
              into our Mysuru office at JP Nagar 2nd Stage and meet the team
              building your app in person.
            </p>
            <p>
              Our Android app developers work in Kotlin and Java. Our iOS app
              developers work in Swift and SwiftUI. Our cross-platform team
              specialises in Flutter and React Native, giving you the option to
              ship on both Android and iOS from a single codebase when timeline
              and budget matter. Whether you need a simple MVP for a funded
              startup, a complex booking platform for a services business, or
              an enterprise mobile application with CRM integration, our team
              has shipped something very similar in the past decade.
            </p>
            <p>
              Every mobile app project we deliver comes with a fixed price
              agreed in writing, a named project manager as your single point of
              contact, weekly demos on a live staging environment, and full
              source code ownership on handover. Your app is yours forever no
              monthly licensing, no platform lock-in, no dependencies on us
              after delivery.
            </p>
          </div>
        </div>
      </section> */}

      <section className="relative py-24 bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] overflow-hidden">
  
  {/* subtle glow */}
  <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-sky-400/10 blur-3xl rounded-full pointer-events-none" />

  <div className="container-nnc relative z-10">

    {/* TOP HEADER */}
    <div className="max-w-3xl mb-16">
      <span className="inline-block text-xs font-semibold tracking-widest text-sky-500 uppercase bg-sky-100 px-4 py-1.5 rounded-full mb-5">
        About NNC
      </span>

      <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-6">
        Why NNC Is The Most Trusted <br />
        <span className="text-sky-500">
          Mobile App Development Company in Mysore
        </span>
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        Ten years of mobile app delivery. 565+ shipped projects. Thirty-five
        permanent engineers across four Indian cities. Zero outsourcing.
      </p>
    </div>

    {/* CONTENT GRID */}
    <div className="grid lg:grid-cols-2 gap-12">

      {/* LEFT BIG CONTENT */}
      <div className="space-y-6 text-slate-700 leading-relaxed text-[15px]">
        <p>
          Businesses across Karnataka search for a mobile app development
          partner they can actually hold accountable and for most, that
          search ends with Nakshatra Namaha Creations. We are a full-stack
          digital agency headquartered in Bengaluru with a dedicated branch
          office in Mysuru, and our mobile app developers have delivered
          applications for healthcare networks, real estate builders,
          on-demand service platforms, fintech startups and enterprise
          clients since 2015.
        </p>

        <p>
          What makes NNC different from every other mobile app development
          company in Mysore is our operating model. We do not outsource to
          freelancers. We do not pass work to offshore contractors. We do
          not sub-let projects to partner agencies. Every single line of
          code, every design decision and every project update comes
          directly from our 35+ permanent in-house employees. You can walk
          into our Mysuru office and meet the team building your app in person.
        </p>

        <p>
          Our Android app developers work in Kotlin and Java. Our iOS app
          developers work in Swift and SwiftUI. Our cross-platform team
          specialises in Flutter and React Native, giving you the option to
          ship on both Android and iOS from a single codebase when timeline
          and budget matter.
        </p>

        <p>
          Every mobile app project we deliver comes with a fixed price
          agreed in writing, a named project manager, weekly demos on a live
          staging environment, and full source code ownership on handover.
        </p>
      </div>

      {/* RIGHT SIDE PREMIUM CARDS */}
      <div className="grid gap-6">

        {[
          {
            title: "Zero Outsourcing",
            desc: "All work handled by permanent in-house developers only.",
          },
          {
            title: "100% Source Code Ownership",
            desc: "Full access and ownership of code, design and infrastructure.",
          },
          {
            title: "Fixed Price Model",
            desc: "Transparent pricing agreed before development begins.",
          },
          {
            title: "Weekly Progress Updates",
            desc: "Track progress through staging demos and regular updates.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              
              {/* ICON */}
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-500 transition">
                <div className="w-5 h-5 border-2 border-sky-500 group-hover:border-white rounded-sm"></div>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold text-navy text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>

      {/* ============ SERVICES / WHAT WE BUILD ============ */}
      {/* Placement #11: H2 contextual use */}
      {/* <section className="py-20 bg-slate-50">
        <div className="container-nnc">
          <span className="section-tag">What We Build</span>
          <h2 className="heading-h2">
            Complete Mobile App Development Services in Mysore
          </h2>
          <p className="lead-text">
            Everything needed to ship a production-grade mobile application
            handled entirely in-house.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: 'Android App Development in Mysore',
                description:
                  'Native Android applications built in Kotlin and Java, optimised for performance, battery life and the fragmented Android device landscape. Full Play Store deployment included.',
              },
              {
                title: 'iOS App Development in Mysore',
                description:
                  'Native iOS apps built in Swift and SwiftUI. Fully compliant with Apple App Store guidelines. iPhone, iPad and Apple Watch support where required.',
              },
              {
                title: 'Flutter App Development',
                description:
                  'Cross-platform mobile apps in Flutter and Dart. One codebase for both Android and iOS with near-native performance and pixel-perfect UI consistency.',
              },
              {
                title: 'React Native App Development',
                description:
                  'React Native apps for businesses that want faster time-to-market without compromising user experience. Shared codebase, platform-specific UI where it matters.',
              },
              {
                title: 'Custom Enterprise Mobile Apps',
                description:
                  'Internal mobile applications for field force automation, inventory management, sales tracking, dealer portals and enterprise workflow digitisation.',
              },
              {
                title: 'On-Demand & Marketplace Apps',
                description:
                  'Booking, delivery, services and marketplace apps with customer app, vendor app, admin dashboard and backend CRM full ecosystem delivery.',
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
      </section> */}

      <section className="relative py-24 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-white overflow-hidden">

  {/* subtle glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-400/10 blur-3xl rounded-full pointer-events-none" />

  <div className="container-nnc relative z-10">

    {/* HEADER */}
    <div className="max-w-3xl mb-16">
      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-100 px-4 py-1.5 rounded-full mb-5">
        What We Build
      </span>

      <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-6">
        Complete Mobile App Development <br />
        <span className="text-sky-500">Services in Mysore</span>
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        Everything needed to ship a production-grade mobile application
        handled entirely in-house.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: 'Android App Development in Mysore',
          description:
            'Native Android applications built in Kotlin and Java, optimised for performance, battery life and the fragmented Android device landscape. Full Play Store deployment included.',
        },
        {
          title: 'iOS App Development in Mysore',
          description:
            'Native iOS apps built in Swift and SwiftUI. Fully compliant with Apple App Store guidelines. iPhone, iPad and Apple Watch support where required.',
        },
        {
          title: 'Flutter App Development',
          description:
            'Cross-platform mobile apps in Flutter and Dart. One codebase for both Android and iOS with near-native performance and pixel-perfect UI consistency.',
        },
        {
          title: 'React Native App Development',
          description:
            'React Native apps for businesses that want faster time-to-market without compromising user experience. Shared codebase, platform-specific UI where it matters.',
        },
        {
          title: 'Custom Enterprise Mobile Apps',
          description:
            'Internal mobile applications for field force automation, inventory management, sales tracking, dealer portals and enterprise workflow digitisation.',
        },
        {
          title: 'On-Demand & Marketplace Apps',
          description:
            'Booking, delivery, services and marketplace apps with customer app, vendor app, admin dashboard and backend CRM full ecosystem delivery.',
        },
      ].map((service) => (
        <div
          key={service.title}
          className="group relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          {/* top accent line */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-400 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

          {/* ICON */}
          <div className="w-12 h-12 mb-5 rounded-xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-500 transition">
            <div className="w-5 h-5 border-2 border-sky-500 group-hover:border-white rounded-sm"></div>
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-semibold text-navy mb-3 leading-snug">
            {service.title}
          </h3>

          {/* DESC */}
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            {service.description}
          </p>

          {/* FOOTER */}
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            In-house delivery · Fixed scope · On time
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* ============ WHY US ============ */}
      {/* Placement #12: WhyUs H2 subheading - Primary keyword */}
      <WhyUs
        heading="Six Things No Other Mobile App Development Company in Mysore Offers"
        subheading="These are not marketing claims. They are verifiable operating facts you can confirm by walking into any of our four offices."
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
      {/* Placement #13: Case studies heading */}
      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">Case Studies</span>
          <h2 className="heading-h2">
            Real Mobile Apps. Documented Outcomes.
          </h2>
          <p className="lead-text">
            Representative mobile app projects built by our in-house team the
            brief, what was shipped, and the measured result.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                client: 'Vijaya Home Services',
                sector: 'On-Demand Services · Bengaluru',
                headline: '340% Booking Growth in 6 Months',
                stack: 'React Native · Node JS · AWS',
                description:
                  'Complete ecosystem with Android customer app, vendor staff app and admin CRM. Revenue grew 340% in six months with zero manual phone bookings.',
                metrics: ['340% Growth', '4.6★ Rating', '0 Phone Bookings', '8wk Delivery'],
              },
              {
                client: 'Pro Leverage',
                sector: 'Finance & Investment · Bengaluru',
                headline: '10,000 Downloads in Month One',
                stack: 'Flutter · REST API',
                description:
                  'Flutter finance app with real-time charts, live data feeds and a clean UI built around retail investor workflows. 10,000+ downloads in the first month.',
                metrics: ['10K+ Downloads', '4.4★ Rating', '60% Fewer Queries', '6wk Delivery'],
              },
              {
                client: 'Puran Interiors',
                sector: 'Interior Design · Bengaluru',
                headline: 'Page 1 Google in 90 Days',
                stack: 'Next JS · SEO · CMS',
                description:
                  'Next JS portfolio site with on-page SEO and Core Web Vitals optimisation. Ranked page 1 within 90 days, driving 12+ qualified enquiries per month.',
                metrics: ['1st Page Google', '12+ Leads/Mo', 'PageSpeed 95', '4wk Delivery'],
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

      {/* ============ GOOGLE REVIEWS PROOF ============ */}
      {/* <section className="py-20 bg-slate-50">
        <div className="container-nnc text-center">
          <span className="section-tag">Google Reviews</span>
          <h2 className="heading-h2">One Consistent Verdict.</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-10 mb-10">
            <div>
              <div className="text-5xl font-extrabold text-sky">4.9</div>
              <div className="text-xs text-slate-500 mt-1">Google Rating</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-sky">87</div>
              <div className="text-xs text-slate-500 mt-1">Verified Reviews</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-sky">565+</div>
              <div className="text-xs text-slate-500 mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-sky">4</div>
              <div className="text-xs text-slate-500 mt-1">Physical Offices</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 text-left max-w-5xl mx-auto">
            {[
              {
                quote:
                  'NNC delivered an app that changed how our business operates. Within 6 months bookings grew 340% and phone orders disappeared. Professional and on budget.',
                client: 'Vijaya Home Services',
                role: 'On-Demand Services',
              },
              {
                quote:
                  'Professional, responsive and ensured the app was built exactly as envisioned. Clean, functional and user-friendly. Thanks to the entire NNC team.',
                client: 'Make My Documents',
                role: 'Document Services',
              },
              {
                quote:
                  'Our consultant at NNC understood our requirements perfectly. The support team guided and improved our ideas and delivered what they promised.',
                client: 'Chaandini Srinivas',
                role: 'Bengaluru',
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border-l-4 border-sky shadow-card"
              >
                <div className="text-sky text-lg mb-2">★★★★★</div>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed italic">
                  "{review.quote}"
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-bold text-navy text-sm">{review.client}</div>
                  <div className="text-xs text-slate-500">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-14 bg-[#0B1B3A] text-white">
  <div className="container-nnc">

    {/* Header */}
    <div className="text-center">
      <span className="inline-block px-4 py-1 text-xs bg-white/10 rounded-full text-slate-300 mb-4">
        CLIENT REVIEWS
      </span>

      <h2 className="text-3xl md:text-4xl font-bold">
        What Our App Clients <br />
        <span className="text-sky-400">Say on Google</span>
      </h2>
    </div>

    {/* Stats Bar */}
    <div className="mt-12 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-wrap justify-between items-center gap-6">

      {/* Google Rating */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
          G
        </div>
        <div>
          <div className="text-2xl font-bold">4.9</div>
          <div className="text-yellow-400 text-sm">★★★★★</div>
          <div className="text-xs text-slate-400">Google Business · Bengaluru</div>
        </div>
      </div>

      {/* Other Stats */}
      {[
        { value: "87", label: "Reviews" },
        { value: "150+", label: "Apps Delivered" },
        { value: "8+", label: "Years" },
        { value: "4", label: "Offices" },
      ].map((stat, i) => (
        <div key={i} className="text-center min-w-[80px]">
          <div className="text-xl font-bold">{stat.value}</div>
          <div className="text-xs text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Reviews */}
    <div className="grid md:grid-cols-3 gap-6 mt-14">
      {[
        {
          quote:
            "NNC built our complete on-demand platform in 8 weeks. Within 6 months we had 340% more bookings. The team was always reachable and delivered exactly what was scoped.",
          client: "Vijaya Home Services",
          role: "On-demand Services · Bengaluru",
          tag: "340% booking growth",
        },
        {
          quote:
            "We needed a finance app retail investors could actually use. NNC got it right first time. 10,000 downloads in month one and 4.4 stars on Play Store.",
          client: "Pro Leverage",
          role: "Finance App · Bengaluru",
          tag: "10K+ downloads M1",
        },
        {
          quote:
            "The team understood our OTT product inside out. The React Native app performed exactly like a native app. Deployment was smooth and hassle-free.",
          client: "CND Play",
          role: "OTT Platform · Bengaluru",
          tag: "4.4★ Play Store",
        },
      ].map((review, idx) => (
        <div
          key={idx}
          className="bg-[#0F274F] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >

          {/* Stars */}
          <div className="text-yellow-400 mb-3">★★★★★</div>

          {/* Quote */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            "{review.quote}"
          </p>

          {/* Footer */}
          <div>
            <div className="font-semibold text-white text-sm">
              {review.client}
            </div>
            <div className="text-xs text-slate-400 mb-3">
              {review.role}
            </div>

            {/* Tag */}
            <div className="inline-block text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
              ✓ {review.tag}
            </div>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* ============ FAQ ============ */}
      {/* Placements #14 already in FAQ items */}
      <FAQ
        heading="Mobile App Development in Mysore: Questions Answered"
        items={faqItems}
      />

      {/* ============ CTA BAND ============ */}
      {/* Placement #15: CTA heading - Primary keyword */}
      <CTABand
        heading="Ready To Hire The Best Mobile App Development Company in Mysore?"
        subheading="Tell us what you need. We come back with clear scope, timeline and a fixed price within 24 hours. No obligation."
      />

      <Footer />
    </>
  );
}
