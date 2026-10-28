import React from 'react';
import { Search, MapPin, Calendar, SlidersHorizontal, Compass, Sparkles, X } from 'lucide-react';

export default function QuickSearchFilter({
  searchQuery,
  setSearchQuery,
  selectedRegion,
  setSelectedRegion,
  selectedCategory,
  setSelectedCategory,
  selectedDuration,
  setSelectedDuration,
  sortBy,
  setSortBy,
  totalResults
}) {
  const regions = [
    { label: "All Destinations", value: "ALL" },
    { label: "Uttarakhand (Devbhoomi)", value: "Uttarakhand", icon: "🏔️" },
    { label: "Mumbai & Coast", value: "Mumbai", icon: "🌊" }
  ];

  const categories = [
    "All Themes",
    "Spiritual",
    "Adventure",
    "Heritage",
    "Family & Honeymoon",
    "Wildlife",
    "Weekend Getaway",
    "Culture & Entertainment"
  ];

  const durations = [
    { label: "Any Length", value: "ALL" },
    { label: "2 - 3 Days (Weekend)", value: "SHORT" },
    { label: "4 - 5 Days", value: "MEDIUM" },
    { label: "6+ Days (Comprehensive)", value: "LONG" }
  ];

  const hasActiveFilters = searchQuery !== "" || selectedRegion !== "ALL" || selectedCategory !== "All Themes" || selectedDuration !== "ALL";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRegion("ALL");
    setSelectedCategory("All Themes");
    setSelectedDuration("ALL");
    setSortBy("featured");
  };

  return (
    <div className="bg-[#0b1e2d] border border-white/10 rounded-3xl p-5 sm:p-7 shadow-2xl relative -mt-10 sm:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Search & Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
        
        {/* Destination Search Box */}
        <div className="md:col-span-5 relative">
          <div className="relative">
            <Search className="w-5 h-5 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Kedarnath, Marine Drive, Rishikesh rafting, Auli..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-[#07131d] border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Duration Select */}
        <div className="md:col-span-3">
          <div className="relative">
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl bg-[#07131d] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all appearance-none cursor-pointer"
            >
              {durations.map((d) => (
                <option key={d.value} value={d.value} className="bg-[#0b1e2d] text-white">
                  ⏱️ Duration: {d.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Sort By */}
        <div className="md:col-span-4">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl bg-[#07131d] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all appearance-none cursor-pointer"
            >
              <option value="featured" className="bg-[#0b1e2d]">⚡ Sort: Featured & Popular</option>
              <option value="price-low" className="bg-[#0b1e2d]">💰 Price: Low to High</option>
              <option value="price-high" className="bg-[#0b1e2d]">💎 Price: High to Low</option>
              <option value="rating" className="bg-[#0b1e2d]">⭐ Highest Rated</option>
              <option value="duration" className="bg-[#0b1e2d]">⏳ Duration: Longest First</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

      </div>

      {/* Pill Chips for Regions & Categories */}
      <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        
        {/* Regions Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Location:
          </span>
          {regions.map((reg) => (
            <button
              key={reg.value}
              onClick={() => setSelectedRegion(reg.value)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedRegion === reg.value
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {reg.icon && <span>{reg.icon}</span>}
              <span>{reg.label}</span>
            </button>
          ))}
        </div>

        {/* Categories / Themes Scrollable / Wrap */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Theme:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Active Filter Indicators & Results Count */}
      <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
        <div>
          Showing <span className="font-bold text-amber-400">{totalResults}</span> Handcrafted Tour Packages
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 hover:underline"
          >
            <X className="w-3.5 h-3.5" />
            Clear All Filters
          </button>
        )}
      </div>

    </div>
  );
}
