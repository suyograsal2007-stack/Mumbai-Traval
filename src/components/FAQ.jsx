import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/travelData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-20 bg-[#07131d] text-white border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about booking, Mumbai departures, and Himalayan travel essentials.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#0b1e2d] rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors"
                >
                  <span className="flex-1">{faq.q}</span>
                  <div className={`p-1.5 rounded-full bg-white/5 text-amber-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-amber-400/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp direct help card */}
        <div className="mt-10 p-5 rounded-2xl bg-[#0b1e2d] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have a specific question not answered here?</div>
              <div className="text-xs text-slate-400">Chat with our Mumbai travel desk specialists 7 days a week (9 AM - 9 PM)</div>
            </div>
          </div>
          <a
            href="https://wa.me/919820012345?text=Namaste!%20I%20have%20a%20query%20about%20a%20tour%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
