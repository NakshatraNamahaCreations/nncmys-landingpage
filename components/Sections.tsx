"use client"
// StatsBar Component
export function StatsBar() {
  return (
    <div className="flex flex-wrap gap-6 md:gap-10 mb-8">
      {[
        { num: '10+', label: 'Years In Business' },
        { num: '565+', label: 'Projects Delivered' },
        { num: '35+', label: 'In-House Team' },
        { num: '4.9★', label: 'Google Rated' },
      ].map((stat) => (
        <div key={stat.label}>
          <div className="text-3xl md:text-4xl font-extrabold text-sky block leading-none mb-1">
            {stat.num}
          </div>
          <div className="text-xs text-white/80">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// Trust Badges
export function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6 text-xs text-white/90 mb-8">
      <span className="flex items-center gap-1.5">
        <span className="text-sky">✓</span> PageSpeed 90+ Guaranteed
      </span>
      <span className="flex items-center gap-1.5">
        <span className="text-sky">✓</span> Fixed Price · No Surprises
      </span>
      <span className="flex items-center gap-1.5">
        <span className="text-sky">✓</span> Zero Outsourcing
      </span>
      <span className="flex items-center gap-1.5">
        <span className="text-sky">✓</span> 100% Source Code Ownership
      </span>
    </div>
  );
}

// Location Bar
// export function LocationBar() {
//   return (
//     <div className="bg-sky-pale border-y-2 border-sky py-4 text-center">
//       <div className="container-nnc text-sm font-semibold text-navy">
//         📍 Serving Mysore · Mysuru · Mandya · Hassan · Chamarajanagar · Kodagu · Bangalore · Across
//         Karnataka
//       </div>
//     </div>
//   );
// }
export function LocationBar() {
  const locations = [
    "Mysore",
    "Mysuru",
    "Mandya",
    "Hassan",
    "Chamarajanagar",
    "Kodagu",
    "Bangalore",
  ];

  return (
    <div className="py-6 bg-gradient-to-r from-white to-sky-50 border-y border-slate-200">
      <div className="container-nnc">

        {/* Glass Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl px-6 py-4 shadow-sm">

          {/* Left Content */}
          <div className="flex items-center gap-3 text-slate-700">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-100 text-sky-600">
              📍
            </div>
            <div>
              <div className="text-xs text-slate-500">We Operate In</div>
              <div className="text-sm md:text-base font-semibold text-slate-800">
                Key Locations Across Karnataka
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3">

            {locations.map((loc, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                {/* Dot */}
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span>

                {/* Name */}
                <span className="hover:text-sky-600 transition">
                  {loc}
                </span>
              </span>
            ))}

            {/* Highlighted Last Item */}
            <span className="ml-2 px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-full">
              Across Karnataka
            </span>

          </div>

        </div>
      </div>
    </div>
  );
}
// Why Us - 6 cards
interface WhyUsItem {
  num: string;
  title: string;
  description: string;
}

// export function WhyUs({ items, heading, subheading }: { items: WhyUsItem[]; heading: string; subheading: string }) {
//   return (
//     <section className="bg-slate-50 py-20">
//       <div className="container-nnc">
//         <span className="section-tag">Why Choose Us</span>
//         <h2 className="heading-h2">{heading}</h2>
//         <p className="lead-text">{subheading}</p>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {items.map((item) => (
//             <div
//               key={item.num}
//               className="bg-white p-7 rounded-xl border-t-4 border-sky shadow-card hover:shadow-card-hover transition-shadow"
//             >
//               <div className="text-sky-med font-extrabold text-sm mb-2">{item.num}</div>
//               <h4 className="heading-h4 text-lg">{item.title}</h4>
//               <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Process Steps

export function WhyUs({
  items,
  heading,
  subheading,
}: {
  items: WhyUsItem[];
  heading: string;
  subheading: string;
}) {
  return (
    <section className="bg-[#061b33] py-24 text-white relative overflow-hidden">
      
      {/* subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container-nnc relative z-10">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-4 inline-block">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Why Choose NNC for <br />
              <span className="text-slate-300">
                Mobile App Development in India?
              </span>
            </h2>
          </div>

          <div>
            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              {subheading}
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-slate-700/40">

          {items.map((item, index) => {
  return (
    <div
      key={item.num}
      className={`relative p-8 border-slate-700/40
        ${index % 3 !== 2 ? "lg:border-r" : ""}
        ${index < items.length - 3 ? "border-b" : ""}
        hover:bg-white/5 transition`}
    >
      {/* BIG NUMBER */}
      <div className="absolute top-4 left-6 text-[40px] font-extrabold text-white/10 z-0 pointer-events-none">
        {item.num}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 pt-12">
        <h4 className="text-lg font-semibold text-white mb-3 leading-snug">
          {item.title}
        </h4>

        <p className="text-sm text-slate-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
})}
        </div>

      </div>
    </section>
  );
}

