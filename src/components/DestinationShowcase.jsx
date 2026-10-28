import React, { useState } from 'react';
import { MapPin, ArrowRight, Mountain, Waves, Compass, Star } from 'lucide-react';
import { POPULAR_LOCATIONS } from '../data/travelData';

export default function DestinationShowcase({ onFilterByLocation, onOpenCustomTrip }) {
  const [filterRegion, setFilterRegion] = useState('ALL');

  const filtered = filterRegion === 'ALL' 
    ? POPULAR_LOCATIONS 
    : POPULAR_LOCATIONS.filter(item => {
        if (filterRegion === 'Uttarakhand') return item.state.includes('Uttarakhand');
        if (filterRegion === 'Mumbai') return item.state.includes('Mumbai');
        return true;
      });

  return (
    <section id="destinations-section" className="py-20 bg-[#07131d] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Compass className="w-3.5 h-3.5" />
              Two Iconic Worlds
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              Popular Spots in <span className="text-amber-400">Mumbai</span> & <span className="text-sky-400">Uttarakhand</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              From the high Himalayan sanctums and cascading alpine waters of Uttarakhand to the royal colonial sea fronts and buzzing lanes of Mumbai.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 bg-[#0b1e2d] p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setFilterRegion('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterRegion === 'ALL'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Locations ({POPULAR_LOCATIONS.length})
            </button>
            <button
              onClick={() => setFilterRegion('Uttarakhand')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterRegion === 'Uttarakhand'
                  ? 'bg-sky-500 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Mountain className="w-3.5 h-3.5" />
              Uttarakhand
            </button>
            <button
              onClick={() => setFilterRegion('Mumbai')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterRegion === 'Mumbai'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Waves className="w-3.5 h-3.5" />
              Mumbai
            </button>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((loc) => (
            <div
              key={loc.id}
              onClick={() => onFilterByLocation(loc.name)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-amber-400/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-end p-5"
            >
              {/* Background image */}
              <img
                src={loc.image}
                alt={loc.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80";
                }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/90 transition-all" />

              {/* Tag pill at top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md shadow ${
                  loc.state.includes('Uttarakhand')
                    ? 'bg-sky-600/90 text-white'
                    : 'bg-amber-500/90 text-slate-950'
                }`}>
                  {loc.state}
                </span>

                <span className="text-xs text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/15 flex items-center gap-1 font-semibold">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  {loc.rating}
                </span>
              </div>

              {/* Location Details */}
              <div className="relative z-10 space-y-2">
                <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                  {loc.tag}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {loc.name}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {loc.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                  <span>{loc.packagesCount} Curated Packages</span>
                  <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Tailor Made */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-blue-900/60 via-[#0b1e2d] to-amber-900/40 border border-white/15 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              Want to combine Mumbai and Uttarakhand in one journey?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We coordinate end-to-end direct flights, Rajdhani trains, and luxury mountain transfers for seamless inter-state holidays.
            </p>
          </div>
          <button
            onClick={onOpenCustomTrip}
            className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-amber-400/20 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            Design Custom Package
          </button>
        </div>

      </div>
    </section>
  );
}
