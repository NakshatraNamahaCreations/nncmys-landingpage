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

// PRIMARY KEYWORD: "sales crm software mysore"

const PAGE_URL = 'https://nakshatranamahacreations.com/sales-crm-software-mysore';

export const metadata: Metadata = {
  title: 'Sales CRM Software Mysore | Custom Sales CRM Development | NNC',
  description:
    'Nakshatra Namaha Creations builds sales CRM software Mysore businesses trust. Custom sales pipeline management, lead tracking, quotation automation. 565+ projects, 35+ in-house developers, no recurring license fees.',
  keywords: [
    'sales crm software mysore',
    'sales crm development mysore',
    'sales pipeline crm mysore',
    'lead tracking software mysore',
    'sales automation crm mysore',
    'b2b sales crm mysore',
    'sales team crm mysore',
    'custom sales crm mysore',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Sales CRM Software Mysore | Custom Development | NNC',
    description:
      'Sales CRM software Mysore businesses trust. Custom sales pipeline and lead tracking. 565+ projects.',
    images: ['/og-sales-crm-mysore.jpg'],
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sales CRM Software Mysore',
    description: 'Sales CRM software Mysore. Custom development.',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Mysore, Karnataka',
    'geo.position': '12.2958;76.6394',
    ICBM: '12.2958, 76.6394',
  },
};

