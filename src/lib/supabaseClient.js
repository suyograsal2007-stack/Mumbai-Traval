import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://cvndurgtzvplfyzpvlqp.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2bmR1cmd0enZwbGZ5enB2bHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxNzgzNDksImV4cCI6MjEwODc1NDM0OX0.4cwIkeXC2ihTJ2vKHUgxvx7pyIqOGglvgdUOoqO-sR0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Persist tour package inquiries to Supabase
 */
export async function submitPackageInquiry(data) {
  try {
    const { data: inserted, error } = await supabase
      .from('package_inquiries')
      .insert([
        {
          inquiry_ref: data.inquiryRef,
          package_id: data.packageId,
          package_title: data.packageTitle,
          package_destination: data.packageDestination,
          package_state: data.packageState,
          full_name: data.fullName,
          phone: data.phone,
          email: data.email || null,
          city: data.city || 'Mumbai',
          departure_date: data.departureDate,
          adults: parseInt(data.adults || 2, 10),
          children: parseInt(data.children || 0, 10),
          meal_preference: data.mealPref || 'Pure Veg',
          flight_assistance: Boolean(data.flightAssistance),
          addon_activity: Boolean(data.addonHeliRafting),
          addon_insurance: Boolean(data.addonInsurance),
          special_requests: data.specialReq || null,
          estimated_total: parseFloat(data.estimatedTotal || 0)
        }
      ])
      .select();

    if (error) {
      console.error('Supabase package inquiry error:', error);
      return { success: false, error };
    }
    return { success: true, data: inserted };
  } catch (err) {
    console.error('Unexpected error inserting package inquiry:', err);
    return { success: false, error: err };
  }
}

/**
 * Persist custom tailor-made trip requests to Supabase
 */
export async function submitCustomTripInquiry(data) {
  try {
    const { data: inserted, error } = await supabase
      .from('custom_trip_inquiries')
      .insert([
        {
          full_name: data.fullName,
          phone: data.phone,
          origin_city: data.originCity || 'Mumbai',
          duration_days: parseInt(data.duration || 6, 10),
          party_size: parseInt(data.partySize || 2, 10),
          destinations: data.destinations || [],
          hotel_type: data.hotelType || 'deluxe',
          vehicle_type: data.vehicle || 'innova',
          travel_month: data.travelMonth || null,
          estimated_cost_per_person: parseFloat(data.estimatedCost || 0)
        }
      ])
      .select();

    if (error) {
      console.error('Supabase custom trip inquiry error:', error);
      return { success: false, error };
    }
    return { success: true, data: inserted };
  } catch (err) {
    console.error('Unexpected error inserting custom trip inquiry:', err);
    return { success: false, error: err };
  }
}

/**
 * Persist newsletter subscribers to Supabase
 */
export async function subscribeNewsletter(email) {
  try {
    const { data: inserted, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select();

    if (error) {
      // If already subscribed (unique constraint), treat as success or inform
      if (error.code === '23505') {
        return { success: true, message: 'Already subscribed' };
      }
      console.error('Supabase newsletter subscribe error:', error);
      return { success: false, error };
    }
    return { success: true, data: inserted };
  } catch (err) {
    console.error('Unexpected error subscribing newsletter:', err);
    return { success: false, error: err };
  }
}
