import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("✅ Message ready. Connect this to Formspree or your email later.");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-slate-300">
        Contact page with email/contact form is required.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-2">
          <div className="font-semibold">Email</div>
          <div className="text-slate-300">nexoratechnologies@gmail.com (replace with your real)</div>
          <div className="text-xs text-slate-500 mt-4">
            Tip: For submission, even a basic working form + email is acceptable for Phase-1.
          </div>
        </div>

        <form onSubmit={onSubmit} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-3">
          <input className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800"
            placeholder="Your Name" required />
          <input className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800"
            placeholder="Your Email" type="email" required />
          <textarea className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 min-h-[120px]"
            placeholder="Message" required />
          <button className="w-full px-4 py-3 rounded-xl bg-white text-slate-950 font-semibold hover:opacity-90">
            Send Message
          </button>
          {status && <div className="text-sm text-slate-300">{status}</div>}
        </form>
      </div>
    </div>
  );
}
