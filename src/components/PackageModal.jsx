import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Star, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Share2,
  Sparkles,
  ChevronRight,
  Bookmark
} from 'lucide-react';

export default function PackageModal({ 
  pkg, 
  onClose, 
  onBookNow,
  isSaved,
  onToggleWishlist 
}) {
  const [activeTab, setActiveTab] = useState('itinerary'); // 'itinerary' | 'inclusions' | 'pricing'
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState('deluxe'); // 'deluxe' | 'luxury'
  const [copiedLink, setCopiedLink] = useState(false);

  if (!pkg) return null;

  // Calculate dynamic live price estimate
  const basePrice = pkg.price;
  const roomMultiplier = selectedRoom === 'luxury' ? 1.25 : 1.0;
  const childPrice = basePrice * 0.55;
  const totalPrice = Math.round((adults * basePrice + children * childPrice) * roomMultiplier);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: pkg.title,
        text: `Check out this tour package on Mumbai Tours: ${pkg.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="bg-[#0b1e2d] border border-white/15 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Bar */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
          <img
            src={pkg.images[activeImageIdx] || pkg.images[0]}
            alt={pkg.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80";
            }}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e2d] via-black/40 to-black/60" />

          {/* Close & Action Buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
            <button
              onClick={handleShare}
              title="Share package"
              className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleWishlist(pkg.id)}
              title={isSaved ? "Saved" : "Save"}
              className={`p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-105 ${
                isSaved ? 'bg-amber-400 text-slate-950' : 'bg-black/60 text-white'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-slate-950' : ''}`} />
            </button>
            <button
              onClick={onClose}
              title="Close modal"
              className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Share toast */}
          {copiedLink && (
            <div className="absolute top-16 right-4 bg-emerald-500 text-slate-950 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-in fade-in">
              Link copied!
            </div>
          )}

          {/* Title and tags inside image header */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                  pkg.state === 'Uttarakhand' ? 'bg-sky-500 text-white' : 'bg-amber-500 text-slate-950'
                }`}>
                  {pkg.state}
                </span>
                <span className="text-xs text-amber-300 font-semibold bg-black/60 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                  {pkg.category}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-full">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  {pkg.rating} ({pkg.reviewsCount} reviews)
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight font-display">
                {pkg.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-1">
                {pkg.subtitle}
              </p>
            </div>

            {/* Thumbnail switcher */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              {pkg.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIdx(i)}
                  className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIdx === i ? 'border-amber-400 scale-105 shadow-md' : 'border-white/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-white/10 px-6 bg-[#07131d] shrink-0">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === 'itinerary' 
                ? 'border-amber-400 text-amber-400' 
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Day-by-Day Itinerary ({pkg.daysCount} Days)
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === 'inclusions' 
                ? 'border-amber-400 text-amber-400' 
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Inclusions & Exclusions
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === 'pricing' 
                ? 'border-amber-400 text-amber-400' 
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Live Price Calculator
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1 text-slate-200 text-sm">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#07131d] p-4 rounded-2xl border border-white/5">
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Duration</div>
              <div className="font-bold text-white text-sm">{pkg.duration}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Best Season</div>
              <div className="font-bold text-amber-400 text-sm">{pkg.bestSeason}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Group Type</div>
              <div className="font-bold text-white text-sm">{pkg.groupType}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Starting Point</div>
              <div className="font-bold text-sky-400 text-xs sm:text-sm truncate">{pkg.startingFrom}</div>
            </div>
          </div>

          {/* Overview Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
              Trip Overview
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              {pkg.overview}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
              Key Experiences & Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pkg.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 bg-[#07131d]/60 p-2.5 rounded-xl border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tab 1: Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4 pt-2">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                Detailed Daily Schedule
              </h4>
              <div className="space-y-4">
                {pkg.itinerary.map((dayItem) => (
                  <div 
                    key={dayItem.day}
                    className="relative pl-6 pb-2 border-l-2 border-amber-400/40 last:border-l-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center text-[10px] font-black text-slate-950">
                      {dayItem.day}
                    </div>
                    <div className="bg-[#07131d] p-4 rounded-2xl border border-white/5 space-y-1.5 ml-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                          Day 0{dayItem.day}
                        </span>
                      </div>
                      <h5 className="font-bold text-white text-sm">
                        {dayItem.title}
                      </h5>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {dayItem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#07131d] p-5 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle className="w-4 h-4" />
                  What is Included
                </div>
                <div className="space-y-2">
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#07131d] p-5 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                  <XCircle className="w-4 h-4" />
                  What is Excluded
                </div>
                <div className="space-y-2">
                  {pkg.exclusions.map((exc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Interactive Price Calculator */}
          {activeTab === 'pricing' && (
            <div className="bg-[#07131d] p-5 sm:p-6 rounded-2xl border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">Live Tour Cost Estimator</h4>
                  <p className="text-xs text-slate-400">Customise travelers & room category for instant quote in INR</p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-400/20">
                  GST Included
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Adults */}
                <div className="bg-[#0b1e2d] p-3.5 rounded-xl border border-white/10">
                  <label className="text-xs text-slate-400 block mb-2">Adults (12+ yrs)</label>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center hover:bg-white/20"
                    >
                      -
                    </button>
                    <span className="font-bold text-lg text-white">{adults}</span>
                    <button
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center hover:bg-white/20"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="bg-[#0b1e2d] p-3.5 rounded-xl border border-white/10">
                  <label className="text-xs text-slate-400 block mb-2">Children (5-11 yrs)</label>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center hover:bg-white/20"
                    >
                      -
                    </button>
                    <span className="font-bold text-lg text-white">{children}</span>
                    <button
                      onClick={() => setChildren(children + 1)}
                      className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center hover:bg-white/20"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Room Category */}
                <div className="bg-[#0b1e2d] p-3.5 rounded-xl border border-white/10">
                  <label className="text-xs text-slate-400 block mb-2">Room Category</label>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full bg-[#07131d] text-white text-xs p-2 rounded-lg border border-white/15 focus:outline-none focus:border-amber-400"
                  >
                    <option value="deluxe">3-Star Deluxe Stays</option>
                    <option value="luxury">4-Star & Swiss Luxury Camps (+25%)</option>
                  </select>
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/60 to-amber-950/40 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300">Estimated Total Package Cost:</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Includes stay, meals, cab & sightseeing for {adults + children} guests
                  </span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onBookNow({ ...pkg, calculatedTotal: totalPrice, guestsCount: adults + children });
                  }}
                  className="px-5 py-3 rounded-xl bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wide hover:bg-amber-300 shadow-lg shadow-amber-400/20"
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer / Sticky CTA */}
        <div className="border-t border-white/10 p-4 sm:p-5 bg-[#07131d] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div>
              <span className="text-xs text-slate-400 block">Package Price (Per Person)</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-amber-400 font-display">
                  ₹{pkg.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  ₹{pkg.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {pkg.discount}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/15"
            >
              Back to Tours
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(pkg);
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Send Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
