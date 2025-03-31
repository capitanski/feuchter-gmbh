import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_CofuBfMf.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("http://192.168.178.48:4321/");
const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { heading, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-svshx33u> <div class="form-wrapper" data-astro-cid-svshx33u> <h2 class="animatable" data-astro-cid-svshx33u> ${heading} </h2> <p class="subtitle animatable" data-astro-cid-svshx33u>${subtitle}</p> <form method="POST" action="/api/kontakt" data-astro-cid-svshx33u> <div data-astro-cid-svshx33u> <label for="name" data-astro-cid-svshx33u>Name:</label> <input name="name" type="text" required data-astro-cid-svshx33u> </div> <div data-astro-cid-svshx33u> <label for="email" data-astro-cid-svshx33u>E-Mail:</label> <input name="email" type="email" required data-astro-cid-svshx33u> </div> <div data-astro-cid-svshx33u> <label for="message" data-astro-cid-svshx33u>Nachricht:</label> <textarea name="message" required data-astro-cid-svshx33u></textarea> </div> <button type="submit" data-astro-cid-svshx33u>Senden</button> </form> </div> <div class="contact-data" data-astro-cid-svshx33u> <p data-astro-cid-svshx33u>+49 123456789</p> <p data-astro-cid-svshx33u>office@feuchter.com</p> <p data-astro-cid-svshx33u>Feuchter GmbH</p> <p data-astro-cid-svshx33u>Innbruckstraße 10</p> <p data-astro-cid-svshx33u>4780 Schärding AT</p> </div> </div> `;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/ContactForm.astro", void 0);

export { $$ContactForm as $ };
