
import { Resend } from "resend";

export async function POST(request) {
  try {
    const { name, email, subject, message } =
      await request.json();

    // Validate the submitted fields.
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !message.trim() ||
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 100 ||
      message.length > 2000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return Response.json(
        { error: "Please provide valid form details." },
        { status: 400 }
      );
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_TO_EMAIL
    ) {
      console.error("Email environment variables are missing.");

      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Clutter Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email.trim(),
      subject: `Clutter Contact: ${subject.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Subject: ${subject.trim()}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Unable to send your message right now." },
        { status: 502 }
      );
    }

    return Response.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
