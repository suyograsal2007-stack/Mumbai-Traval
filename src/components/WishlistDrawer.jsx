import React from 'react';
import { X, Trash2, ArrowRight, Bookmark, MapPin, Star } from 'lucide-react';
import { TOUR_PACKAGES } from '../data/travelData';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlist = [],
  onRemoveFromWishlist,
  onClearWishlist,
  onSelectPackage,
  onBookPackage
}) {
  if (!isOpen) return null;

  const savedPackages = TOUR_PACKAGES.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div 
        className="absolute inset-y-0 right-0 max-w-md w-full bg-[#0b1e2d] border-l border-white/10 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-[#07131d] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-400/20 text-amber-400">
              <Bookmark className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Your Saved Packages</h3>
              <p className="text-xs text-slate-400">{savedPackages.length} package(s) bookmarked</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {savedPackages.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <Bookmark className="w-12 h-12 text-slate-600 mx-auto" />
              <h4 className="text-base font-bold text-white">No saved packages yet</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Click the bookmark icon on any tour package card or hero slide to save it here for quick comparison!
              </p>
            </div>
          ) : (
            savedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#07131d] rounded-2xl p-3.5 border border-white/5 flex gap-3.5 relative group hover:border-amber-400/40 transition-all"
              >
                <img
                  src={pkg.images[0]}
                  alt={pkg.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-amber-400">{pkg.state}</span>
                      <button
                        onClick={() => onRemoveFromWishlist(pkg.id)}
                        className="text-slate-500 hover:text-red-400 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h5 
                      onClick={() => { onClose(); onSelectPackage(pkg); }}
                      className="font-bold text-white text-xs line-clamp-1 cursor-pointer hover:text-amber-300"
                    >
                      {pkg.title}
                    </h5>
                    <span className="text-[11px] text-slate-400">{pkg.duration}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-bold text-amber-400">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                    <button
                      onClick={() => { onClose(); onBookPackage(pkg); }}
                      className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold flex items-center gap-1 shadow"
                    >
                      Send Inquiry <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {savedPackages.length > 0 && (
          <div className="p-4 bg-[#07131d] border-t border-white/10 flex items-center justify-between">
            <button
              onClick={onClearWishlist}
              className="text-xs text-slate-400 hover:text-red-400 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={() => {
                onClose();
                const el = document.getElementById('packages-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs"
            >
              Compare in Grid
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
