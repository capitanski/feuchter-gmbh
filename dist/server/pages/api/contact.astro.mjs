import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const formData = await request.formData();
  const honeypot = formData.get("website");
  const name = sanitizeHtml(formData.get("name")?.toString(), {
    allowedTags: [],
    allowedAttributes: {}
  });
  const email = sanitizeHtml(formData.get("email")?.toString(), {
    allowedTags: [],
    allowedAttributes: {}
  });
  const message = sanitizeHtml(formData.get("message")?.toString(), {
    allowedTags: [],
    allowedAttributes: {}
  });
  const company = sanitizeHtml(formData.get("company")?.toString(), {
    allowedTags: [],
    allowedAttributes: {}
  });
  const phone = sanitizeHtml(formData.get("tel")?.toString(), {
    allowedTags: [],
    allowedAttributes: {}
  });
  if (honeypot) {
    return new Response("Bot erkannt.", { status: 400 });
  }
  if (!name || !email || !message) {
    return new Response("Alle Felder sind erforderlich.", { status: 400 });
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.fastmail.com",
    // z.B. smtp.gmail.com
    port: 465,
    secure: true,
    auth: {
      user: "felix@futuralistic.de",
      pass: "663p5r86482g4v2r"
    }
  });
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "felix@feuchter-group.de",
      subject: "Neue Kontaktanfrage",
      text: message,
      html: `<p><strong>Von:</strong> ${name} (${email})</p><p>${message}</p>
            <p> <strong>Firma:</strong> ${company}</p>
            <p> <strong>Telefon:</strong> ${phone}</p>
            `
    });
    return new Response("Nachricht erfolgreich gesendet.", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Fehler beim Senden der Nachricht.", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
