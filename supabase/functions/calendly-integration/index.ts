import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const CALENDLY_API_TOKEN = Deno.env.get("CALENDLY_API_TOKEN");
    if (!CALENDLY_API_TOKEN) {
      throw new Error("CALENDLY_API_TOKEN is not configured");
    }

    const { action, data } = await req.json();
    console.log("Calendly integration called:", action, data);

    const calendlyHeaders = {
      "Authorization": `Bearer ${CALENDLY_API_TOKEN}`,
      "Content-Type": "application/json",
    };

    // Get user URI first (needed for most operations)
    const userResponse = await fetch("https://api.calendly.com/users/me", {
      headers: calendlyHeaders,
    });

    if (!userResponse.ok) {
      const errorText = await userResponse.text();
      console.error("Calendly user fetch error:", userResponse.status, errorText);
      throw new Error("Failed to fetch Calendly user");
    }

    const userData = await userResponse.json();
    const userUri = userData.resource.uri;
    console.log("Calendly user URI:", userUri);

    if (action === "get_availability") {
      // Get event types
      const eventTypesResponse = await fetch(
        `https://api.calendly.com/event_types?user=${encodeURIComponent(userUri)}`,
        { headers: calendlyHeaders }
      );

      if (!eventTypesResponse.ok) {
        const errorText = await eventTypesResponse.text();
        console.error("Event types fetch error:", eventTypesResponse.status, errorText);
        throw new Error("Failed to fetch event types");
      }

      const eventTypesData = await eventTypesResponse.json();
      console.log("Event types:", eventTypesData);

      if (!eventTypesData.collection || eventTypesData.collection.length === 0) {
        return new Response(
          JSON.stringify({ 
            error: "Keine Event-Types gefunden. Bitte erstelle zuerst einen Event-Type in Calendly." 
          }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      // Use the first active event type
      const activeEventType = eventTypesData.collection.find((et: any) => et.active === true);
      if (!activeEventType) {
        return new Response(
          JSON.stringify({ 
            error: "Kein aktiver Event-Type gefunden. Bitte aktiviere einen Event-Type in Calendly." 
          }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      const eventType = activeEventType;
      const eventTypeUri = eventType.uri;

      // Get availability for the next 7 days, starting from now + 1 hour to ensure it's in the future
      const startDate = new Date();
      startDate.setHours(startDate.getHours() + 1);
      startDate.setMinutes(0, 0, 0); // Round to full hour
      
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 7);

      const availabilityResponse = await fetch(
        `https://api.calendly.com/event_type_available_times?event_type=${encodeURIComponent(eventTypeUri)}&start_time=${startDate.toISOString()}&end_time=${endDate.toISOString()}`,
        { headers: calendlyHeaders }
      );

      if (!availabilityResponse.ok) {
        const errorText = await availabilityResponse.text();
        console.error("Availability fetch error:", availabilityResponse.status, errorText);
        throw new Error("Failed to fetch availability");
      }

      const availabilityData = await availabilityResponse.json();
      console.log("Availability data:", availabilityData);

      return new Response(
        JSON.stringify({
          eventType: {
            name: eventType.name,
            duration: eventType.duration,
            uri: eventTypeUri,
          },
          availableTimes: availabilityData.collection || [],
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (action === "book_appointment") {
      const { email, name, eventTypeUri, startTime, timezone } = data;

      if (!email || !name || !eventTypeUri || !startTime) {
        throw new Error("Missing required fields for booking");
      }

      // Create invitee for the booking
      const bookingData = {
        event_type: eventTypeUri,
        start_time: startTime,
        timezone: timezone || "Europe/Berlin",
        invitee: {
          email: email,
          name: name,
        },
      };

      console.log("Booking data:", bookingData);

      const bookingResponse = await fetch("https://api.calendly.com/scheduled_events", {
        method: "POST",
        headers: calendlyHeaders,
        body: JSON.stringify(bookingData),
      });

      if (!bookingResponse.ok) {
        const errorText = await bookingResponse.text();
        console.error("Booking error:", bookingResponse.status, errorText);
        throw new Error(`Failed to book appointment: ${errorText}`);
      }

      const bookingResult = await bookingResponse.json();
      console.log("Booking successful:", bookingResult);

      return new Response(
        JSON.stringify({
          success: true,
          event: bookingResult.resource,
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    throw new Error("Invalid action");
  } catch (e) {
    console.error("Calendly integration error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
