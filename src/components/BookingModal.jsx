import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Users, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Download,
  Share2,
  FileText,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitPackageInquiry } from '../lib/supabaseClient';

export default function BookingModal({ pkg, onClose }) {
  const [step, setStep] = useState(1); // 1: Details, 2: Preferences & Add-ons, 3: Confirmed Voucher
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    departureDate: '',
    adults: pkg?.guestsCount || 2,
    children: 0,
    mealPref: 'Pure Veg',
    specialReq: '',
    flightAssistance: true,
    hotelCategory: 'Deluxe (3-Star & Premium Camps)',
    addonHeliRafting: false,
    addonInsurance: true
  });

  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState({});

  if (!pkg) return null;

  const basePricePerPerson = pkg.price;
  const insuranceCost = formData.addonInsurance ? 499 * formData.adults : 0;
  const addonActivityCost = formData.addonHeliRafting ? 2500 * formData.adults : 0;
  const baseSubtotal = (formData.adults * basePricePerPerson) + (formData.children * basePricePerPerson * 0.55);
  const totalAmount = Math.round(baseSubtotal + insuranceCost + addonActivityCost);

  const validateStep1 = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name";
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = "Enter valid 10-digit WhatsApp/mobile number";
    if (!formData.departureDate) errs.departureDate = "Select expected travel date";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = async () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2) {
      setIsSubmitting(true);
      // Generate booking reference
      const randomCode = Math.floor(10000 + Math.random() * 90000);
      const prefix = pkg.state === 'Uttarakhand' ? 'AY-UTK' : 'AY-MUM';
      const refCode = `${prefix}-${randomCode}`;
      setBookingRef(refCode);

      // Save to Supabase backend
      await submitPackageInquiry({
        inquiryRef: refCode,
        packageId: pkg.id,
        packageTitle: pkg.title,
        packageDestination: pkg.destination,
        packageState: pkg.state,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        departureDate: formData.departureDate,
        adults: formData.adults,
        children: formData.children,
        mealPref: formData.mealPref,
        flightAssistance: formData.flightAssistance,
        addonHeliRafting: formData.addonHeliRafting,
        addonInsurance: formData.addonInsurance,
        specialReq: formData.specialReq,
        estimatedTotal: totalAmount
      });

      setIsSubmitting(false);
      setStep(3);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  const handleWhatsAppInquiry = () => {
    const text = `Namaste Mumbai Tours team! I want to submit an inquiry for:
*Package:* ${pkg.title}
*Inquiry Ref:* ${bookingRef}
*Traveler:* ${formData.fullName} (${formData.city})
*Travel Date:* ${formData.departureDate}
*Guests:* ${formData.adults} Adults, ${formData.children} Children
*Estimated Package Cost:* ₹${totalAmount.toLocaleString('en-IN')}

Please share full itinerary details and confirm availability!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919820012345?text=${encoded}`, '_blank');
  };

  const handleDownloadSummary = () => {
    const content = `
MUMBAI TOURS & TRAVELS
OFFICIAL TOUR INQUIRY SUMMARY
==========================================
Inquiry Reference: ${bookingRef}
Date: ${new Date().toLocaleDateString('en-IN')}
Status: INQUIRY SUBMITTED (Zero Advance Required)

PACKAGE DETAILS:
- Title: ${pkg.title}
- Destination: ${pkg.destination} (${pkg.state})
- Duration: ${pkg.duration}
- Pick-up Coordination: ${pkg.startingFrom}

TRAVELER INFORMATION:
- Primary Traveler: ${formData.fullName}
- WhatsApp Number: ${formData.phone}
- Email: ${formData.email || 'N/A'}
- Origin City: ${formData.city}
- Preferred Travel Date: ${formData.departureDate}
- Party Size: ${formData.adults} Adults, ${formData.children} Children
- Meal Preference: ${formData.mealPref}

COST BREAKDOWN:
- Base Package: ₹${baseSubtotal.toLocaleString('en-IN')}
- Travel Protection: ₹${insuranceCost.toLocaleString('en-IN')}
- Activities Add-on: ₹${addonActivityCost.toLocaleString('en-IN')}
- Total Estimated Package Cost: ₹${totalAmount.toLocaleString('en-IN')}

HEADQUARTERS:
Maker Chambers V, Nariman Point, Mumbai - 400021
WhatsApp / Helpline: +91 98200 12345
==========================================
Thank you for reaching out to Mumbai Tours & Travels!
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Mumbai-Inquiry-${bookingRef}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      
      <div 
        className="bg-[#0b1e2d] border border-white/15 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#07131d] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              {step < 3 ? `0${step}` : '✓'}
            </span>
            <div>
              <h3 className="text-base font-bold text-white">
                {step === 1 && "Step 1: Traveler & Trip Details"}
                {step === 2 && "Step 2: Custom Preferences & Upgrades"}
                {step === 3 && "Inquiry Sent Successfully!"}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-1">{pkg.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Progress */}
        <div className="w-full bg-white/5 h-1">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-sky-400 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Modal Form Body */}
        <div className="p-6 overflow-y-auto max-h-[75vh] space-y-5 text-sm">
          
          {/* STEP 1: Traveler Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="bg-sky-950/40 p-3.5 rounded-2xl border border-sky-500/20 text-xs text-sky-200 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Submit your travel inquiry with zero advance payment. Our Mumbai travel coordinator will verify hotel & cab availability and share a customized proposal.
                </span>
              </div>

              {/* Full Name & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Lead Traveler Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rohit Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07131d] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 XXXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07131d] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email & Departure City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07131d] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Your Departure City
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07131d] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
                  >
                    <option value="Mumbai">Mumbai (Airport / Central / Bandra)</option>
                    <option value="Pune">Pune</option>
                    <option value="Thane / Navi Mumbai">Thane / Navi Mumbai</option>
                    <option value="Delhi / NCR">Delhi / NCR</option>
                    <option value="Ahmedabad / Gujarat">Ahmedabad / Gujarat</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>
              </div>

              {/* Travel Date & Party Size */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Expected Travel Date *
                  </label>
                  <input
                    type="date"
                    value={formData.departureDate}
                    onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#07131d] border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                  {errors.departureDate && <p className="text-red-400 text-xs mt-1">{errors.departureDate}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Adults (12+ yrs)
                  </label>
                  <div className="flex items-center justify-between bg-[#07131d] px-3 py-1.5 rounded-xl border border-white/15">
                    <button 
                      type="button"
                      onClick={() => setFormData({ ...formData, adults: Math.max(1, formData.adults - 1) })}
                      className="text-white text-lg font-bold px-2 hover:text-amber-400"
                    >-</button>
                    <span className="font-bold text-white">{formData.adults}</span>
                    <button 
                      type="button"
                      onClick={() => setFormData({ ...formData, adults: formData.adults + 1 })}
                      className="text-white text-lg font-bold px-2 hover:text-amber-400"
                    >+</button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Children (5-11 yrs)
                  </label>
                  <div className="flex items-center justify-between bg-[#07131d] px-3 py-1.5 rounded-xl border border-white/15">
                    <button 
                      type="button"
                      onClick={() => setFormData({ ...formData, children: Math.max(0, formData.children - 1) })}
                      className="text-white text-lg font-bold px-2 hover:text-amber-400"
                    >-</button>
                    <span className="font-bold text-white">{formData.children}</span>
                    <button 
                      type="button"
                      onClick={() => setFormData({ ...formData, children: formData.children + 1 })}
                      className="text-white text-lg font-bold px-2 hover:text-amber-400"
                    >+</button>
                  </div>
                </div>
              </div>

              {/* Meal Preference */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Meal / Food Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Pure Veg', 'Jain Food', 'Non-Veg', 'No Restriction'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setFormData({ ...formData, mealPref: m })}
                      className={`p-2 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.mealPref === m 
                          ? 'border-amber-400 bg-amber-400/20 text-amber-300' 
                          : 'border-white/10 bg-[#07131d] text-slate-300'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: Preferences & Upgrades */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-[#07131d] p-4 rounded-2xl border border-white/10 space-y-3">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                  Custom Inclusions & Add-Ons
                </h4>

                {/* Ex-Mumbai Flight / Train assistance */}
                <label className="flex items-start gap-3 p-3 rounded-xl bg-[#0b1e2d] border border-white/5 cursor-pointer hover:border-white/20">
                  <input
                    type="checkbox"
                    checked={formData.flightAssistance}
                    onChange={(e) => setFormData({ ...formData, flightAssistance: e.target.checked })}
                    className="mt-1 rounded border-slate-700 text-amber-500 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">Include Mumbai to Dehradun / Delhi Travel Coordination</div>
                    <div className="text-[11px] text-slate-400">
                      Our desk books flights/train tickets at zero markup and syncs airport driver pickup.
                    </div>
                  </div>
                </label>

                {/* Activity Upgrade */}
                <label className="flex items-start gap-3 p-3 rounded-xl bg-[#0b1e2d] border border-white/5 cursor-pointer hover:border-white/20">
                  <input
                    type="checkbox"
                    checked={formData.addonHeliRafting}
                    onChange={(e) => setFormData({ ...formData, addonHeliRafting: e.target.checked })}
                    className="mt-1 rounded border-slate-700 text-amber-500 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">
                      Priority Activity Upgrade (+₹2,500/guest)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Kedarnath VIP darshan pass assistance / 24 KM River Rafting / Sunset luxury speedboat cruise in Mumbai.
                    </div>
                  </div>
                </label>

                {/* Travel Insurance */}
                <label className="flex items-start gap-3 p-3 rounded-xl bg-[#0b1e2d] border border-white/5 cursor-pointer hover:border-white/20">
                  <input
                    type="checkbox"
                    checked={formData.addonInsurance}
                    onChange={(e) => setFormData({ ...formData, addonInsurance: e.target.checked })}
                    className="mt-1 rounded border-slate-700 text-amber-500 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">
                      Comprehensive Himalayan Travel & Medical Cover (+₹499/guest)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Covers medical evacuation, altitude illness treatment, and baggage loss.
                    </div>
                  </div>
                </label>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Any Special Notes or Accessibility Requests
                </label>
                <textarea
                  rows="2"
                  value={formData.specialReq}
                  onChange={(e) => setFormData({ ...formData, specialReq: e.target.value })}
                  placeholder="e.g. Traveling with senior citizens, need ground floor rooms, wheelchair assistance..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07131d] border border-white/15 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Live Cost Summary Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#07131d] to-[#0a1824] border border-amber-400/30 space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Base Package ({formData.adults} Adults, {formData.children} Children):</span>
                  <span className="font-bold text-white">₹{baseSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {insuranceCost > 0 && (
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Medical & Travel Cover:</span>
                    <span className="font-bold text-white">₹{insuranceCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {addonActivityCost > 0 && (
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Priority Experience Addon:</span>
                    <span className="font-bold text-white">₹{addonActivityCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="border-t border-white/10 pt-2 flex justify-between items-baseline">
                  <div>
                    <div className="text-sm font-bold text-white">Estimated Package Cost:</div>
                    <div className="text-[11px] text-emerald-400">Zero booking fee • Instant callback</div>
                  </div>
                  <div className="text-2xl font-black text-amber-400 font-display">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* STEP 3: Reservation Confirmed Voucher */}
          {step === 3 && (
            <div className="space-y-5 text-center py-2">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 animate-in zoom-in">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400">
                  Inquiry Successfully Received
                </span>
                <h3 className="text-2xl font-black text-white font-display">
                  We Have Received Your Tour Inquiry!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Inquiry Reference: <span className="font-mono font-bold text-amber-400 bg-black/40 px-2 py-0.5 rounded">{bookingRef}</span>
                </p>
              </div>

              {/* Voucher Preview Card */}
              <div className="bg-[#07131d] rounded-2xl p-4 text-left border border-white/10 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-xs text-slate-400">Tour Package</span>
                  <span className="text-xs font-bold text-white">{pkg.title}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-xs text-slate-400">Lead Traveler</span>
                  <span className="text-xs font-bold text-white">{formData.fullName} ({formData.city})</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-xs text-slate-400">Travel Date</span>
                  <span className="text-xs font-bold text-amber-400">{formData.departureDate} ({pkg.duration})</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-xs text-slate-400">Party Size</span>
                  <span className="text-xs font-bold text-white">{formData.adults} Adults, {formData.children} Children</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-xs text-slate-400">Estimated Package Cost</span>
                    <div className="text-lg font-black text-amber-400">₹{totalAmount.toLocaleString('en-IN')}</div>
                  </div>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-400/20 font-bold">
                    Inquiry Received
                  </span>
                </div>
              </div>

              {/* Immediate WhatsApp & Download Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-transform hover:scale-105 active:scale-95"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

                <button
                  onClick={handleDownloadSummary}
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 border border-white/20 transition-all"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Inquiry Summary</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400">
                Our Mumbai concierge will call you on <span className="text-white font-medium">{formData.phone}</span> within 30 minutes to discuss hotel choices & customized options.
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {step < 3 && (
          <div className="bg-[#07131d] px-6 py-4 border-t border-white/10 flex items-center justify-between">
            {step === 2 ? (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white font-medium"
              >
                ← Back to Details
              </button>
            ) : (
              <span className="text-xs text-slate-400">🔒 100% Free Inquiry & Price Match</span>
            )}

            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleNextStep}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-70 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>{step === 1 ? "Next: Preferences & Upgrades" : "Send Inquiry"}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
