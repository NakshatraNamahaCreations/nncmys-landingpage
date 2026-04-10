import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CRMEnquiryForm from '@/components/CRMEnquiryForm';
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

// PRIMARY KEYWORD: "crm development company in mysore"

const PAGE_URL = 'https://nakshatranamahacreations.com/crm-development-company-in-mysore';

export const metadata: Metadata = {
  title: 'CRM Development Company in Mysore | Enterprise CRM Platforms | NNC',
  description:
    'Nakshatra Namaha Creations is the leading CRM development company in Mysore. Build enterprise CRM platforms tailored to your business. 565+ projects, 35+ in-house developers, fixed price, zero outsourcing.',
  keywords: [
    'crm development company in mysore',
    'crm development services mysore',
    'crm builder mysore',
    'enterprise crm company mysore',
    'crm application development mysore',
    'crm system development mysore',
    'crm development agency mysore',
    'crm platform company mysore',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'CRM Development Company in Mysore | NNC Digital',
    description:
      'Top CRM development company in Mysore. Enterprise CRM platforms. 565+ projects.',
    images: ['/og-crm-development-mysore.jpg'],
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM Development Company in Mysore',
    description: 'Top CRM development company in Mysore.',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Mysore, Karnataka',
    'geo.position': '12.2958;76.6394',
    ICBM: '12.2958, 76.6394',
  },
};

