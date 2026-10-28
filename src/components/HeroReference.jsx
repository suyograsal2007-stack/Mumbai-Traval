import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Star, 
  MapPin, 
  Calendar,
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';
import { HERO_SLIDES } from '../data/travelData';

export default function HeroReference({ 
  onExplorePackage, 
  onQuickBook,
  wishlist = [],
  onToggleWishlist
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const currentSlide = HERO_SLIDES[currentIndex];
  const timerRef = useRef(null);

  // Auto-play slideshow every 7 seconds unless hovered
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 7000);
    }
    return () => clearInterval(timerRef.current);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleCardClick = (index) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div 
      className="relative min-h-[95vh] lg:min-h-screen w-full bg-[#07131d] overflow-hidden flex flex-col justify-between pt-24 pb-8 sm:pb-12 text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Layer with Atmospheric Overlays */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transform transition-transform duration-10000`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        {/* Ambient Dark Gradients matching the design reference */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07131d] via-[#07131d]/50 to-[#07131d]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07131d] via-[#07131d]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07131d] to-transparent" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 lg:pt-8">
          
          {/* Left Column: Vertical Index & Bold Typography */}
          <div className="lg:col-span-6 relative flex items-start gap-4 sm:gap-6">
            
            {/* Vertical Counter & Track (Exactly like reference '01/04') */}
            <div className="flex flex-col items-center pt-2 select-none">
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400">
                0{currentIndex + 1}
              </span>
              <div className="w-[1.5px] h-16 sm:h-24 bg-gradient-to-b from-amber-400 via-white/30 to-white/10 my-2 relative">
                <div 
                  className="w-2.5 h-2.5 rounded-full bg-amber-400 absolute -left-[4.5px] shadow-sm shadow-amber-400/80 transition-all duration-500"
                  style={{ top: `${(currentIndex / (HERO_SLIDES.length - 1)) * 80}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                0{HERO_SLIDES.length}
              </span>
            </div>

            {/* Narrative & Big Heading */}
            <div className="flex-1 space-y-4">
              
              {/* Region Pill & State badge */}
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/15 text-slate-200">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {currentSlide.region}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {currentSlide.highlight}
                </span>
              </div>

              {/* Huge Bold Title (Reference replica: INDONESIA style) */}
              <div className="relative">
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white font-display drop-shadow-md leading-none">
                  {currentSlide.title}
                </h1>
                
                {/* Ghost typography in background */}
                <span className="absolute -bottom-8 -left-2 text-6xl sm:text-8xl font-black uppercase text-white/[0.04] pointer-events-none select-none -z-10 tracking-widest font-display">
                  {currentSlide.ghostText}
                </span>
              </div>

              {/* Tagline & Descriptive summary */}
              <p className="text-sm sm:text-base text-slate-200/90 max-w-xl font-normal leading-relaxed line-clamp-3 sm:line-clamp-none">
                {currentSlide.description}
              </p>

              {/* Quick Key Perks (Mumbai departures & verified) */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>{currentSlide.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ex-Mumbai / Local Pickups</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{currentSlide.rating} ({currentSlide.reviews} verified reviews)</span>
                </div>
              </div>

              {/* Call to Actions (Blue Pill Explore button from reference) */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onExplorePackage(currentSlide.linkedPackageId)}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-600/30 border border-blue-400/40 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore Package</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onQuickBook(currentSlide.linkedPackageId)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-semibold text-sm border border-white/20 transition-all hover:border-amber-400/50"
                >
                  <span>Send Inquiry</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Floating Destination Cards Carousel (Reference replica) */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Featured Destinations & Packages
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Click any card to preview
              </span>
            </div>

            {/* Horizontal Scroll / Floating Cards Track */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 relative">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                const isSaved = wishlist.includes(slide.linkedPackageId);

                return (
                  <div
                    key={slide.id}
                    onClick={() => handleCardClick(idx)}
                    className={`group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                      isActive 
                        ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-[#07131d] scale-[1.02] shadow-2xl border-amber-400/60' 
                        : 'opacity-70 hover:opacity-100 hover:scale-[1.01] border-white/15 bg-slate-900/40'
                    }`}
                  >
                    {/* Card Image */}
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80";
                      }}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 group-hover:from-black/95 transition-all" />

                    {/* Top Right Bookmark Icon (Exact replica of reference card icon) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(slide.linkedPackageId);
                      }}
                      title={isSaved ? "Remove from wishlist" : "Save package"}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-20 ${
                        isSaved 
                          ? 'bg-amber-400 text-slate-950 shadow-md' 
                          : 'bg-white/20 hover:bg-white/40 text-white'
                      }`}
                      aria-label="Save"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-slate-950' : ''}`} />
                    </button>

                    {/* Active Pulse Tag */}
                    {isActive && (
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold tracking-wider uppercase z-20 shadow">
                        Viewing
                      </div>
                    )}

                    {/* Bottom Content inside Card */}
                    <div className="absolute bottom-0 inset-x-0 p-3 sm:p-3.5 z-10 flex flex-col justify-end space-y-1">
                      
                      {/* Rating Dots (Exact replica of reference dots under title) */}
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-amber-400' : 'bg-amber-400/70'}`}
                          />
                        ))}
                        <span className="text-[10px] text-slate-300 ml-1 font-medium">{slide.rating}</span>
                      </div>

                      {/* Card Title */}
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-amber-300 transition-colors">
                        {slide.title}
                      </h4>

                      {/* State / Region */}
                      <div className="flex items-center justify-between text-[11px] text-slate-300 pt-0.5">
                        <span className="truncate">{slide.region}</span>
                        <span className="font-bold text-amber-400 whitespace-nowrap">₹{slide.startingPrice.toLocaleString('en-IN')}</span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Prev / Next Circular Arrows below the cards (Reference replica) */}
            <div className="flex items-center justify-end gap-2.5 mt-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Track Indicator Bar (Reference replica: 01 ────────── 06) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="text-amber-400 font-bold">0{currentIndex + 1}</span>
            <div className="w-32 sm:w-56 h-1 bg-white/15 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-sky-400 transition-all duration-500 rounded-full"
                style={{ width: `${((currentIndex + 1) / HERO_SLIDES.length) * 100}%` }}
              />
            </div>
            <span>0{HERO_SLIDES.length}</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 hidden md:flex">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Direct Flight Support Ex-Mumbai</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Government Registered Guides</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>100% Customized Departures</span>
            </div>
          </div>

          {/* Quick jump pills */}
          <div className="flex items-center gap-1.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleCardClick(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentIndex ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
