# Mumbai Tours & Travels (Mumbai & Uttarakhand Journeys)

A modern, responsive, and interactive travel business website built with **React**, **Vite**, **Tailwind CSS**, and **Supabase Backend Database**.

## 🚀 Supabase Cloud Backend Integration

The website is connected to a dedicated Supabase project created in your organization:
- **Project Name**: `Mumbai Travels`
- **Project ID**: `cvndurgtzvplfyzpvlqp`
- **Region**: `ap-south-1` (Mumbai, India)
- **Status**: `ACTIVE_HEALTHY`
- **Database Tables**:
  1. `public.package_inquiries`: Stores every tour package inquiry submitted via the booking modal (lead traveler name, WhatsApp, email, city, dates, adults, children, meal preferences, flight assistance, special requests, and estimated cost).
  2. `public.custom_trip_inquiries`: Stores custom tailor-made tour requests generated via the Custom Trip Builder (origin city, duration, party size, multi-selected destinations in Mumbai & Uttarakhand, stay category, vehicle type, and estimated budget).
  3. `public.newsletter_subscribers`: Stores subscriber emails from the website footer.
  4. **Row Level Security (RLS)**: Configured with policies allowing public submission while protecting administrative data.

## 🌟 Key Features

### 1. Hero Showcase (Reference Design Replica)
- **Atmospheric Background Carousel**: Cinematic high-resolution backdrops featuring Uttarakhand Himalayan peaks and Mumbai coastal heritage with smooth crossfades and auto-advance.
- **Vertical Track Counter**: Slide indicator with interactive progress dots (`01 / 06`).
- **Bold Typography & Watermark**: Clean display typography (`UTTARAKHAND`, `MUMBAI`, `RISHIKESH`, `AULI`) paired with ambient background ghost typography (`DEVBHOOMI`, `MAXIMUM CITY`).
- **Floating Destination Cards**: Interactive right-hand carousel cards showcasing upcoming locations with thumbnail photos, rating dots, prices, and bookmark buttons. Clicking any card switches the active showcase hero!
- **Circular Prev / Next Controls**: Smooth manual navigation with a bottom slider progress bar.

### 2. Tailored for Mumbai & Uttarakhand
- **Mumbai Offerings**:
  - South Mumbai Heritage, Art Deco & Elephanta Caves UNESCO cruise
  - Marine Drive, Queen's Necklace, Bandra-Worli Sea Link & Chowpatty street food walk
  - Bollywood Film City studio behind-the-scenes passes
  - Alibaug speedboat getaways & Lonavala Western Ghats weekend retreats
- **Uttarakhand Offerings**:
  - Kedarnath & Badrinath Sacred Do Dham Yatra (with helicopter & biometric token support)
  - Rishikesh White Water Rafting, Riverside Camping & Parmarth Niketan Ganga Aarti
  - Auli Snow Meadows skiing & Chopta-Chandrashila Himalayan trek
  - Nainital Lake boating & Mussoorie colonial hill station holidays
  - Jim Corbett National Park open 4x4 Jeep tiger safaris

### 3. Interactive Booking & Reservation Flow
- **3-Step Reservation Engine**:
  - **Step 1**: Traveler details (Full name, WhatsApp number, email, departure city, travel date, guests, meal preferences like Pure Veg / Jain).
  - **Step 2**: Custom upgrades (Mumbai-to-Dehradun flight/train coordination, helicopter darshan upgrade, travel insurance).
  - **Step 3**: Instant confirmed voucher with official reference code (e.g., `AY-UTK-48192`), live price calculation, confetti celebration, 1-click WhatsApp booking confirmation, and downloadable text voucher!

### 4. Custom Trip Builder ("Design Your Dream Tour")
- Interactive tool allowing travelers to combine destinations between Mumbai and Uttarakhand, choose duration (2 to 14 days), select party size, choose stay style (Standard 3★, Deluxe 4★, Luxury Heritage), and select vehicle type (Dzire Sedan, Innova Crysta, Tempo Traveller) with real-time price estimation.

### 5. In-Depth Tour Package Modal
- Photo gallery with thumbnail switching.
- Day-wise detailed itinerary with interactive timeline steps.
- Complete Inclusions vs Exclusions breakdown.
- Live price calculator adjusting dynamically for adults, children, and room upgrades.

### 6. Interactive Search & Filters
- Real-time search by location, activity, or keyword.
- Region toggles: *All*, *Uttarakhand (Devbhoomi)*, *Mumbai & Coast*.
- Category chips: *Spiritual*, *Adventure*, *Heritage*, *Wildlife*, *Family & Honeymoon*, *Weekend Getaway*.
- Duration filter: *2-3 Days*, *4-5 Days*, *6+ Days*.
- Sorting by Price (Low/High), Rating, and Duration.

### 7. Wishlist / Saved Drawer
- Bookmark any package from the hero cards or packages grid.
- Stored persistently in browser `localStorage`.
- Quick comparison and direct booking from the drawer.

### 8. Full Responsiveness & Performance
- Mobile-optimized navigation with touch-friendly drawer menu.
- Tablet and desktop grid layouts with flexible scaling.
- Lightweight production build with optimized CSS and asset bundling.

---

## 🚀 Running the Website Locally

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start the Vite development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

Open your browser at `http://localhost:5173`.
