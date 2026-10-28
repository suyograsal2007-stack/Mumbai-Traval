import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroReference from './components/HeroReference';
import QuickSearchFilter from './components/QuickSearchFilter';
import PackagesGrid from './components/PackagesGrid';
import DestinationShowcase from './components/DestinationShowcase';
import PackageModal from './components/PackageModal';
import BookingModal from './components/BookingModal';
import CustomTripBuilder from './components/CustomTripBuilder';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import AboutAndTrust from './components/AboutAndTrust';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import { TOUR_PACKAGES } from './data/travelData';

export default function App() {
  // Wishlist state (persisted in localStorage)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('aurayatra_wishlist');
      return saved ? JSON.parse(saved) : ['pkg-kedarnath-badrinath', 'pkg-mumbai-heritage-coastal'];
    } catch (e) {
      return ['pkg-kedarnath-badrinath', 'pkg-mumbai-heritage-coastal'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('aurayatra_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  // Modal states
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookingPackage, setBookingPackage] = useState(null);
  const [isCustomTripOpen, setIsCustomTripOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('ALL'); // 'ALL' | 'Uttarakhand' | 'Mumbai'
  const [selectedCategory, setSelectedCategory] = useState('All Themes');
  const [selectedDuration, setSelectedDuration] = useState('ALL'); // 'ALL' | 'SHORT' | 'MEDIUM' | 'LONG'
  const [sortBy, setSortBy] = useState('featured');

  // Toggle wishlist
  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  // Filter & Sort calculation
  const filteredPackages = TOUR_PACKAGES.filter(pkg => {
    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = pkg.title.toLowerCase().includes(q);
      const matchDest = pkg.destination.toLowerCase().includes(q);
      const matchState = pkg.state.toLowerCase().includes(q);
      const matchCat = pkg.category.toLowerCase().includes(q);
      const matchHighlights = pkg.highlights.some(h => h.toLowerCase().includes(q));
      if (!matchTitle && !matchDest && !matchState && !matchCat && !matchHighlights) {
        return false;
      }
    }

    // Region filter
    if (selectedRegion !== 'ALL') {
      if (selectedRegion === 'Uttarakhand' && !pkg.state.includes('Uttarakhand')) return false;
      if (selectedRegion === 'Mumbai' && !pkg.state.includes('Mumbai')) return false;
    }

    // Category / Theme filter
    if (selectedCategory !== 'All Themes') {
      if (!pkg.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
        return false;
      }
    }

    // Duration filter
    if (selectedDuration === 'SHORT' && pkg.daysCount > 3) return false;
    if (selectedDuration === 'MEDIUM' && (pkg.daysCount < 4 || pkg.daysCount > 5)) return false;
    if (selectedDuration === 'LONG' && pkg.daysCount < 6) return false;

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'duration') return b.daysCount - a.daysCount;
    return 0; // 'featured' keeps curated order
  });

  const handleExplorePackage = (packageId) => {
    const pkg = TOUR_PACKAGES.find(p => p.id === packageId);
    if (pkg) {
      setSelectedPackage(pkg);
    }
  };

  const handleQuickBook = (packageId) => {
    const pkg = TOUR_PACKAGES.find(p => p.id === packageId);
    if (pkg) {
      setBookingPackage(pkg);
    }
  };

  const handleFilterByLocation = (locationName) => {
    setSearchQuery(locationName);
    const element = document.getElementById('packages-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07131d] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Navbar */}
      <Navbar
        wishlist={wishlist}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCustomTrip={() => setIsCustomTripOpen(true)}
        onSelectDestination={(reg) => setSelectedRegion(reg)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Reference Hero Section (Matches user reference design) */}
      <main className="flex-1">
        <HeroReference
          onExplorePackage={handleExplorePackage}
          onQuickBook={handleQuickBook}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
        />

        {/* Quick Search & Filter floating panel */}
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 sm:-mt-10 mb-12">
          <QuickSearchFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
            sortBy={sortBy}
            setSortBy={setSortBy}
            totalResults={filteredPackages.length}
          />
        </div>

        {/* Packages Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400 block mb-1">
                Handcrafted Itineraries
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-display">
                Featured Tour Packages
              </h2>
            </div>
            <div className="text-xs text-slate-400">
              Showing {filteredPackages.length} of {TOUR_PACKAGES.length} available packages
            </div>
          </div>

          <PackagesGrid
            packages={filteredPackages}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onBookPackage={(pkg) => setBookingPackage(pkg)}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
          />
        </section>

        {/* Popular Locations in Mumbai & Uttarakhand */}
        <DestinationShowcase
          onFilterByLocation={handleFilterByLocation}
          onOpenCustomTrip={() => setIsCustomTripOpen(true)}
        />

        {/* Why Choose Us & Trust Badges */}
        <AboutAndTrust />

        {/* Traveler Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenCustomTrip={() => setIsCustomTripOpen(true)}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloatingButton />

      {/* MODALS & DRAWERS */}
      
      {/* 1. Package Detail Modal */}
      {selectedPackage && (
        <PackageModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onBookNow={(pkg) => {
            setSelectedPackage(null);
            setBookingPackage(pkg);
          }}
          isSaved={wishlist.includes(selectedPackage.id)}
          onToggleWishlist={toggleWishlist}
        />
      )}

      {/* 2. Interactive Booking Modal */}
      {bookingPackage && (
        <BookingModal
          pkg={bookingPackage}
          onClose={() => setBookingPackage(null)}
        />
      )}

      {/* 3. Custom Trip Builder Modal */}
      {isCustomTripOpen && (
        <CustomTripBuilder
          onClose={() => setIsCustomTripOpen(false)}
        />
      )}

      {/* 4. Saved Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={toggleWishlist}
        onClearWishlist={clearWishlist}
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
        onBookPackage={(pkg) => setBookingPackage(pkg)}
      />

      {/* 5. Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
        onSelectLocation={(locName) => handleFilterByLocation(locName)}
      />

    </div>
  );
}