export default function CRMDevelopmentCompanyMysorePage() {
  const localBusinessSchema = buildLocalBusinessSchema({
    name: 'NNC - CRM Development Company in Mysore',
    description:
      'Nakshatra Namaha Creations is the leading CRM development company in Mysore building enterprise customer relationship management platforms, sales automation systems and bespoke CRM applications since 2015.',
    url: PAGE_URL,
  });

  const serviceSchema = buildServiceSchema({
    serviceType: 'CRM Development Company in Mysore',
    description:
      'End-to-end CRM development services from an in-house team. Enterprise CRM platforms, sales CRM, customer service CRM, SaaS CRM and bespoke CRM applications.',
    offers: [
      'Enterprise CRM Development',
      'Sales CRM Development',
      'Customer Service CRM',
      'SaaS CRM Development',
      'Industry-Specific CRM',
      'CRM Integration Services',
    ],
  });

  const faqItems = [
    {
      question: 'Which is the best CRM development company in Mysore?',
      answer:
        'Nakshatra Namaha Creations is the leading CRM development company in Mysore with 10+ years of experience, 565+ projects, 35+ in-house developers, and specialisation in custom CRM platforms for real estate, healthcare, manufacturing, education and legal sectors.',
    },
    {
      question: 'How much does a CRM development company in Mysore charge?',
      answer:
        'A quality CRM development company in Mysore typically charges ₹2 lakh to ₹20 lakh depending on modules, user count, integrations and automation complexity. One-time investment with no recurring license fees, unlike Zoho or Salesforce subscriptions.',
    },
    {
      question: 'Do you build enterprise-grade CRM platforms?',
      answer:
        'Yes. We build multi-tenant SaaS CRM platforms, role-based access control systems, advanced reporting engines, workflow automation and integrations with enterprise systems like Tally, SAP, Oracle, Zoho Books and custom APIs.',
    },
    {
      question: 'How long does CRM development take?',
      answer:
        'Basic CRM 8-12 weeks. Mid-sized multi-module CRM 12-20 weeks. Enterprise CRM platforms with deep automation and integrations 20-36 weeks. All projects follow agile sprint-based delivery.',
    },
    {
      question: 'Do I own the source code of the CRM?',
      answer:
        'Yes. Complete source code, database schema, documentation and all credentials handed over on delivery. Full intellectual property rights. No vendor lock-in ever.',
    },
    {
      question: 'Can you migrate our data from existing CRM?',
      answer:
        'Yes. We handle data migration from Zoho, Salesforce, HubSpot, Freshworks, Excel spreadsheets or custom legacy systems as part of the delivery process with full data integrity checks.',
    },
  ];

  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema('CRM Development Company in Mysore', PAGE_URL);

  const whyUsItems = [
    { num: '01', title: 'Specialist CRM Engineers', description: 'Dedicated CRM architects experienced in multi-tenant SaaS, role-based access control, workflow automation and enterprise integrations.' },
    { num: '02', title: 'Zero Outsourcing', description: 'Every developer is a permanent NNC employee. Walk into any of our four offices and meet the team building your CRM.' },
    { num: '03', title: 'Modern Tech Stack', description: 'React, Next JS, Node JS, MongoDB, PostgreSQL, AWS proven, scalable, future-ready stack any engineer can maintain.' },
    { num: '04', title: 'Full Source Code Ownership', description: 'Complete source code, database, credentials and documentation handed over. No lock-in, no dependencies.' },
    { num: '05', title: 'Enterprise Integrations', description: 'ERP, accounting, telephony, WhatsApp, payment gateways, email marketing and any custom API seamlessly integrated.' },
    { num: '06', title: '565+ Projects Delivered', description: 'Operating since 2015. Verifiable portfolio. 4.9-star Google rating across 87 reviews. Track record you can confirm.' },
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', description: 'Map workflows, integrations and business rules.', duration: 'Week 1' },
    { num: '02', title: 'Fixed Quote', description: 'Modules, timeline and pricing agreed in writing.', duration: 'Week 1-2' },
    { num: '03', title: 'Architecture', description: 'DB schema, wireframes, API design approved.', duration: 'Week 2-4' },
    { num: '04', title: 'Development', description: 'Sprint-based builds with module-level client reviews.', duration: 'Week 4-14' },
    { num: '05', title: 'UAT & Migration', description: 'User acceptance, data migration, training.', duration: 'Week 14-16' },
    { num: '06', title: 'Go-Live', description: 'Deployment and defined SLA post-launch support.', duration: 'Week 16+' },
  ];

  const technologies = [
    { name: 'React JS', category: 'Frontend' },
    { name: 'Next JS', category: 'Framework' },
    { name: 'Node JS', category: 'Backend' },
    { name: 'MongoDB', category: 'NoSQL' },
    { name: 'PostgreSQL', category: 'SQL' },
    { name: 'Redis', category: 'Cache' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Razorpay', category: 'Payments' },
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
                CRM Development Company in <span className="text-sky">Mysore</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-7 leading-relaxed">
                Nakshatra Namaha Creations is the leading CRM development company
                in Mysore building enterprise customer relationship management
                platforms, sales automation systems and bespoke CRM applications.
                10+ years, 565+ projects, 35+ in-house developers, zero outsourcing.
              </p>
              <StatsBar />
              <TrustBadges />
              <div className="flex flex-wrap gap-4">
                <a href="#enquiry" className="btn-primary">Get Free CRM Quote</a>
                <a href="tel:+919900566466" className="btn-secondary">Call +91 99005 66466</a>
              </div>
            </div>
            <CRMEnquiryForm
              serviceType="CRM Development Company Mysore"
              heading="Get Your CRM Quote"
              subheading="Fixed-price proposal in 24 hours. NDA available."
            />
          </div>
        </div>
      </section>

      <LocationBar />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">About NNC</span>
          <h2 className="heading-h2">The Trusted CRM Development Company in Mysore</h2>
          <p className="lead-text">
            Enterprise CRM platforms built by a specialist in-house team with
            a decade of delivery experience.
          </p>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              Customer relationship management is the operational backbone of every serious
              business. A well-designed CRM captures every lead, automates every follow-up,
              tracks every deal, measures every salesperson, integrates with every supporting
              system, and gives management real-time visibility into the health of the sales
              pipeline. A poorly-designed CRM does the opposite: adds friction, leaks data,
              frustrates users, and quickly becomes shelfware. The difference comes down to
              execution and execution requires a specialist team, not a generalist vendor.
            </p>
            <p>
              Nakshatra Namaha Creations is the CRM development company in Mysore businesses
              trust when they need CRM done right. Our in-house CRM team specialises in
              multi-tenant SaaS architecture, role-based access control, workflow automation,
              custom reporting engines and deep enterprise integrations. We build CRM platforms
              that users actually adopt because they reflect how your team actually works.
            </p>
            <p>
              Our CRM portfolio spans real estate firms managing large property inventories,
              healthcare networks coordinating multiple clinic locations, automotive franchises
              tracking dealer and service networks, education institutes handling student
              lifecycles across campuses, manufacturing companies integrating CRM with Tally
              ERP for order-to-invoice flows, legal practices managing case workflows, and
              SaaS startups launching multi-tenant CRM products of their own.
            </p>
            <p>
              Every CRM project we deliver comes with fixed-price quotation in writing, module
              level milestone reviews, structured UAT and user training, data migration from
              legacy systems, deployment on your preferred cloud infrastructure, and full source
              code ownership on handover. No recurring license fees. No platform lock-in. No
              surprise invoices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container-nnc">
          <span className="section-tag">What We Build</span>
          <h2 className="heading-h2">Services From Our CRM Development Company in Mysore</h2>
          <p className="lead-text">
            Every type of CRM platform delivered by our specialist in-house engineering team.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'Enterprise CRM Platforms', description: 'Full-scale multi-department CRM with custom modules, advanced reporting, BI dashboards and ERP integration.' },
              { title: 'SaaS CRM Development', description: 'Multi-tenant SaaS CRM platforms for launching your own CRM product with subscription billing, tenant isolation and admin control.' },
              { title: 'Sales CRM Development', description: 'Pipeline management, quotation workflows, commission tracking, sales forecasting and performance dashboards.' },
              { title: 'Customer Service CRM', description: 'Ticket lifecycle management, SLA tracking, omnichannel support, knowledge base and agent performance analytics.' },
              { title: 'Industry-Specific CRM', description: 'Real estate, healthcare, manufacturing, legal, automotive and education CRMs built for sector-specific workflows.' },
              { title: 'CRM Integration Services', description: 'Connect CRM with Tally, SAP, Oracle, Zoho Books, telephony, WhatsApp, payment gateways and custom APIs.' },
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
        heading="Why We Are The Preferred CRM Development Company in Mysore"
        subheading="Six operating facts that separate NNC from subscription CRMs and generalist vendors."
        items={whyUsItems}
      />

      <ProcessSteps heading="Six Steps. Your Approval At Every Stage." items={processSteps} />

      <TechStack technologies={technologies} />

      <Industries />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">Case Studies</span>
          <h2 className="heading-h2">Real CRM Projects. Measured Outcomes.</h2>
          <p className="lead-text">Representative CRM projects delivered by our in-house team.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                client: '3M Car Care',
                sector: 'Multi-Tenant SaaS CRM',
                headline: 'Franchise Platform Launch',
                stack: 'Next JS · Node · MongoDB',
                description: 'Multi-tenant SaaS CRM for car care franchise with subscription billing, GST invoicing and Razorpay.',
                metrics: ['Multi-Tenant', 'GST Invoices', 'Razorpay', '10wk Build'],
              },
              {
                client: 'Vijaya Home Services',
                sector: 'Service Business CRM',
                headline: '340% Business Growth',
                stack: 'React · Node · AWS',
                description: 'End-to-end CRM with bookings, vendor management, commission tracking and admin dashboards.',
                metrics: ['340% Growth', '0 Phone Orders', 'Admin Dash', '8wk Build'],
              },
              {
                client: 'Real Estate Firm',
                sector: 'Property CRM',
                headline: 'Inventory + Deal Pipeline',
                stack: 'Next JS · PostgreSQL',
                description: 'Property inventory, buyer matching, site visit tracking, broker commissions and deal pipeline.',
                metrics: ['Inventory', 'Auto Commission', 'WhatsApp', '12wk Build'],
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

      <FAQ heading="CRM Development Company in Mysore: Questions Answered" items={faqItems} />

      <CTABand
        heading="Ready To Hire The Best CRM Development Company in Mysore?"
        subheading="Tell us about your CRM requirements. We come back with clear scope, timeline and fixed-price quote within 24 hours."
      />

      <Footer />
    </>
  );
}
