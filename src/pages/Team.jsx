import React from "react";

const team = [
  {
    name: "Rehan",
    role: "Group Leader | Frontend Engineering and Project Coordination",
    summary: "Leads architecture decisions, sprint priorities, and delivery alignment across the team.",
  },
  {
    name: "Faraz",
    role: "UI and UX Design Lead",
    summary: "Designs visual systems, page structures, and content hierarchy for clarity and conversion.",
  },
  {
    name: "Saeed",
    role: "Quality Assurance and Documentation",
    summary: "Maintains test coverage, review checklists, and technical documentation quality.",
  },
  {
    name: "Zeeshan",
    role: "Deployment and Maintenance",
    summary: "Manages deployment workflows, release checks, and post-launch technical stability.",
  },
];

export default function Team() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Team</h2>
        <p className="text-slate-300 max-w-4xl">
          Our team combines design, engineering, quality control, and delivery operations to execute projects
          efficiently and maintain professional standards from planning to launch.
        </p>
      </section>

      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {team.map((m) => (
          <article key={m.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-300 font-semibold">
              {m.name.charAt(0)}
            </div>
            <div className="font-semibold text-xl mt-4">{m.name}</div>
            <div className="text-sm text-cyan-300 mt-1">{m.role}</div>
            <p className="text-sm text-slate-300 mt-3">{m.summary}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7 md:p-8">
        <h3 className="text-2xl font-semibold">How We Collaborate</h3>
        <p className="mt-3 text-slate-300">
          We run focused weekly planning, transparent progress reviews, and practical QA gates to ensure high delivery
          confidence. This keeps execution fast while preserving quality standards on every release.
        </p>
      </section>
    </div>
  );
}
