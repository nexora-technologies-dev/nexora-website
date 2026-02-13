import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Nexora Technologies. All rights reserved.</div>
        <div className="text-slate-500">Built for TIC Startup-2025 Phase-1</div>
      </div>
    </footer>
  );
}
