import React from "react";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm transition ${
    isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-900 hover:text-white"
  }`;

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Nexora Logo" className="h-9 w-9 rounded-lg bg-slate-900 object-cover" />
          <div>
            <div className="font-semibold leading-tight">Nexora Technologies</div>
            <div className="text-xs text-slate-400">Web Development • Data-Driven • AI-ready</div>
          </div>
        </div>

        <nav className="flex items-center gap-1">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/team" className={linkClass}>Team</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
