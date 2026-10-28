import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Send, 
  ArrowUp,
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Loader2
} from 'lucide-react';
import { subscribeNewsletter } from '../lib/supabaseClient';

export default function Footer({ onSelectCategory, onOpenCustomTrip }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribing(true);
      await subscribeNewsletter(newsletterEmail.trim());
      setSubscribing(false);
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050e15] text-white border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Compass className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display">
                Mumbai
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Premier travel agency curating handcrafted holiday packages, Himalayan pilgrimage yatras, and coastal getaways across Mumbai and Devbhoomi Uttarakhand.
            </p>

            {/* Mumbai Registered Office Badge */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Head Office: Nariman Point, Mumbai</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Maker Chambers V, 4th Floor, Jamnalal Bajaj Rd, Nariman Point, Mumbai, Maharashtra 400021
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Uttarakhand Tours */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
              Uttarakhand Tours
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#packages-section" className="hover:text-white transition-colors">Kedarnath & Badrinath Do Dham</a></li>
              <li><a href="#packages-section" className="hover:text-white transition-colors">Rishikesh River Rafting & Camping</a></li>
              <li><a href="#packages-section" className="hover:text-white transition-colors">Auli Skiing & Snow Expedition</a></li>
              <li><a href="#packages-section" className="hover:text-white transition-colors">Nainital & Mussoorie Hill Trail</a></li>
              <li><a href="#packages-section" className="hover:text-white transition-colors">Jim Corbett Tiger Jungle Safari</a></li>
              <li><a href="#packages-section" className="hover:text-white transition-colors">Chopta & Chandrashila Peak Trek</a></li>
            </ul>
          </div>

          {/* Col 3: Mumbai & Coast */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
              Mumbai & Coast Tours
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#packages-section" className="hover:text-white transition-colors">South Mumbai Colonial Heritage</a></li>
              <li><a href="#packages-section" className="hover:text-white transition-colors">Marine Drive & Queen's Necklace</a></li>
              <li><a href="#packages-section" className="hover:text-white transition-colors">Elephanta Caves UNESCO Cruise</a></li>
              <li><a href="#packages-section" className="hover:text-white transition-colors">Bollywood Film City VIP Pass</a></li>
              <li><a href="#packages-section" className="hover:text-white transition-colors">Alibaug Beachfront Weekend</a></li>
              <li><a href="#packages-section" className="hover:text-white transition-colors">Lonavala Sahyadri Escapes</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
              Exclusive Deals
            </h4>
            <p className="text-xs text-slate-400">
              Get notified of early-bird helicopter slots and seasonal discounts for Mumbai & Uttarakhand departures.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 disabled:opacity-75 flex items-center justify-center"
                >
                  {subscribing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-emerald-400 text-xs font-medium">✓ Subscribed! Welcome to Mumbai Travels.</p>
              )}
            </form>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+91 98200 12345 (24/7 Helpline)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>bookings@mumbaitravels.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scrollToTop */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Mumbai Tours & Travels Private Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-300 cursor-pointer">Cancellation Policy</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
