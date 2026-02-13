import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded-lg text-sm font-medium transition ${
    isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-900 hover:text-white"
  }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={`${baseUrl}logo.jpg`} alt="Nexora Logo" className="h-10 w-10 rounded-xl border border-slate-700 bg-slate-900 object-cover" />
          <div>
            <img src={`${baseUrl}lockup.png`} alt="Nexora Technologies" className="h-7 w-auto object-contain" />
            <div className="text-xs text-slate-400">Web Development | Data-Driven | AI Ready</div>
          </div>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/team" className={linkClass}>Team</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-800/80">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
            <NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
            <NavLink to="/services" className={linkClass} onClick={closeMenu}>Services</NavLink>
            <NavLink to="/team" className={linkClass} onClick={closeMenu}>Team</NavLink>
            <NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
