// src/pages/api/kontakt.ts
import type { APIRoute } from "astro";
import type { M } from "docs/server/chunks/astro/server_CofuBfMf.mjs";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();
    const honeypot = formData.get("website");
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();
    if (honeypot) {
        // Wenn das Feld ausgefüllt ist, ist es wahrscheinlich ein Bot
        return new Response("Bot erkannt.", { status: 400 });
    }
    if (!name || !email || !message) {
        return new Response("Alle Felder sind erforderlich.", { status: 400 });
    }

    // Konfiguriere SMTP Transport
    const transporter = nodemailer.createTransport({
        host: "smtp.fastmail.com", // z.B. smtp.gmail.com
        port: 465,
        secure: true,
        auth: {
            user: "felix@futuralistic.de",
            pass: "663p5r86482g4v2r",
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "felix@feuchter-group.de",
            subject: "Neue Kontaktanfrage",
            text: message,
            html: `<p><strong>Von:</strong> ${name} (${email})</p><p>${message}</p>`,
        });

        return new Response("Nachricht erfolgreich gesendet.", { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response("Fehler beim Senden der Nachricht.", { status: 500 });
    }
};
