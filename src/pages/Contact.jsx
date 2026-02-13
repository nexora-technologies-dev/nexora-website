import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you. Your inquiry has been recorded. We will follow up shortly.");
  };

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <p className="text-slate-300 max-w-4xl">
          Share your project goals, timeline, and scope. We will review your request and get back with a structured
          response and next-step proposal.
        </p>
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 lg:col-span-1 space-y-6">
          <div>
            <div className="text-xs tracking-widest uppercase text-slate-400">Engagement</div>
            <div className="mt-2 text-lg font-semibold">Project Onboarding</div>
            <p className="mt-2 text-sm text-slate-300">
              Initial discussions focus on objectives, required features, and delivery milestones.
            </p>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase text-slate-400">Availability</div>
            <div className="mt-2 text-sm text-slate-300">Monday to Saturday</div>
            <div className="text-sm text-slate-300">09:00 - 18:00 (PKT)</div>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase text-slate-400">Response Window</div>
            <div className="mt-2 text-sm text-slate-300">Typically within 24 business hours</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 lg:col-span-2 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"
              placeholder="Full Name"
              required
            />
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"
              placeholder="Company Name"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"
              placeholder="Work Email"
              type="email"
              required
            />
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"
              placeholder="Phone Number"
              type="tel"
            />
          </div>
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"
            placeholder="Project Type (Website, Landing Page, Web App)"
            required
          />
          <textarea
            className="min-h-[140px] w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"
            placeholder="Project brief, requirements, and target timeline"
            required
          />
          <button className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Submit Inquiry
          </button>
          {status && <div className="text-sm text-cyan-200">{status}</div>}
        </form>
      </section>
    </div>
  );
}
