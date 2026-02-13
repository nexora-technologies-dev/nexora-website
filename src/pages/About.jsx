import React from "react";

export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">About Nexora Technologies</h2>
      <p className="text-slate-300">
        Nexora Technologies is a web development company focused on building modern, fast, and reliable websites for
        startups, small businesses, and professionals. We combine clean design with strong engineering practices.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60">
          <h3 className="font-semibold text-xl">Vision</h3>
          <p className="text-slate-300 mt-2">
            To become a trusted web partner for startups and SMEs by creating high-performance digital experiences
            that improve brand presence and business growth.
          </p>
        </div>
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60">
          <h3 className="font-semibold text-xl">Mission</h3>
          <p className="text-slate-300 mt-2">
            We design and develop secure, user-friendly websites and web apps, and provide reliable support -
            with a data-driven mindset inspired by our Data Science & AI major.
          </p>
        </div>
      </div>
    </div>
  );
}
