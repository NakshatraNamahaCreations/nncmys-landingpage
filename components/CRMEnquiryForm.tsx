'use client';

import { useState } from 'react';

interface CRMEnquiryFormProps {
  serviceType: string;
  heading?: string;
  subheading?: string;
}

export default function CRMEnquiryForm({
  serviceType,
  heading = 'Get Your Free CRM Quote',
  subheading = 'Response within 2 working hours. NDA available on request.',
}: CRMEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: serviceType,
      crm_type: formData.get('crm_type'),
      team_size: formData.get('team_size'),
      brief: formData.get('brief'),
    };

    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-xl shadow-form text-center" id="enquiry">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-navy text-2xl font-bold mb-3">Thank You!</h3>
        <p className="text-slate-500 mb-4">
          Our CRM specialists will reach out within 2 working hours with a fixed-price quote.
        </p>
        <p className="text-sm text-slate-400">
          Urgent?{' '}
          <a href="tel:+919900566466" className="text-sky-med font-semibold">
            Call +91 99005 66466
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-7 rounded-xl shadow-form" id="enquiry">
      <h3 className="text-navy text-xl font-bold mb-1.5">{heading}</h3>
      <p className="text-slate-500 text-xs mb-4">{subheading}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name *"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky"
        />
        <select
          name="crm_type"
          required
          defaultValue=""
          className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky bg-white"
        >
          <option value="" disabled>CRM Requirement *</option>
          <option value="sales">Sales CRM</option>
          <option value="service">Customer Service CRM</option>
          <option value="marketing">Marketing Automation CRM</option>
          <option value="lead">Lead Management CRM</option>
          <option value="industry">Industry-Specific CRM</option>
          <option value="full">Full Enterprise CRM</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>
        <select
          name="team_size"
          required
          defaultValue=""
          className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky bg-white"
        >
          <option value="" disabled>Team Size *</option>
          <option value="1-10">1–10 users</option>
          <option value="11-50">11–50 users</option>
          <option value="51-200">51–200 users</option>
          <option value="200+">200+ users</option>
        </select>
        <textarea
          name="brief"
          rows={3}
          placeholder="Brief about your CRM needs"
          className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky resize-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-navy hover:bg-sky-med text-white font-bold py-3.5 rounded-md text-sm transition-colors disabled:opacity-60"
        >
          {loading ? 'Submitting...' : 'Request Free Quote →'}
        </button>
        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
          <span>✓ No spam</span>
          <span>✓ 2hr response</span>
          <span>✓ Fixed price</span>
        </div>
      </form>
    </div>
  );
}
