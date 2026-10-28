import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Check, 
  Send, 
  Calendar, 
  Users, 
  Car, 
  Building, 
  Phone, 
  X,
  Share2,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitCustomTripInquiry } from '../lib/supabaseClient';

export default function CustomTripBuilder({ onClose }) {
  const [origin, setOrigin] = useState('Mumbai');
  const [selectedSpots, setSelectedSpots] = useState([
    'Kedarnath Temple',
    'Rishikesh (Ganga Aarti & Rafting)'
  ]);
  const [duration, setDuration] = useState(6);
  const [partySize, setPartySize] = useState(2);
  const [hotelType, setHotelType] = useState('deluxe'); // 'standard' | 'deluxe' | 'luxury'
  const [vehicle, setVehicle] = useState('innova'); // 'sedan' | 'innova' | 'tempo'
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [travelMonth, setTravelMonth] = useState('Next Month');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableSpots = [
    { name: 'Kedarnath Temple', region: 'Uttarakhand', type: 'Spiritual' },
    { name: 'Rishikesh (Ganga Aarti & Rafting)', region: 'Uttarakhand', type: 'Adventure' },
    { name: 'Auli Snow Meadows & Skiing', region: 'Uttarakhand', type: 'Snow' },
    { name: 'Nainital Lake & Mall Road', region: 'Uttarakhand', type: 'Hill Station' },
    { name: 'Jim Corbett Tiger Safari', region: 'Uttarakhand', type: 'Wildlife' },
    { name: 'Mussoorie Queen of the Hills', region: 'Uttarakhand', type: 'Hill Station' },
    { name: 'Badrinath & Mana Village', region: 'Uttarakhand', type: 'Spiritual' },
    { name: 'Chopta Tungnath Trek', region: 'Uttarakhand', type: 'Trekking' },
    { name: 'Mumbai Heritage & Gateway', region: 'Mumbai', type: 'Heritage' },
    { name: 'Marine Drive & Chowpatty Food', region: 'Mumbai', type: 'Culture' },
    { name: 'Elephanta Island Caves', region: 'Mumbai', type: 'UNESCO' },
    { name: 'Bollywood Film City Studio', region: 'Mumbai', type: 'Cinema' },
    { name: 'Alibaug Speedboat & Beaches', region: 'Mumbai', type: 'Coastal' },
    { name: 'Lonavala Western Ghats & Forts', region: 'Mumbai', type: 'Sahyadri' }
  ];

  const toggleSpot = (spotName) => {
    if (selectedSpots.includes(spotName)) {
      if (selectedSpots.length > 1) {
        setSelectedSpots(selectedSpots.filter(s => s !== spotName));
      }
    } else {
      setSelectedSpots([...selectedSpots, spotName]);
    }
  };

  // Estimate cost dynamically
  const baseRatePerDay = hotelType === 'standard' ? 2200 : hotelType === 'deluxe' ? 3200 : 4800;
  const vehicleFactor = vehicle === 'sedan' ? 2200 : vehicle === 'innova' ? 3400 : 5000;
  const estimatedCostPerPerson = Math.round((baseRatePerDay * duration) + ((vehicleFactor * duration) / partySize));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    await submitCustomTripInquiry({
      fullName: name,
      phone: phone,
      originCity: origin,
      duration: duration,
      partySize: partySize,
      destinations: selectedSpots,
      hotelType: hotelType,
      vehicle: vehicle,
      travelMonth: travelMonth,
      estimatedCost: estimatedCostPerPerson
    });
    setIsSubmitting(false);

    setSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 60 });
    } catch (err) {}
  };

  const handleWhatsAppShare = () => {
    const text = `Namaste Mumbai Tours team! I want a custom-built tour itinerary:
*Origin:* ${origin}
*Destinations Selected:* ${selectedSpots.join(', ')}
*Duration:* ${duration} Days
*Party Size:* ${partySize} Travelers
*Preferred Stay:* ${hotelType.toUpperCase()}
*Travel Month:* ${travelMonth}
*Estimated Budget:* ~₹${estimatedCostPerPerson.toLocaleString('en-IN')} / person
*Traveler Name:* ${name}
*Phone:* ${phone}

Please share a detailed day-wise proposal and best flight/train options!`;

    window.open(`https://wa.me/919820012345?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in">
      <div 
        className="bg-[#0b1e2d] border border-white/15 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#07131d] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-400/20 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white font-display">
                Tailor-Made Tour Architect
              </h3>
              <p className="text-xs text-slate-400">Design your personalized Mumbai & Uttarakhand journey</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Origin & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    1. Starting From
                  </label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07131d] border border-white/15 text-white text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="Mumbai">Mumbai (Direct support)</option>
                    <option value="Pune / Western Maharashtra">Pune / Western Maharashtra</option>
                    <option value="Delhi / NCR">Delhi / NCR</option>
                    <option value="Dehradun / Haridwar">Dehradun / Haridwar</option>
                    <option value="Other City">Other City</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    2. Duration: {duration} Days / {duration - 1} Nights
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="14"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full accent-amber-400 mt-2"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>2 Days</span>
                    <span>7 Days</span>
                    <span>14 Days</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    3. Travelers Count: {partySize} Guests
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={partySize}
                    onChange={(e) => setPartySize(parseInt(e.target.value))}
                    className="w-full accent-amber-400 mt-2"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>1 (Solo)</span>
                    <span>4 (Family)</span>
                    <span>10+ (Group)</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Choose Spots */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    4. Select Destinations You Wish to Visit ({selectedSpots.length} selected)
                  </label>
                  <span className="text-[11px] text-slate-400">Combine Mumbai & Uttarakhand freely</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-56 overflow-y-auto p-1">
                  {availableSpots.map((spot) => {
                    const isSelected = selectedSpots.includes(spot.name);
                    return (
                      <button
                        key={spot.name}
                        type="button"
                        onClick={() => toggleSpot(spot.name)}
                        className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-amber-400 bg-amber-400/15 text-white shadow-sm'
                            : 'border-white/10 bg-[#07131d] text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-1">
                          <span className={`text-[10px] uppercase font-bold px-1.5 py-0.2 rounded ${
                            spot.region === 'Uttarakhand' ? 'bg-sky-500/20 text-sky-300' : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {spot.region}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                        </div>
                        <span className="font-semibold text-xs mt-1.5 line-clamp-2">{spot.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Hotel & Vehicle Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    5. Stay Style
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'standard', name: 'Standard (3★)' },
                      { id: 'deluxe', name: 'Deluxe (4★)' },
                      { id: 'luxury', name: 'Luxury Heritage' }
                    ].map(h => (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => setHotelType(h.id)}
                        className={`p-2 rounded-xl text-xs font-semibold border ${
                          hotelType === h.id 
                            ? 'border-amber-400 bg-amber-400/20 text-amber-300' 
                            : 'border-white/10 bg-[#07131d] text-slate-300'
                        }`}
                      >
                        {h.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    6. Vehicle Choice
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'sedan', name: 'AC Sedan (Dzire)' },
                      { id: 'innova', name: 'Innova Crysta' },
                      { id: 'tempo', name: 'Tempo Traveller' }
                    ].map(v => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVehicle(v.id)}
                        className={`p-2 rounded-xl text-xs font-semibold border ${
                          vehicle === v.id 
                            ? 'border-amber-400 bg-amber-400/20 text-amber-300' 
                            : 'border-white/10 bg-[#07131d] text-slate-300'
                        }`}
                      >
                        {v.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Contact info */}
              <div className="p-4 rounded-2xl bg-[#07131d] border border-white/10 space-y-3">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Where Should We Send Your Itinerary & Quotation?
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name *"
                    className="px-3.5 py-2.5 rounded-xl bg-[#0b1e2d] border border-white/15 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="WhatsApp Number *"
                    className="px-3.5 py-2.5 rounded-xl bg-[#0b1e2d] border border-white/15 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                  <select
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl bg-[#0b1e2d] border border-white/15 text-white text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="Next 30 Days">Travel in Next 30 Days</option>
                    <option value="2-3 Months Out">Travel in 2-3 Months</option>
                    <option value="Summer Holidays">Summer Holidays</option>
                    <option value="Diwali / Winter">Diwali / Winter Season</option>
                  </select>
                </div>
              </div>

              {/* Live Estimate Card & Submit */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 to-amber-950/50 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-300">Estimated Custom Tour Cost:</span>
                  <div className="text-2xl font-black text-amber-400 font-display">
                    ~₹{estimatedCostPerPerson.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-slate-300">/ person (approx.)</span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Includes {duration} days private {vehicle.toUpperCase()} cab, stays & breakfast
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-75 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-400/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving Request...</span>
                    </>
                  ) : (
                    <span>Generate & Send My Proposal</span>
                  )}
                </button>
              </div>

            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white font-display">
                Custom Proposal Request Received!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you <span className="font-bold text-white">{name}</span>! Our specialized trip designer in Mumbai is curating your personalized {duration}-day route connecting <span className="text-amber-400">{selectedSpots.slice(0, 3).join(', ')}</span>.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppShare}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wide flex items-center gap-2 shadow-lg"
                >
                  <Share2 className="w-4 h-4" />
                  Chat Directly on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs"
                >
                  Browse Standard Packages
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
