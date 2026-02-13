import React from "react";

const values = [
  {
    title: "Clarity in Communication",
    desc: "We define scope, milestones, and acceptance criteria early so every stakeholder has confidence in progress.",
  },
  {
    title: "Engineering Discipline",
    desc: "Our implementations prioritize maintainability, performance standards, and secure coding practices.",
  },
  {
    title: "Business Relevance",
    desc: "Every design and technical choice is aligned with measurable commercial outcomes.",
  },
];

const strengths = [
  "Frontend architecture with React and modern tooling",
  "Conversion-focused UI composition and content structure",
  "Performance auditing and optimization on every release",
  "Collaboration-friendly project documentation",
];

export default function About() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold">About Nexora Technologies</h2>
        <p className="mt-4 text-slate-300 max-w-4xl">
          Nexora Technologies is a web engineering team focused on building digital products that are practical,
          stable, and growth-oriented. We combine product strategy, modern frontend architecture, and disciplined
          delivery standards to help organizations scale with confidence.
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
          <h3 className="text-xl font-semibold">Vision</h3>
          <p className="mt-3 text-slate-300">
            To become a trusted long-term web partner for startups and small businesses by delivering digital products
            that improve visibility, customer confidence, and conversion efficiency.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
          <h3 className="text-xl font-semibold">Mission</h3>
          <p className="mt-3 text-slate-300">
            We design and develop secure, user-centered websites and web applications while maintaining strong
            technical quality and continuous support after launch.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h3 className="text-2xl font-semibold">Core Values</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h4 className="font-semibold text-lg">{value.title}</h4>
              <p className="mt-2 text-slate-300 text-sm">{value.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
          <h3 className="text-xl font-semibold">Why Teams Work With Us</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            {strengths.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
          <h3 className="text-xl font-semibold">Delivery Transparency</h3>
          <p className="mt-3 text-slate-300">
            Each engagement follows a documented workflow with clear ownership, practical timelines, and milestone
            reviews. This approach reduces ambiguity and keeps execution predictable from kickoff to launch.
          </p>
          <p className="mt-3 text-slate-300">
            We keep clients involved through structured updates and ensure every release is production-ready.
          </p>
        </div>
      </section>
    </div>
  );
}
