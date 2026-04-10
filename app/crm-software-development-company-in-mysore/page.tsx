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

// PRIMARY KEYWORD: "crm software development company in mysore"

const PAGE_URL =
  'https://nakshatranamahacreations.com/crm-software-development-company-in-mysore';

export const metadata: Metadata = {
  title: 'CRM Software Development Company in Mysore | Custom CRM Platforms | NNC',
  description:
    'Nakshatra Namaha Creations is the top CRM software development company in Mysore. Build tailored CRM platforms that replace Zoho, Salesforce & HubSpot. 565+ projects, 35+ in-house developers, fixed price, full source code ownership.',
  keywords: [
    'crm software development company in mysore',
    'crm development mysore',
    'custom crm software mysore',
    'crm platform development mysore',
    'bespoke crm development mysore',
    'enterprise crm software mysore',
    'crm developers mysore',
    'saas crm development mysore',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'CRM Software Development Company in Mysore | NNC',
    description:
      'Top CRM software development company in Mysore. Build tailored CRM platforms. 565+ projects delivered.',
    images: ['/og-crm-software-mysore.jpg'],
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM Software Development Company in Mysore',
    description: 'Top CRM software development company in Mysore. 565+ projects.',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Mysore, Karnataka',
    'geo.position': '12.2958;76.6394',
    ICBM: '12.2958, 76.6394',
  },
};

