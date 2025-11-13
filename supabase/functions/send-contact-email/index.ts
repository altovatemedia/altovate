import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Initialize Resend with API key from secrets
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  type?: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  projectType?: string;
  instagram?: string;
  website?: string;
  problem?: string;
  description?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ContactEmailRequest = await req.json();
    const { 
      type, 
      firstName, 
      lastName, 
      email, 
      company, 
      phone, 
      message,
      projectType,
      instagram,
      website,
      problem,
      description
    } = requestData;

    console.log("Sending contact email from:", email, "Type:", type);

    let subject = `Neue Kontaktanfrage von ${firstName} ${lastName}`;
    let htmlContent = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
    `;

    // Customize email based on type
    if (type === 'software') {
      subject = `Neue Software/KI-Anfrage von ${firstName} ${lastName}`;
      htmlContent += `
        ${projectType ? `<p><strong>Projekt-Typ:</strong> ${projectType}</p>` : ''}
        <p><strong>Nachricht:</strong></p>
        <p>${message?.replace(/\n/g, '<br>') || 'Keine Nachricht'}</p>
      `;
    } else if (type === 'erstkontakt') {
      subject = `Erstgesprächs-Anfrage von ${firstName} ${lastName}`;
      htmlContent += `
        ${instagram ? `<p><strong>Instagram:</strong> ${instagram}</p>` : ''}
        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
        ${problem ? `<p><strong>Größtes Problem:</strong> ${problem}</p>` : ''}
        <p><strong>Beschreibung der Situation:</strong></p>
        <p>${description?.replace(/\n/g, '<br>') || 'Keine Beschreibung'}</p>
      `;
    } else {
      // Default contact form
      htmlContent += `
        <p><strong>Nachricht:</strong></p>
        <p>${message?.replace(/\n/g, '<br>') || 'Keine Nachricht'}</p>
      `;
    }

    // Email an alex@altovate.de mit den Kontaktdaten
    const emailResponse = await resend.emails.send({
      from: "Altovate Kontaktformular <onboarding@resend.dev>",
      to: ["alex@altovate.de"],
      replyTo: email,
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
