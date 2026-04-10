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

// PRIMARY KEYWORD: "custom crm development mysore"

const PAGE_URL = 'https://nakshatranamahacreations.com/custom-crm-development-mysore';

export const metadata: Metadata = {
  title: 'Custom CRM Development Mysore | Bespoke CRM Software | NNC',
  description:
    'Nakshatra Namaha Creations delivers custom CRM development Mysore businesses trust. Bespoke CRM software built around your exact workflow. Replace Zoho, Salesforce & HubSpot. 565+ projects, full source code ownership, fixed price.',
  keywords: [
    'custom crm development mysore',
    'bespoke crm mysore',
    'tailored crm software mysore',
    'custom crm solutions mysore',
    'custom crm platform mysore',
    'crm development services mysore',
    'custom sales crm mysore',
    'custom service crm mysore',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Custom CRM Development Mysore | NNC Digital',
    description:
      'Custom CRM development Mysore businesses rely on. Bespoke CRM platforms. 565+ projects delivered.',
    images: ['/og-custom-crm-mysore.jpg'],
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom CRM Development Mysore | NNC',
    description: 'Custom CRM development Mysore. Bespoke CRM platforms.',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Mysore, Karnataka',
    'geo.position': '12.2958;76.6394',
    ICBM: '12.2958, 76.6394',
  },
};