export default function CRMSoftwareDevelopmentCompanyMysorePage() {
  const localBusinessSchema = buildLocalBusinessSchema({
    name: 'NNC - CRM Software Development Company in Mysore',
    description:
      'Nakshatra Namaha Creations is the leading CRM software development company in Mysore building custom CRM platforms, sales automation software, and enterprise customer relationship management systems since 2015.',
    url: PAGE_URL,
  });

  const serviceSchema = buildServiceSchema({
    serviceType: 'CRM Software Development Company in Mysore',
    description:
      'End-to-end CRM software development services in Mysore. Custom CRM platforms, sales CRM, customer service CRM, lead management and enterprise CRM for businesses across industries.',
    offers: [
      'Custom CRM Software Development',
      'Sales CRM Development',
      'Customer Service CRM',
      'Lead Management CRM',
      'Enterprise CRM Platforms',
      'SaaS CRM Development',
    ],
  });

  const faqItems = [
    {
      question: 'Which is the best CRM software development company in Mysore?',
      answer:
        'Nakshatra Namaha Creations is the leading CRM software development company in Mysore with 10+ years of experience, 565+ projects delivered, and 35+ in-house developers building custom CRM platforms for real estate, healthcare, manufacturing, education and legal sectors.',
    },
    {
      question: 'How much does a CRM software development company in Mysore charge?',
      answer:
        'A quality CRM software development company in Mysore typically charges ₹2 lakh to ₹20 lakh as a one-time investment with no recurring license fees. Final pricing depends on modules, user count, integrations and automation complexity.',
    },
    {
      question: 'Should I build a custom CRM or use Zoho, Salesforce, HubSpot?',
      answer:
        'Off-the-shelf CRMs work for generic workflows but become expensive and restrictive as teams grow beyond 15-20 users. A custom CRM built for your exact workflow eliminates per-user license fees, removes feature limitations, and delivers lower total cost of ownership after year 2.',
    },
    {
      question: 'How long does CRM software development take?',
      answer:
        'A basic custom CRM takes 8-12 weeks, a mid-sized CRM with multiple modules takes 12-20 weeks, and enterprise-grade CRM platforms with advanced automation take 20-36 weeks with agile milestone-based delivery.',
    },
    {
      question: 'Do I get the source code of the CRM?',
      answer:
        'Yes. Upon delivery, you receive complete source code, database schema, technical documentation and full intellectual property rights. Your custom CRM is 100% yours forever with zero lock-in.',
    },
    {
      question: 'Can you integrate the CRM with our existing ERP or accounting software?',
      answer:
        'Yes. We specialise in integrating custom CRMs with Tally ERP, SAP, Oracle, Zoho Books, QuickBooks, Razorpay, WhatsApp Business API, Twilio, email marketing platforms and custom third-party APIs.',
    },
  ];

  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema(
    'CRM Software Development Company in Mysore',
    PAGE_URL,
  );

  const whyUsItems = [
    {
      num: '01',
      title: 'Dedicated CRM Engineers',
      description:
        'Specialists in multi-tenant SaaS architecture, role-based access control, workflow automation and enterprise CRM patterns not generalist web developers.',
    },
    {
      num: '02',
      title: 'No Recurring License Fees',
      description:
        'One-time development investment. No per-user subscription traps. Add unlimited users as your team grows zero extra cost.',
    },
    {
      num: '03',
      title: 'Full Source Code Ownership',
      description:
        'Complete source code, database schema, admin credentials and documentation handed over on delivery. No vendor lock-in ever.',
    },
    {
      num: '04',
      title: 'Built On Modern Tech Stack',
      description:
        'React, Next JS, Node JS, MongoDB, PostgreSQL, AWS proven, scalable, future-ready stack that any developer can maintain.',
    },
    {
      num: '05',
      title: 'Enterprise Integrations',
      description:
        'Seamless integration with your existing ERP, accounting, telephony, WhatsApp, payment gateways and custom business systems.',
    },
    {
      num: '06',
      title: '565+ Projects Delivered',
      description:
        'Operating since 2015. 87 verified Google reviews. 4.9-star rating. A verifiable track record, not marketing claims.',
    },
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', description: 'Understand sales process, workflows and pain points.', duration: 'Week 1' },
    { num: '02', title: 'Fixed Quote', description: 'Module list, timeline, pricing agreed in writing.', duration: 'Week 1-2' },
    { num: '03', title: 'Architecture', description: 'DB schema, workflow diagrams, UI designs approved.', duration: 'Week 2-4' },
    { num: '04', title: 'Development', description: 'Agile sprints with weekly module-level client reviews.', duration: 'Week 4-14' },
    { num: '05', title: 'UAT & Training', description: 'User testing, data migration and team training sessions.', duration: 'Week 14-16' },
    { num: '06', title: 'Go-Live & Support', description: 'Deployment, launch and defined SLA post-launch support.', duration: 'Week 16+' },
  ];

  const technologies = [
    { name: 'React JS', category: 'Frontend' },
    { name: 'Next JS', category: 'Framework' },
    { name: 'Node JS', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
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
                CRM Software Development Company in <span className="text-sky">Mysore</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-7 leading-relaxed">
                Nakshatra Namaha Creations is the leading CRM software development
                company in Mysore building tailored customer relationship management
                platforms that replace Zoho, Salesforce and HubSpot. Zero recurring
                license fees. Full source code ownership. 565+ projects delivered.
              </p>
              <StatsBar />
              <TrustBadges />
              <div className="flex flex-wrap gap-4">
                <a href="#enquiry" className="btn-primary">Get Free CRM Quote</a>
                <a href="tel:+919900566466" className="btn-secondary">Call +91 99005 66466</a>
              </div>
            </div>
            <CRMEnquiryForm
              serviceType="CRM Software Development Mysore"
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
          <h2 className="heading-h2">The Trusted CRM Software Development Company in Mysore</h2>
          <p className="lead-text">
            Custom CRM platforms built around your exact workflow not generic
            software you have to bend your business to fit.
          </p>
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              Off-the-shelf CRM platforms like Zoho, Salesforce, HubSpot and Freshworks are
              designed for the average business. But your business is not average. Every
              growing enterprise has unique sales workflows, customer lifecycles, approval
              hierarchies, commission structures, reporting requirements and integration needs
              that generic CRMs simply cannot accommodate without expensive add-ons, per-user
              license fees that compound as you scale, and frustrating feature limitations that
              force you to change how your team works.
            </p>
            <p>
              Nakshatra Namaha Creations is the CRM software development company in Mysore
              businesses turn to when the off-the-shelf option stops making sense. Our in-house
              engineering team builds custom CRM platforms that mirror your exact sales process,
              automate your specific workflows, integrate seamlessly with your existing tools,
              and scale without per-user licensing constraints. You own the source code, the
              data, and the platform. Forever.
            </p>
            <p>
              We have delivered custom CRM systems for real estate firms, healthcare networks,
              manufacturing companies, coaching institutes, legal practices, logistics operators,
              automotive service franchises and e-commerce businesses. Whether you need a simple
              lead management tool for a 10-person sales team or a multi-tenant SaaS CRM platform
              serving hundreds of enterprise users, our 35+ in-house developers have shipped
              something very similar in the past decade.
            </p>
            <p>
              Every CRM project comes with a fixed-price quotation, module-level milestone reviews,
              structured UAT and training, deployment on your preferred cloud (AWS, Google Cloud,
              Azure or your own servers), and complete source code handover. No lock-in. No
              monthly fees. No surprise invoices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container-nnc">
          <span className="section-tag">What We Build</span>
          <h2 className="heading-h2">Services From Our CRM Software Development Company in Mysore</h2>
          <p className="lead-text">
            Every type of custom CRM platform delivered by our specialist engineering team.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'Sales CRM Development', description: 'Lead capture, pipeline management, quotations, follow-up automation and sales forecasting built around your exact process.' },
              { title: 'Customer Service CRM', description: 'Ticket management, SLA tracking, knowledge base, omnichannel support and agent performance dashboards.' },
              { title: 'Lead Management Systems', description: 'Multi-source lead capture, auto-scoring, intelligent assignment and interaction tracking. No more leaked leads.' },
              { title: 'Real Estate CRM', description: 'Property management, buyer matching, site visit scheduling, broker commission tracking and deal pipelines.' },
              { title: 'Healthcare CRM', description: 'Patient relationship management, appointment workflows, follow-up automation, referral tracking and HIS integration.' },
              { title: 'Enterprise SaaS CRM', description: 'Multi-tenant CRM platforms with role-based access, custom modules, advanced reporting and ERP integration.' },
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
        heading="Why We Are The Preferred CRM Software Development Company in Mysore"
        subheading="Six operating facts that separate NNC from subscription CRMs and generalist development vendors."
        items={whyUsItems}
      />

      <ProcessSteps heading="Six Steps. Your Approval At Every Stage." items={processSteps} />

      <TechStack technologies={technologies} />

      <Industries />

      <section className="py-20 bg-white">
        <div className="container-nnc">
          <span className="section-tag">Case Studies</span>
          <h2 className="heading-h2">Real CRM Platforms. Measured Outcomes.</h2>
          <p className="lead-text">Representative CRM projects built by our in-house team.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                client: '3M Car Care',
                sector: 'Automotive SaaS CRM',
                headline: 'Multi-Tenant Franchise CRM',
                stack: 'Next JS · Node · MongoDB',
                description: 'Multi-tenant SaaS CRM for car care franchise with GST invoicing, subscription billing and Razorpay integration.',
                metrics: ['Multi-Tenant', 'GST Invoicing', 'Razorpay Live', '10wk Build'],
              },
              {
                client: 'Vijaya Home Services',
                sector: 'Service Business CRM',
                headline: '340% Business Growth',
                stack: 'React · Node · AWS',
                description: 'End-to-end CRM with lead capture, booking engine, vendor management and admin dashboards. 340% growth in 6 months.',
                metrics: ['340% Growth', '0 Phone Orders', 'Admin Dashboard', '8wk Build'],
              },
              {
                client: 'Coaching Institute',
                sector: 'Education CRM',
                headline: 'Student Lifecycle CRM',
                stack: 'Next JS · MongoDB',
                description: 'CRM tracking leads, enrolments, fees, batches and student progress across multiple campuses with parent communication.',
                metrics: ['Multi-Campus', 'Fee Tracking', 'Parent App', '12wk Build'],
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

      <FAQ heading="CRM Software Development Company in Mysore: Questions Answered" items={faqItems} />

      <CTABand
        heading="Ready To Hire The Best CRM Software Development Company in Mysore?"
        subheading="Tell us about your CRM requirements. We come back with clear scope, timeline and fixed-price quote within 24 hours."
      />

      <Footer />
    </>
  );
}
