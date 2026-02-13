import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
            Website Development Company
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build a modern website that converts visitors into customers.
          </h1>
          <p className="text-slate-300 text-lg">
            Nexora Technologies delivers fast, responsive, and professional websites - powered by modern
            tech and a data-driven mindset from our Data Science & AI background.
          </p>
          <div className="flex gap-3">
            <NavLink
              to="/services"
              className="px-5 py-3 rounded-xl bg-white text-slate-950 font-semibold hover:opacity-90"
            >
              View Services
            </NavLink>
            <NavLink
              to="/contact"
              className="px-5 py-3 rounded-xl border border-slate-800 text-slate-200 hover:bg-slate-900"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
          <img
            src="/banner.jpg"
            alt="Nexora Banner"
            className="w-full h-72 object-cover"
          />
          <div className="p-5 space-y-2">
            <div className="font-semibold">What we deliver</div>
            <ul className="text-sm text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>✅ Clean UI/UX</li>
              <li>✅ Mobile-first design</li>
              <li>✅ Fast performance</li>
              <li>✅ SEO-ready structure</li>
              <li>✅ Secure deployment</li>
              <li>✅ Maintenance support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {[
          { title: "Business Websites", desc: "Professional sites for startups & SMEs with modern design." },
          { title: "E-Commerce Stores", desc: "Online stores with product catalog, cart, and payment integration." },
          { title: "Web Apps", desc: "Dashboards, admin panels, portals - scalable and secure." },
        ].map((c) => (
          <div key={c.title} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60">
            <div className="font-semibold text-lg">{c.title}</div>
            <div className="text-slate-300 mt-2">{c.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
