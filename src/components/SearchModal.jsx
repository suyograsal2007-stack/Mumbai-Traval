import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, ArrowRight, Star, Sparkles } from 'lucide-react';
import { TOUR_PACKAGES, POPULAR_LOCATIONS } from '../data/travelData';

export default function SearchModal({
  isOpen,
  onClose,
  onSelectPackage,
  onSelectLocation
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredPackages = query.trim() === ''
    ? []
    : TOUR_PACKAGES.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.destination.toLowerCase().includes(query.toLowerCase()) ||
        p.state.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );

  const filteredLocations = query.trim() === ''
    ? []
    : POPULAR_LOCATIONS.filter(l =>
        l.name.toLowerCase().includes(query.toLowerCase()) ||
        l.state.toLowerCase().includes(query.toLowerCase()) ||
        l.category.toLowerCase().includes(query.toLowerCase())
      );

  const quickPicks = [
    "Kedarnath Yatra",
    "Mumbai Heritage",
    "Rishikesh Rafting",
    "Auli Skiing",
    "Alibaug Getaway",
    "Jim Corbett Safari"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center p-4 sm:pt-20 animate-in fade-in">
      <div 
        className="bg-[#0b1e2d] border border-white/15 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 bg-[#07131d] border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destination, temple, adventure, Mumbai, Uttarakhand..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestions when empty */}
        {query.trim() === '' ? (
          <div className="p-6 space-y-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {quickPicks.map((pick) => (
                <button
                  key={pick}
                  onClick={() => setQuery(pick)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs border border-white/10 transition-colors"
                >
                  {pick}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-5 max-h-[60vh] overflow-y-auto space-y-5">
            {/* Packages Results */}
            {filteredPackages.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  Tour Packages ({filteredPackages.length})
                </span>
                <div className="space-y-2">
                  {filteredPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => { onClose(); onSelectPackage(pkg); }}
                      className="p-3 rounded-2xl bg-[#07131d] hover:bg-white/5 border border-white/5 cursor-pointer flex items-center justify-between gap-3 group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={pkg.images[0]}
                          alt={pkg.title}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300">
                            {pkg.title}
                          </h4>
                          <span className="text-[11px] text-slate-400">
                            {pkg.destination} • {pkg.duration}
                          </span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-bold text-amber-400">₹{pkg.price.toLocaleString('en-IN')}</div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 ml-auto transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location spots results */}
            {filteredLocations.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs uppercase font-extrabold text-sky-400 tracking-wider">
                  Popular Locations ({filteredLocations.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {filteredLocations.map((loc) => (
                    <div
                      key={loc.id}
                      onClick={() => { onClose(); onSelectLocation(loc.name); }}
                      className="p-3 rounded-2xl bg-[#07131d] hover:bg-white/5 border border-white/5 cursor-pointer flex items-center gap-3 group transition-all"
                    >
                      <img
                        src={loc.image}
                        alt={loc.name}
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div className="overflow-hidden">
                        <h5 className="text-xs font-bold text-white group-hover:text-amber-300 truncate">
                          {loc.name}
                        </h5>
                        <span className="text-[10px] text-slate-400">{loc.state} • {loc.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredPackages.length === 0 && filteredLocations.length === 0 && (
              <div className="py-12 text-center text-slate-400 text-xs">
                No matching tour packages or locations found for "{query}".
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
