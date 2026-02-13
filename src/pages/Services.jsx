import React from "react";

const services = [
  {
    title: "Custom Corporate Websites",
    points: ["Responsive interface systems", "High-speed frontends", "Content architecture", "Technical SEO baseline"],
  },
  {
    title: "Landing Pages for Campaigns",
    points: ["Conversion-first layouts", "Lead capture forms", "Analytics-ready tracking", "Performance-led iteration"],
  },
  {
    title: "E-Commerce Experience",
    points: ["Catalog and information architecture", "Checkout UX optimization", "Payment integration support", "Storefront maintenance"],
  },
  {
    title: "Business Web Applications",
    points: ["Operational dashboards", "Admin and reporting panels", "Role-based interfaces", "Scalable component architecture"],
  },
  {
    title: "Maintenance and Optimization",
    points: ["Performance audits", "Security patch workflow", "Feature and content updates", "Release support"],
  },
];

const process = [
  { title: "Scoping", desc: "Requirement analysis, project roadmap, and timeline definition." },
  { title: "UI Planning", desc: "Wireframes, visual system, and user-flow optimization." },
  { title: "Development", desc: "Component-driven implementation with QA checkpoints." },
  { title: "Launch & Support", desc: "Deployment assistance, monitoring, and post-launch refinements." },
];

export default function Services() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
        <p className="text-slate-300 max-w-4xl">
          We deliver complete web solutions from brand presence websites to custom product interfaces.
          Every service is structured around speed, usability, and measurable business goals.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-5">
        {services.map((s) => (
          <article key={s.title} className="p-7 rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="font-semibold text-xl">{s.title}</div>
            <ul className="text-slate-300 mt-4 space-y-2">
              {s.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-5">
        <h3 className="text-2xl font-semibold">Delivery Process</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {process.map((item, index) => (
            <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="text-xs tracking-wider text-cyan-300">STEP {index + 1}</div>
              <h4 className="mt-2 font-semibold text-lg">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
