import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [showPrompt, setShowPrompt] = useState(true);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent("Namaste! I am planning a trip to Mumbai / Uttarakhand. Please share package details and best offers.");
    window.open(`https://wa.me/919820012345?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Speech prompt bubble */}
      {showPrompt && (
        <div className="bg-[#0b1e2d] text-white p-3 rounded-2xl shadow-2xl border border-white/15 text-xs max-w-xs flex items-start gap-2 animate-in slide-in-from-bottom-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
          <div className="flex-1">
            <span className="font-bold text-amber-300 block">Planning a Mumbai or Uttarakhand Trip?</span>
            <span className="text-slate-300 text-[11px]">Chat with our Mumbai travel expert on WhatsApp for instant customized quotes.</span>
          </div>
          <button 
            onClick={() => setShowPrompt(false)}
            className="text-slate-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Action Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-all hover:scale-110 active:scale-95 border-2 border-emerald-400/40"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-[#07131d] animate-ping" />
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
