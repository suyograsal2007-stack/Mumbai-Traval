import React from 'react';
import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="py-20 bg-[#07131d] text-white border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <Heart className="w-3.5 h-3.5 fill-amber-400" />
            Guest Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Loved by <span className="text-amber-400">28,000+</span> Indian Travelers
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Read real accounts from families, pilgrims, and explorers who traveled with Mumbai Tours across Mumbai and Uttarakhand.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0b1e2d] p-6 sm:p-8 rounded-3xl border border-white/10 relative flex flex-col justify-between hover:border-amber-400/40 transition-all hover:shadow-2xl"
            >
              <Quote className="w-10 h-10 text-white/5 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating Stars & Tour Tag */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-lg border border-sky-400/20">
                    {t.tour}
                  </span>
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-amber-400/50"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {t.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <span className="text-xs text-slate-400">{t.location}</span>
                  </div>
                </div>

                <span className="text-[11px] text-slate-500 font-mono">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