export default function CustomCRMDevelopmentMysorePage() {
  const localBusinessSchema = buildLocalBusinessSchema({
    name: 'NNC - Custom CRM Development Mysore',
    description:
      'Nakshatra Namaha Creations delivers custom CRM development Mysore businesses trust. Bespoke customer relationship management platforms built around your exact workflow. 565+ projects delivered since 2015.',
    url: PAGE_URL,
  });

  const serviceSchema = buildServiceSchema({
    serviceType: 'Custom CRM Development Mysore',
    description:
      'End-to-end custom CRM development services in Mysore. Bespoke CRM platforms tailored to your exact sales, service and operational workflows.',
    offers: [
      'Bespoke Custom CRM Development',
      'Tailored Sales CRM',
      'Custom Service CRM',
      'Industry-Specific CRM Solutions',
      'Custom CRM Integration',
      'Legacy CRM Modernisation',
    ],
  });

  const faqItems = [
    {
      question: 'What is custom CRM development Mysore businesses need?',
      answer:
        'Custom CRM development Mysore companies need is a bespoke customer relationship management platform built around their specific sales process, approval workflows, commission structures and integration requirements rather than forcing their team to adapt to generic Zoho or Salesforce workflows.',
    },
    {
      question: 'How much does custom CRM development Mysore projects cost?',
      answer:
        'Custom CRM development Mysore projects typically range from ₹2 lakh to ₹20 lakh as a one-time investment. Final pricing depends on number of modules, user count, integrations, automation complexity and deployment requirements. No recurring license fees ever.',
    },
    {
      question: 'Why choose custom CRM over Zoho, Salesforce or HubSpot?',
      answer:
        'Custom CRM eliminates recurring per-user license fees (which compound as teams grow), removes feature limitations that restrict workflow flexibility, gives full source code and data ownership, and delivers lower total cost of ownership after year 2 for teams of 15+ users.',
    },
    {
      question: 'How long does custom CRM development take?',
      answer:
        'Basic custom CRM projects take 8-12 weeks, mid-sized platforms with multiple modules take 12-20 weeks, and enterprise-grade custom CRMs with advanced automation and multi-system integrations take 20-36 weeks.',
    },
    {
      question: 'Can you integrate custom CRM with our existing systems?',
      answer:
        'Yes. We integrate custom CRM platforms with Tally ERP, SAP, Oracle, Zoho Books, QuickBooks, payment gateways, WhatsApp Business API, Twilio, email marketing platforms, telephony systems and any custom third-party APIs.',
    },
    {
      question: 'Do you offer post-launch support for custom CRM?',
      answer:
        'Yes. 30 days of free support included, plus structured long-term maintenance contracts covering bug fixes, feature additions, server monitoring, security updates and ongoing technical assistance.',
    },
  ];

  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema('Custom CRM Development Mysore', PAGE_URL);

  const whyUsItems = [
    { num: '01', title: 'Built Around Your Workflow', description: 'No forcing your team to adapt. Every screen, field, workflow and automation matches your exact sales and service process.' },
    { num: '02', title: 'Zero Recurring License Fees', description: 'One-time investment. Add unlimited users forever with no subscription costs. Lower TCO after year 2 for growing teams.' },
    { num: '03', title: '100% Source Code Ownership', description: 'Complete source code, database schema, credentials and documentation yours on delivery. No lock-in.' },
    { num: '04', title: 'Enterprise Integrations', description: 'Seamless integration with ERP, accounting, telephony, WhatsApp, payment gateways and any custom system.' },
    { num: '05', title: '565+ Projects Delivered', description: '10+ years of delivery. 87 verified Google reviews. 4.9-star rating. Track record you can verify.' },
    { num: '06', title: 'Fixed Price Upfront', description: 'Agreed in writing before a single line of code. No scope creep, no surprise invoices, no hidden costs.' },
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', description: 'Map current workflow, pain points and desired outcomes.', duration: 'Week 1' },
    { num: '02', title: 'Fixed Quote', description: 'Modules, timeline and pricing agreed in writing.', duration: 'Week 1-2' },
    { num: '03', title: 'Architecture', description: 'Database, workflow and UI designs approved.', duration: 'Week 2-4' },
    { num: '04', title: 'Development', description: 'Agile sprints with weekly module-level reviews.', duration: 'Week 4-14' },
    { num: '05', title: 'UAT & Training', description: 'User testing, data migration, team training.', duration: 'Week 14-16' },
    { num: '06', title: 'Launch & Support', description: 'Deployment plus structured SLA post-launch support.', duration: 'Week 16+' },
  ];

  const technologies = [
    { name: 'React JS', category: 'Frontend' },
    { name: 'Next JS', category: 'Framework' },
    { name: 'Node JS', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
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
                Custom CRM Development <span className="text-sky">Mysore</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-7 leading-relaxed">
                Nakshatra Namaha Creations delivers custom CRM development Mysore
                businesses trust. Bespoke CRM platforms built around your exact
                workflow. Replace Zoho, Salesforce and HubSpot. 565+ projects, full
                source code ownership, zero recurring license fees.
              </p>
              <StatsBar />
              <TrustBadges />
              <div className="flex flex-wrap gap-4">
                <a href="#enquiry" className="btn-primary">Get Free CRM Quote</a>
                <a href="tel:+919900566466" className="btn-secondary">Call +91 99005 66466</a>
              </div>
            </div>
            <CRMEnquiryForm
              serviceType="Custom CRM Development Mysore"
              heading="Get Your Custom CRM Quote"
              subheading="Fixed-price proposal in 24 hours. NDA available."
            />
          </div>
        </div>
      </section>

      <LocationBar />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">About NNC</span>
          <h2 className="heading-h2">Why Custom CRM Development Mysore Businesses Choose NNC</h2>
          <p className="lead-text">
            A decade of delivering tailored CRM platforms that fit your business
            not the other way around.
          </p>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              Most businesses start with an off-the-shelf CRM and quickly discover the limits.
              Zoho is cheap but inflexible. Salesforce is powerful but expensive and complex.
              HubSpot is user-friendly but limited in deep customisation. Freshworks sits
              somewhere in the middle. All of them share one fundamental problem: they are
              built for the average business, not for yours. As your team grows and your
              workflows become more specific, you spend more time fighting the software than
              using it and the per-user license fees just keep compounding.
            </p>
            <p>
              Custom CRM development Mysore companies need solves this problem permanently.
              Instead of adapting your process to fit generic software, we build software that
              fits your process exactly. Every field, every workflow, every approval hierarchy,
              every report is designed around how your team actually works. You pay once for
              development, own the source code forever, add unlimited users with no extra cost,
              and modify or extend the platform whenever your business evolves.
            </p>
            <p>
              Nakshatra Namaha Creations has delivered custom CRM platforms for real estate
              firms managing multi-crore property portfolios, healthcare networks running
              multiple clinic locations, automotive service franchises with dealer networks,
              coaching institutes tracking student lifecycles across campuses, manufacturing
              companies integrating CRM with Tally ERP, and e-commerce businesses automating
              lead nurture across WhatsApp, email and SMS. Whatever your industry, our in-house
              team has shipped something structurally similar.
            </p>
            <p>
              Every custom CRM development Mysore project we deliver follows the same rigorous
              process: discovery workshop, fixed-price proposal in writing, architecture and UI
              design approved before coding, agile sprint-based development with weekly client
              reviews, structured UAT and training, and deployment on your preferred cloud. Full
              source code ownership on handover. No lock-in. No surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container-nnc">
          <span className="section-tag">What We Build</span>
          <h2 className="heading-h2">Custom CRM Development Mysore Services We Offer</h2>
          <p className="lead-text">
            Every type of bespoke CRM platform delivered by our in-house engineering team.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'Bespoke Sales CRM', description: 'Custom pipeline, quotation workflow, commission structures and sales forecasting built for your exact process.' },
              { title: 'Custom Service CRM', description: 'Ticket lifecycle, SLA matrix, escalation rules and agent performance dashboards tailored to your support model.' },
              { title: 'Real Estate CRM', description: 'Property inventory, buyer matching, site visit tracking, broker commissions and deal pipeline management.' },
              { title: 'Healthcare CRM', description: 'Patient lifecycle, appointment workflows, prescription tracking and hospital information system integration.' },
              { title: 'Manufacturing CRM', description: 'Dealer management, order processing, dispatch tracking, inventory sync and Tally ERP integration.' },
              { title: 'Education CRM', description: 'Lead-to-enrolment tracking, fee management, batch scheduling, parent communication and student progress.' },
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
        heading="Why We Lead Custom CRM Development Mysore Market"
        subheading="Six operating facts that separate NNC from subscription CRMs and generalist vendors."
        items={whyUsItems}
      />

      <ProcessSteps heading="Six Steps. Your Approval At Every Stage." items={processSteps} />

      <TechStack technologies={technologies} />

      <Industries />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">Case Studies</span>
          <h2 className="heading-h2">Real Custom CRMs. Measured Outcomes.</h2>
          <p className="lead-text">Three representative custom CRM development Mysore projects delivered by our in-house team.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                client: '3M Car Care',
                sector: 'Automotive Custom CRM',
                headline: 'Multi-Tenant Franchise Platform',
                stack: 'Next JS · Node · MongoDB',
                description: 'Multi-tenant SaaS CRM for car care franchise with GST invoicing, subscription billing and Razorpay integration.',
                metrics: ['Multi-Tenant', 'GST Invoices', 'Razorpay', '10wk Build'],
              },
              {
                client: 'Vijaya Home Services',
                sector: 'Service Business CRM',
                headline: '340% Business Growth',
                stack: 'React · Node · AWS',
                description: 'End-to-end custom CRM with bookings, vendor management, commission tracking and admin dashboards.',
                metrics: ['340% Growth', '0 Phone Orders', 'Admin Dash', '8wk Build'],
              },
              {
                client: 'Real Estate Firm',
                sector: 'Real Estate Custom CRM',
                headline: 'Deal Pipeline Platform',
                stack: 'Next JS · PostgreSQL',
                description: 'Property inventory, buyer matching, site visits, broker commissions and deal pipeline in one CRM.',
                metrics: ['Inventory Mgmt', 'Commission Auto', 'WhatsApp API', '12wk Build'],
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

      <FAQ heading="Custom CRM Development Mysore: Questions Answered" items={faqItems} />

      <CTABand
        heading="Ready To Start Your Custom CRM Development Mysore Project?"
        subheading="Tell us about your workflow. We come back with clear scope, timeline and fixed-price quote within 24 hours."
      />

      <Footer />
    </>
  );
}
