import React from "react";

const team = [
  { name: "Group Leader", role: "Frontend + Project Coordination", note: "Add real name here" },
  { name: "Member 2", role: "UI/UX + Content", note: "Add real name here" },
  { name: "Member 3", role: "QA + Deployment + Documentation", note: "Add real name here" },
];

export default function Team() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Team</h2>
      <p className="text-slate-300">
        A Team page is required for the Phase-1 website.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {team.map((m) => (
          <div key={m.name} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60">
            <div className="font-semibold text-lg">{m.name}</div>
            <div className="text-slate-300 mt-1">{m.role}</div>
            <div className="text-xs text-slate-500 mt-3">{m.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
