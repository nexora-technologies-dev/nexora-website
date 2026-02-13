import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="mt-16 border-t border-slate-800/90 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <img src={`${baseUrl}lockup.png`} alt="Nexora Technologies" className="h-8 w-auto object-contain" />
          <p className="text-sm text-slate-400">
            Professional web solutions for startups and growing businesses with a focus on speed, stability, and conversion.
          </p>
        </div>
        <div className="space-y-3">
          <div className="font-semibold text-sm uppercase tracking-wide text-slate-300">Quick Links</div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            <NavLink to="/" className="hover:text-white">Home</NavLink>
            <NavLink to="/about" className="hover:text-white">About</NavLink>
            <NavLink to="/services" className="hover:text-white">Services</NavLink>
            <NavLink to="/team" className="hover:text-white">Team</NavLink>
            <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
          </div>
        </div>
        <div className="space-y-3">
          <div className="font-semibold text-sm uppercase tracking-wide text-slate-300">Working Model</div>
          <p className="text-sm text-slate-400">
            Discovery, design, development, QA, and handover with transparent weekly progress updates.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-slate-500">
          Copyright {new Date().getFullYear()} Nexora Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
