import React from "react";
import { NavLink } from "react-router-dom";

const capabilities = [
  "Strategic UI and UX architecture",
  "Mobile-first responsive development",
  "Performance optimization and Core Web Vitals focus",
  "Scalable component-based frontend codebase",
  "SEO-oriented technical structure",
  "Post-launch support and iteration",
];

const serviceHighlights = [
  {
    title: "Corporate Websites",
    desc: "Authority-focused websites that clearly communicate your value and improve lead quality.",
  },
  {
    title: "Product Landing Pages",
    desc: "Conversion-driven pages for campaigns, ads, and product launches with measurable outcomes.",
  },
  {
    title: "Custom Web Applications",
    desc: "Internal tools, dashboards, and client portals engineered for reliability and growth.",
  },
];

const workflow = [
  { step: "01", title: "Discovery", desc: "We align on business goals, user needs, and measurable KPIs." },
  { step: "02", title: "Design", desc: "We produce structure, visual direction, and user flow before implementation." },
  { step: "03", title: "Build", desc: "We develop secure, maintainable, and high-performance frontend experiences." },
  { step: "04", title: "Launch", desc: "We run QA, optimize, and deploy with a reliable handover process." },
];

export default function Home() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="space-y-16">
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-wider text-slate-300">
            Professional Web Development Studio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Digital experiences engineered for growth.
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Nexora Technologies builds modern websites and web products that combine clean brand presentation,
            high-speed performance, and clear conversion pathways.
          </p>
          <div className="flex flex-wrap gap-3">
            <NavLink
              to="/services"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Services
            </NavLink>
            <NavLink
              to="/contact"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:bg-slate-900"
            >
              Start a Project
            </NavLink>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {[
              { label: "Projects Delivered", value: "30+" },
              { label: "Industries Covered", value: "10+" },
              { label: "Avg. Load Target", value: "<2s" },
              { label: "Support Model", value: "Ongoing" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="text-2xl font-semibold text-cyan-300">{item.value}</div>
                <div className="text-xs text-slate-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/70 shadow-2xl shadow-slate-950">
          <img
            src={`${baseUrl}banner.png`}
            alt="Nexora Banner"
            className="w-full h-80 object-cover"
          />
          <div className="p-6 space-y-4">
            <div className="font-semibold text-lg">Core Delivery Capabilities</div>
            <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Solutions for business stages that matter</h2>
            <p className="text-slate-300 mt-2 max-w-3xl">
              From early-stage visibility to operational web tools, we help companies establish a strong digital foundation.
            </p>
          </div>
          <NavLink to="/about" className="text-sm text-cyan-300 hover:text-cyan-200">
            Learn about our approach
          </NavLink>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {serviceHighlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7">
              <div className="text-lg font-semibold">{item.title}</div>
              <div className="mt-3 text-slate-300">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Our execution framework</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {workflow.map((item) => (
            <div key={item.step} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="text-xs tracking-widest text-cyan-300">{item.step}</div>
              <div className="mt-2 text-xl font-semibold">{item.title}</div>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-3xl font-bold">Ready to modernize your online presence?</h3>
            <p className="mt-3 text-slate-300">
              Partner with Nexora Technologies for structured delivery, high-quality engineering, and long-term reliability.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <NavLink
              to="/contact"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Book Consultation
            </NavLink>
            <NavLink
              to="/services"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:bg-slate-800"
            >
              Review Services
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