interface ProcessItem {
  num: string;
  title: string;
  description: string;
  duration: string;
}

export function ProcessSteps({ items, heading }: { items: ProcessItem[]; heading: string }) {
  return (
    // <section className="py-20 bg-white">
    //   <div className="container-nnc">
    //     <span className="section-tag">How We Work</span>
    //     <h2 className="heading-h2">{heading}</h2>
    //     <p className="lead-text">
    //       No black boxes. You see and approve every major decision before we proceed. Weekly updates
    //       on a live staging environment you can access.
    //     </p>
    //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
    //       {items.map((step) => (
    //         <div
    //           key={step.num}
    //           className="p-5 border-l-4 border-sky bg-sky-pale rounded-md"
    //         >
    //           <div className="text-sky-med font-extrabold text-xs mb-1">{step.num}</div>
    //           <h4 className="heading-h4 text-sm">{step.title}</h4>
    //           <p className="text-xs text-slate-600 leading-relaxed mb-2">{step.description}</p>
    //           <div className="text-[10px] text-sky-med font-semibold uppercase tracking-wider">
    //             {step.duration}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-14 bg-gradient-to-b from-white to-slate-50">
  <div className="container-nnc">
    
    {/* Header */}
    <div className="max-w-2xl">
      <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm">
        How We Work
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 leading-tight">
        {heading}
      </h2>

      <p className="text-slate-600 mt-4 leading-relaxed">
        No black boxes. You see and approve every major decision before we proceed.
        Weekly updates on a live staging environment you can access.
      </p>
    </div>

    {/* Steps */}
    <div className="relative mt-14">
      
      {/* Horizontal line (desktop only) */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 z-0"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
        {items.map((step, index) => (
          <div
            key={step.num}
            className="group relative bg-white/70 backdrop-blur-lg border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Step Number Circle */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-sm mb-4 shadow-md">
              {step.num}
            </div>

            {/* Connector Dot */}
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[-12px] w-3 h-3 bg-sky-500 rounded-full"></div>

            {/* Content */}
            <h4 className="text-sm font-semibold text-slate-900 mb-2">
              {step.title}
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              {step.description}
            </p>

            <div className="text-[10px] font-semibold uppercase tracking-wider text-sky-600">
              {step.duration}
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-sky-500/10 to-blue-500/10"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}

// Tech Stack
export function TechStack({ technologies }: { technologies: { name: string; category: string }[] }) {
  return (
    // <section className="py-20 bg-white">
    //   <div className="container-nnc">
    //     <span className="section-tag">Technology Stack</span>
    //     <h2 className="heading-h2">Modern Technology. Proven in Production.</h2>
    //     <p className="lead-text">
    //       We choose the stack that fits your project not the easiest for us. React JS, Next JS
    //       and Node JS for web. React Native and Flutter for mobile.
    //     </p>
    //     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-10">
    //       {technologies.map((tech) => (
    //         <div
    //           key={tech.name}
    //           className="bg-sky-pale border border-sky rounded-md px-4 py-5 text-center"
    //         >
    //           <div className="font-bold text-navy text-sm">{tech.name}</div>
    //           <div className="text-xs text-slate-500 mt-1">{tech.category}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

<section className="py-14 bg-gradient-to-b from-white to-slate-50">
  <div className="container-nnc">

    {/* Header */}
    <div className="max-w-2xl">
      <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm">
        Technology Stack
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 leading-tight">
        Modern Technology. Proven in Production.
      </h2>

      <p className="text-slate-600 mt-4 leading-relaxed">
        We choose the stack that fits your project — not the easiest for us.
        React, Next.js, Node.js for web. React Native and Flutter for mobile.
      </p>
    </div>

    {/* Flex Layout (No Grid) */}
    <div className="mt-14 flex flex-wrap gap-4">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        >
          
          {/* Icon */}
          <div className="w-10 h-10 flex items-center justify-center rounded-md bg-sky-50 text-sky-600 font-semibold text-sm">
            {tech.name.charAt(0)}
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-800">
              {tech.name}
            </span>
            <span className="text-[11px] text-slate-500">
              {tech.category}
            </span>
          </div>

        </div>
      ))}
    </div>
  </div>
</section>
  );
}

// Industries
export function Industries() {
  const industries = [
    { name: 'Healthcare', sub: 'Clinics & Hospitals' },
    { name: 'Real Estate', sub: 'Builders & Brokers' },
    { name: 'E-commerce', sub: 'D2C & Marketplaces' },
    { name: 'Education', sub: 'EdTech & Coaching' },
    { name: 'Finance', sub: 'Fintech & Investment' },
    { name: 'Hospitality', sub: 'Hotels & Restaurants' },
    { name: 'Logistics', sub: 'Delivery & Fleet' },
    { name: 'Events', sub: 'Weddings & Corporate' },
    { name: 'Fitness', sub: 'Gyms & Sports' },
    { name: 'Manufacturing', sub: 'B2B & Industrial' },
  ];
  return (
    <section className="bg-navy text-white py-20">
      <div className="container-nnc">
        <span className="section-tag">Industries We Serve</span>
        <h2 className="heading-h2 text-white">Ten Industries. Sector-Specific Knowledge.</h2>
        <p className="lead-text text-white/80">
          Deep domain expertise across verticals not generic templates, but solutions shaped by
          real industry workflows.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="bg-sky/10 border border-sky rounded-md p-5 text-center"
            >
              <div className="font-bold text-sm">{ind.name}</div>
              <div className="text-xs text-white/70 mt-1">{ind.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Component
interface FAQItem {
  question: string;
  answer: string;
}



import { useState } from "react";

export function FAQ({ items, heading }: { items: FAQItem[]; heading: string }) {
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-50 py-24">
      <div className="container-nnc grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT - FAQ */}
        <div>
          <span className="inline-block px-4 py-1 text-xs bg-sky-100 text-sky-600 rounded-full mb-4">
            FAQ
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            {heading}
          </h2>

          <div className="mt-10 space-y-4">
            {items.map((faq, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div key={idx} className="border-b border-slate-200 pb-4">

                  {/* Question */}
                  <button
                    onClick={() =>
                      setActiveIndex(isOpen ? null : idx)
                    }
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <span className="text-base font-medium text-slate-800 group-hover:text-sky-600 transition">
                      {faq.question}
                    </span>

                    <span className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 group-hover:border-sky-500 group-hover:text-sky-500 transition">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-slate-600 leading-relaxed pr-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="bg-[#0B1B3A] text-white rounded-2xl p-8 shadow-xl">

          <span className="text-xs text-sky-400 uppercase tracking-wider">
            Get a free quote
          </span>

          <h3 className="text-xl font-semibold mt-2">
            Mobile App Development in India
          </h3>

          <p className="text-sm text-slate-300 mt-2 mb-6">
            Tell us your requirements. We'll respond within 24 hours with scope,
            timeline and fixed price.
          </p>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="+91 99005 66466"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-sky-500"
            />

            <input
              type="email"
              placeholder="info@nakshatranamahacreations.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-sky-500"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name *"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-sky-500"
              />
              <input
                type="text"
                placeholder="Phone *"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-sky-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email address *"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-sky-500"
            />

            <textarea
              rows={4}
              placeholder="Tell us about your mobile app development requirements..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-sky-500"
            ></textarea>

            <button className="w-full bg-sky-500 hover:bg-sky-600 transition rounded-lg py-3 font-semibold">
              Send Enquiry →
            </button>

            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>✓ No spam</span>
              <span>✓ 24hr response</span>
              <span>✓ Fixed price</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// CTA Band
export function CTABand({ heading, subheading }: { heading: string; subheading: string }) {
  return (
    <section className="bg-gradient-to-br from-navy to-slate-900 text-white py-16 text-center">
      <div className="container-nnc">
        <h2 className="heading-h2 text-white">{heading}</h2>
        <p className="text-lg text-white/85 mb-8 max-w-3xl mx-auto">{subheading}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#enquiry" className="btn-primary">
            Get Free Quote
          </a>
          <a href="tel:+919900566466" className="btn-secondary">
            Call +91 99005 66466
          </a>
        </div>
      </div>
    </section>
  );
}
