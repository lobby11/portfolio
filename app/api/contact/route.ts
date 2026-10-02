import { NextResponse } from "next/server";

// Simple in-memory IP rate limiter: 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "anonymous";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { category, name, email, timeline, organization, description, selectedTracks, honeypot } = body;

    // Honeypot check for spam bots
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!description || typeof description !== "string" || description.trim().length < 5) {
      return NextResponse.json({ error: "Please enter a message description." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactRecipient = process.env.CONTACT_RECIPIENT_EMAIL || "nitiniiitr@gmail.com";

    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [contactRecipient],
          subject: `[Portfolio Inquiry] ${category || "General"} from ${name}`,
          html: `
            <h2>New Contact Inquiry from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
            <p><strong>Organization/Project:</strong> ${organization || "N/A"}</p>
            <p><strong>Interests:</strong> ${Array.isArray(selectedTracks) ? selectedTracks.join(", ") : "N/A"}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f4f4f4; padding: 10px;">${description}</blockquote>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        console.error("Resend API error:", errText);
        return NextResponse.json(
          { error: "Failed to dispatch email via Resend API.", fallbackMailto: true },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, message: "Your message has been sent successfully!" });
    }

    // If env var is missing, report success so frontend opens mailto fallback smoothly
    return NextResponse.json({
      success: true,
      fallbackMailto: true,
      message: "Form verified! Direct mail client fallback initialized.",
    });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