export default function SalesCRMSoftwareMysorePage() {
  const localBusinessSchema = buildLocalBusinessSchema({
    name: 'NNC - Sales CRM Software Mysore',
    description:
      'Nakshatra Namaha Creations builds sales CRM software Mysore businesses use to manage pipelines, track leads, automate quotations and forecast revenue. 565+ projects delivered since 2015.',
    url: PAGE_URL,
  });

  const serviceSchema = buildServiceSchema({
    serviceType: 'Sales CRM Software Mysore',
    description:
      'Custom sales CRM software development in Mysore. Sales pipeline management, lead tracking, quotation workflows, commission tracking, forecasting and sales team dashboards.',
    offers: [
      'Custom Sales CRM Software',
      'Sales Pipeline Management',
      'Lead Tracking System',
      'Quotation Automation',
      'Sales Forecasting',
      'Commission Tracking',
    ],
  });

  const faqItems = [
    {
      question: 'What is the best sales CRM software Mysore businesses use?',
      answer:
        'The best sales CRM software Mysore businesses use is one built around their exact sales workflow rather than generic tools like Zoho or Salesforce. Nakshatra Namaha Creations builds custom sales CRM software tailored to your pipeline stages, quotation process and commission structure.',
    },
    {
      question: 'How much does custom sales CRM software Mysore cost?',
      answer:
        'Custom sales CRM software Mysore projects typically cost ₹2 lakh to ₹15 lakh depending on modules, user count, automation complexity and integrations. One-time investment with no recurring license fees, unlike subscription CRMs.',
    },
    {
      question: 'Why build custom sales CRM instead of using Zoho or Salesforce?',
      answer:
        'Custom sales CRM software Mysore companies build delivers exact workflow fit, zero recurring license fees, unlimited users, full data and source code ownership, and lower total cost of ownership after year 2 for teams larger than 15 people.',
    },
    {
      question: 'What features are included in sales CRM software?',
      answer:
        'Lead capture from multiple sources, pipeline visualisation, contact and account management, quotation and proposal workflows, task and activity tracking, email and WhatsApp integration, sales forecasting, commission tracking and custom reporting dashboards.',
    },
    {
      question: 'Can the sales CRM integrate with WhatsApp and email?',
      answer:
        'Yes. We integrate sales CRM software with WhatsApp Business API, Gmail, Outlook, bulk email marketing platforms, Twilio SMS and telephony systems for complete omnichannel sales communication tracking.',
    },
    {
      question: 'Do you handle CRM data migration from existing systems?',
      answer:
        'Yes. We migrate sales data from Excel spreadsheets, Zoho, Salesforce, HubSpot, Freshworks or any legacy system with full data integrity checks as part of the delivery process.',
    },
  ];

  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema('Sales CRM Software Mysore', PAGE_URL);

  const whyUsItems = [
    { num: '01', title: 'Built Around Your Sales Process', description: 'Every pipeline stage, quotation workflow, approval and commission rule matches exactly how your sales team actually works.' },
    { num: '02', title: 'Zero Recurring License Fees', description: 'One-time investment. Add unlimited sales reps as your team grows. No Zoho or Salesforce per-user subscriptions.' },
    { num: '03', title: 'Lead Leak Prevention', description: 'Auto-capture, auto-assignment, SLA tracking and escalation rules ensure no lead ever falls through the cracks.' },
    { num: '04', title: 'Real-Time Sales Dashboards', description: 'Management dashboards with live pipeline value, conversion rates, sales rep performance and revenue forecasting.' },
    { num: '05', title: 'Full Source Code Ownership', description: 'Complete source code, database and documentation handed over on delivery. No vendor lock-in ever.' },
    { num: '06', title: '565+ Projects Delivered', description: 'Operating since 2015. 87 verified Google reviews. 4.9-star rating. Verifiable track record.' },
  ];

  const processSteps = [
    { num: '01', title: 'Sales Discovery', description: 'Map pipeline stages, workflows, approvals and commissions.', duration: 'Week 1' },
    { num: '02', title: 'Fixed Quote', description: 'Modules, timeline and pricing agreed in writing.', duration: 'Week 1-2' },
    { num: '03', title: 'Design & Schema', description: 'Database, wireframes and UI designs approved.', duration: 'Week 2-4' },
    { num: '04', title: 'Development', description: 'Sprint-based builds with weekly sales team reviews.', duration: 'Week 4-12' },
    { num: '05', title: 'UAT & Training', description: 'User testing, data migration, sales team training.', duration: 'Week 12-14' },
    { num: '06', title: 'Go-Live', description: 'Deployment and post-launch support with SLA.', duration: 'Week 14+' },
  ];

  const technologies = [
    { name: 'React JS', category: 'Frontend' },
    { name: 'Next JS', category: 'Framework' },
    { name: 'Node JS', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'WhatsApp API', category: 'Messaging' },
    { name: 'Twilio', category: 'SMS' },
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
                Sales CRM Software <span className="text-sky">Mysore</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-7 leading-relaxed">
                Nakshatra Namaha Creations builds sales CRM software Mysore
                businesses trust to manage pipelines, track leads, automate
                quotations and forecast revenue. Custom-built around your exact
                sales process. No recurring license fees. Full source code
                ownership. 565+ projects delivered.
              </p>
              <StatsBar />
              <TrustBadges />
              <div className="flex flex-wrap gap-4">
                <a href="#enquiry" className="btn-primary">Get Free Sales CRM Quote</a>
                <a href="tel:+919900566466" className="btn-secondary">Call +91 99005 66466</a>
              </div>
            </div>
            <CRMEnquiryForm
              serviceType="Sales CRM Software Mysore"
              heading="Get Your Sales CRM Quote"
              subheading="Fixed-price proposal in 24 hours. NDA available."
            />
          </div>
        </div>
      </section>

      <LocationBar />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">About NNC</span>
          <h2 className="heading-h2">Why Sales CRM Software Mysore Businesses Choose NNC</h2>
          <p className="lead-text">
            Custom sales pipeline management built around your exact sales
            process not a generic tool you have to bend your team to fit.
          </p>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              Every growing business eventually hits the same wall. You start with spreadsheets,
              move to a free CRM, graduate to Zoho or HubSpot, and at some point discover that
              the tool is shaping how your team sells rather than the other way around. You pay
              per user every month. You fight feature limitations. You build workarounds for
              workflows the software does not support. You lose leads because the auto-assignment
              rules do not match your territory structure. Eventually the cost and friction
              outweigh the convenience and that is the moment custom sales CRM software pays
              for itself.
            </p>
            <p>
              Nakshatra Namaha Creations builds sales CRM software Mysore businesses use to
              escape this trap permanently. Our sales CRM platforms are designed around your
              specific pipeline stages, lead sources, qualification criteria, quotation
              workflows, approval hierarchies, commission structures, territory rules and
              reporting requirements. Not Zoho's. Not Salesforce's. Yours.
            </p>
            <p>
              We have built sales CRM software for real estate firms tracking property deals,
              manufacturing companies managing dealer networks, coaching institutes converting
              enquiries to enrolments, healthcare networks tracking patient referrals, legal
              practices managing case pipelines, and B2B service businesses closing enterprise
              deals. In every case, the custom sales CRM paid for itself within 12-18 months by
              eliminating license fees, preventing lead leakage and improving sales velocity.
            </p>
            <p>
              Every sales CRM project we deliver comes with fixed-price quotation, weekly
              staging demos for your sales team to review, WhatsApp and email integration,
              mobile app for field sales reps, real-time management dashboards, deployment on
              your cloud, and full source code ownership on handover. Zero lock-in. Zero
              surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container-nnc">
          <span className="section-tag">What We Build</span>
          <h2 className="heading-h2">Sales CRM Software Mysore Services We Offer</h2>
          <p className="lead-text">
            Every sales CRM capability delivered by our in-house engineering team.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'Sales Pipeline Management', description: 'Custom pipeline stages, drag-and-drop deal movement, stage-wise conversion metrics and bottleneck analysis.' },
              { title: 'Lead Capture & Scoring', description: 'Auto-capture leads from website, Facebook, Google Ads, WhatsApp, phone and email with automatic scoring and assignment.' },
              { title: 'Quotation & Proposal', description: 'Templated quotation builder, approval workflows, version tracking and automated follow-up reminders.' },
              { title: 'Sales Forecasting', description: 'Weighted pipeline forecasting, revenue projections, rep-level targets and real-time variance tracking.' },
              { title: 'Commission Tracking', description: 'Custom commission rules, tier-based payouts, rep and manager dashboards, and automated monthly calculations.' },
              { title: 'Mobile Sales App', description: 'Companion mobile app for field sales reps with offline mode, check-in tracking and instant quotation generation.' },
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
        heading="Why Sales CRM Software Mysore Teams Choose NNC"
        subheading="Six operating facts that separate custom CRM built by NNC from subscription tools like Zoho and Salesforce."
        items={whyUsItems}
      />

      <ProcessSteps heading="Six Steps. Your Approval At Every Stage." items={processSteps} />

      <TechStack technologies={technologies} />

      <Industries />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">Case Studies</span>
          <h2 className="heading-h2">Real Sales CRM Projects. Measured Outcomes.</h2>
          <p className="lead-text">Sales CRM software Mysore projects delivered by our in-house team.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                client: 'Vijaya Home Services',
                sector: 'Services Sales CRM',
                headline: '340% Booking Growth',
                stack: 'React · Node · AWS',
                description: 'Sales CRM with lead capture, auto-assignment, quotation and commission tracking. 340% growth in 6 months.',
                metrics: ['340% Growth', 'Auto Assign', 'Commissions', '8wk Build'],
              },
              {
                client: 'Real Estate Firm',
                sector: 'Property Sales CRM',
                headline: 'Deal Pipeline Platform',
                stack: 'Next JS · PostgreSQL',
                description: 'Sales CRM for property inventory, buyer matching, site visits, broker commissions and deal pipeline tracking.',
                metrics: ['Inventory', 'Buyer Match', 'WhatsApp', '12wk Build'],
              },
              {
                client: 'Coaching Institute',
                sector: 'Enrolment Sales CRM',
                headline: 'Multi-Campus Sales CRM',
                stack: 'Next JS · MongoDB',
                description: 'Sales CRM tracking enquiries, counsellor assignments, fees, enrolments and follow-ups across campuses.',
                metrics: ['Multi-Campus', 'Fee Tracking', 'Follow-ups', '10wk Build'],
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

      <FAQ heading="Sales CRM Software Mysore: Questions Answered" items={faqItems} />

      <CTABand
        heading="Ready To Build Custom Sales CRM Software Mysore Teams Will Love?"
        subheading="Tell us about your sales process. We come back with clear scope, timeline and fixed-price quote within 24 hours."
      />

      <Footer />
    </>
  );
}
