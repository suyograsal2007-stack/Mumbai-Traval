import React from 'react';
import { 
  Building2, 
  Mountain, 
  ShieldCheck, 
  Award, 
  Headphones, 
  CheckCircle2, 
  MapPin, 
  HeartHandshake 
} from 'lucide-react';
import { STATS } from '../data/travelData';

export default function AboutAndTrust() {
  const reasons = [
    {
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      title: "Mumbai-Based Headquarters",
      desc: "Registered office in Nariman Point, South Mumbai. Seamless doorstep consultation, personalized flight bookings, and reliable local accountability."
    },
    {
      icon: <Mountain className="w-6 h-6 text-sky-400" />,
      title: "Devbhoomi Mountain Expertise",
      desc: "Local operations hubs in Dehradun & Rishikesh. Government-licensed Garhwali & Kumaoni drivers certified for tricky Himalayan terrains."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "100% Verified Stays & Cabs",
      desc: "Every hotel, heritage haveli, and riverside Swiss camp is physically pre-audited for hygiene, hot running water, and safety."
    },
    {
      icon: <Headphones className="w-6 h-6 text-purple-400" />,
      title: "24x7 Dedicated Travel Concierge",
      desc: "From the moment you board your flight/train in Mumbai till you return, your personal trip manager is available on call & WhatsApp."
    }
  ];

  return (
    <section id="why-us-section" className="py-20 bg-[#07131d] text-white border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <Award className="w-3.5 h-3.5" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Why Travelers Choose Us for <span className="text-amber-400">Mumbai</span> & <span className="text-sky-400">Uttarakhand</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We bridge the gap between India's financial capital and the sacred Himalayan heights with end-to-end luxury, unmatched safety, and transparent pricing.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-[#0b1e2d] p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            >
              <div className="p-3.5 rounded-2xl bg-[#07131d] border border-white/10 w-fit mb-5 group-hover:scale-110 transition-transform">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {r.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="mt-14 rounded-3xl bg-[#0b1e2d] border border-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS.map((s, idx) => (
              <div key={idx} className={idx > 0 ? "pt-4 md:pt-0" : ""}>
                <div className="text-3xl sm:text-4xl font-black text-amber-400 font-display mb-1">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Ministry of Tourism Recognized</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>IATA Accredited Ticketing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Uttarakhand Tourism Development Board Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Maharashtra Tourism (MTDC) Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
}
