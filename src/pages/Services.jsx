import React from "react";

const services = [
  {
    title: "Custom Business Websites",
    points: ["Responsive design", "Fast loading", "Modern UI/UX", "SEO-friendly structure"],
  },
  {
    title: "Landing Pages (Lead Generation)",
    points: ["High-converting layout", "Contact forms", "Analytics-ready", "A/B testing support (future)"],
  },
  {
    title: "E-Commerce Stores",
    points: ["Product catalog", "Cart & checkout", "Payment integration", "Admin panel support"],
  },
  {
    title: "Web Applications",
    points: ["Dashboards", "Admin panels", "Client portals", "Secure authentication (optional)"],
  },
  {
    title: "Maintenance & Optimization",
    points: ["Performance tuning", "Security updates", "Content updates", "Basic SEO improvements"],
  },
];

export default function Services() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Services</h2>
      <p className="text-slate-300">
        We offer 3-5+ services as required in Phase-1 company identity setup.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div key={s.title} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60">
            <div className="font-semibold text-xl">{s.title}</div>
            <ul className="text-slate-300 mt-3 list-disc pl-5 space-y-1">
              {s.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
