import React from 'react';
import { 
  Star, 
  Clock, 
  MapPin, 
  Bookmark, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';

export default function PackagesGrid({ 
  packages = [], 
  onSelectPackage, 
  onBookPackage,
  wishlist = [],
  onToggleWishlist 
}) {
  if (packages.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-amber-400">
          <MapPin className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No packages match your search</h3>
        <p className="text-slate-400 max-w-md mx-auto text-sm">
          Try adjusting your search criteria or switch regions between Uttarakhand and Mumbai.
        </p>
      </div>
    );
  }

  return (
    <div id="packages-section" className="scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {packages.map((pkg) => {
          const isSaved = wishlist.includes(pkg.id);

          return (
            <div
              key={pkg.id}
              className="group bg-[#0b1e2d] rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              {/* Top Image & Overlays */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={pkg.images[0]}
                  alt={pkg.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e2d] via-transparent to-black/50" />

                {/* State Tag & Badge */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-md shadow-md ${
                    pkg.state === 'Uttarakhand' 
                      ? 'bg-sky-500/90 text-white' 
                      : 'bg-amber-500/90 text-slate-950'
                  }`}>
                    {pkg.state}
                  </span>

                  {pkg.badge && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => onToggleWishlist(pkg.id)}
                  title={isSaved ? "Saved in Wishlist" : "Save to Wishlist"}
                  className={`absolute top-3.5 right-3.5 p-2 rounded-full backdrop-blur-md transition-all ${
                    isSaved
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'bg-black/40 hover:bg-black/70 text-white border border-white/20'
                  }`}
                  aria-label="Wishlist"
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-slate-950' : ''}`} />
                </button>

                {/* Destination & Starting City */}
                <div className="absolute bottom-3 inset-x-3.5 flex items-center justify-between text-xs text-slate-200">
                  <span className="flex items-center gap-1 font-medium bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {pkg.destination}
                  </span>
                  <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg font-mono text-amber-300">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  {/* Rating & Category */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span>{pkg.rating}</span>
                      <span className="text-slate-400 font-normal">({pkg.reviewsCount} reviews)</span>
                    </div>
                    <span className="text-slate-400 font-medium">{pkg.category}</span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onSelectPackage(pkg)}
                    className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer leading-snug line-clamp-2"
                  >
                    {pkg.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Key Highlights Bullets */}
                <div className="space-y-1.5 py-2 border-y border-white/5">
                  {pkg.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Booking CTAs */}
                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wide">Starting from</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-amber-400 font-display">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          ₹{pkg.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400">per person (twin sharing)</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all"
                    >
                      Itinerary
                    </button>
                    <button
                      onClick={() => onBookPackage(pkg)}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold tracking-wide shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
                    >
                      <span>Send Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
