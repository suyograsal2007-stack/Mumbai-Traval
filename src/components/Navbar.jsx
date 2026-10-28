import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Search, 
  Bookmark, 
  PhoneCall, 
  Menu, 
  X, 
  MapPin, 
  Calendar,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function Navbar({ 
  wishlist = [], 
  onOpenWishlist, 
  onOpenCustomTrip, 
  onSelectDestination,
  onOpenSearch
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setDestDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#07131d]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5' 
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - foxico inspired styling */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5 text-slate-950 transform group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-sky-400 rounded-full border-2 border-slate-950 animate-ping" />
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="text-2xl font-black tracking-tight text-white font-display">Mumbai</span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 -mt-0.5 tracking-wide hidden sm:block">Tours & Travel Packages</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Destinations Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDestDropdownOpen(!destDropdownOpen)}
                onBlur={() => setTimeout(() => setDestDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Destinations
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${destDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'}`} />
              </button>

              {destDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#0b1e2d] border border-white/10 shadow-2xl p-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-amber-400 px-3 py-1">Featured Regions</div>
                  
                  <button 
                    onClick={() => { onSelectDestination && onSelectDestination('Uttarakhand'); scrollToSection('packages-section'); }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 group-hover:scale-105 transition-transform">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-sky-300">Devbhoomi Uttarakhand</div>
                      <div className="text-xs text-slate-400">Kedarnath, Rishikesh, Auli, Nainital, Corbett</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => { onSelectDestination && onSelectDestination('Mumbai'); scrollToSection('packages-section'); }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 group-hover:scale-105 transition-transform">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-amber-300">Mumbai & Maharashtra</div>
                      <div className="text-xs text-slate-400">Heritage Trail, Marine Drive, Alibaug, Lonavala</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('packages-section')}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Tour Packages
            </button>

            <button 
              onClick={() => scrollToSection('destinations-section')}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Popular Spots
            </button>

            <button 
              onClick={() => scrollToSection('why-us-section')}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Why Us
            </button>

            <button 
              onClick={() => scrollToSection('testimonials-section')}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Reviews
            </button>

            <button 
              onClick={onOpenCustomTrip}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-amber-300 hover:text-amber-200 rounded-lg hover:bg-amber-400/10 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Tailor Trip
            </button>
          </nav>

          {/* Right Action Icons & Book CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Quick Search Button */}
            <button 
              onClick={onOpenSearch}
              title="Search destinations & packages"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 transition-all hover:scale-105 active:scale-95"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Saved Button */}
            <button 
              onClick={onOpenWishlist}
              title="Saved Packages"
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 transition-all hover:scale-105 active:scale-95"
              aria-label="Saved Packages"
            >
              <Bookmark className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-500 text-slate-950 text-[11px] font-bold flex items-center justify-center animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Inquire / Direct Call / Book Button */}
            <button 
              onClick={onOpenCustomTrip}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all hover:scale-105 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Send Inquiry</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 focus:outline-none"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07131d]/98 border-b border-white/10 backdrop-blur-xl px-5 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
            <button 
              onClick={() => { onSelectDestination && onSelectDestination('Uttarakhand'); scrollToSection('packages-section'); }}
              className="flex items-center gap-2 p-3 rounded-xl bg-sky-950/40 border border-sky-500/20 text-sky-200 text-sm font-medium"
            >
              <MapPin className="w-4 h-4 text-sky-400" />
              Uttarakhand
            </button>
            <button 
              onClick={() => { onSelectDestination && onSelectDestination('Mumbai'); scrollToSection('packages-section'); }}
              className="flex items-center gap-2 p-3 rounded-xl bg-amber-950/40 border border-amber-500/20 text-amber-200 text-sm font-medium"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              Mumbai & Coast
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('packages-section')}
            className="w-full text-left py-2.5 text-base font-medium text-slate-200 hover:text-white"
          >
            All Tour Packages
          </button>
          <button 
            onClick={() => scrollToSection('destinations-section')}
            className="w-full text-left py-2.5 text-base font-medium text-slate-200 hover:text-white"
          >
            Popular Locations
          </button>
          <button 
            onClick={() => scrollToSection('why-us-section')}
            className="w-full text-left py-2.5 text-base font-medium text-slate-200 hover:text-white"
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => scrollToSection('testimonials-section')}
            className="w-full text-left py-2.5 text-base font-medium text-slate-200 hover:text-white"
          >
            Traveler Reviews
          </button>
          <button 
            onClick={() => scrollToSection('faq-section')}
            className="w-full text-left py-2.5 text-base font-medium text-slate-200 hover:text-white"
          >
            Frequently Asked Questions
          </button>

          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenCustomTrip(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              Custom Trip Planner
            </button>
            <a 
              href="tel:+919820012345"
              className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-center flex items-center justify-center gap-2 text-sm"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              Call Mumbai Office: +91 98200 12345
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
