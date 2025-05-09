import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, i as renderComponent } from '../../chunks/astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import 'clsx';
import { C as Circles } from '../../chunks/Circles_C2MmP2nu.mjs';
/* empty css                                    */
import { $ as $$Layout } from '../../chunks/Layout_Cic49wVH.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("http://192.168.178.48:4321/");
const $$Login$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Login$1;
  const { error } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<section class="section" data-astro-cid-b2fdlob7> <form id="login-form" method="POST" action="/api/login" data-astro-cid-b2fdlob7> <div class="form-inner" data-astro-cid-b2fdlob7> <img', ' alt="" data-astro-cid-b2fdlob7> ', ' <h1 data-astro-cid-b2fdlob7>Login</h1> <input type="password" name="password" id="password" placeholder="Passwort" data-astro-cid-b2fdlob7> <input type="submit" value="Anmelden" data-astro-cid-b2fdlob7> </div> </form> </section> <script>\n  const form = document.getElementById("login-form");\n\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n\n    const formData = new FormData(form);\n    const res = await fetch("/api/login", {\n      method: "POST",\n      body: formData,\n      credentials: "include", // wichtig wegen Cookies\n    });\n\n    if (res.status === 200) {\n      window.location.href = "/";\n    } else {\n      alert("Falsches Passwort, bitte erneut versuchen.");\n    }\n  });\n<\/script> '])), maybeRenderHead(), addAttribute(Circles.src, "src"), error ? renderTemplate`<div class="error" data-astro-cid-b2fdlob7> <small data-astro-cid-b2fdlob7>Falsches Passwort</small> </div>` : null);
}, "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/components/Login.astro", void 0);

const $$Astro = createAstro("http://192.168.178.48:4321/");
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const { url } = Astro2.request;
  const error = new URL(url).searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Login", $$Login$1, { "error": error })} ` })}`;
}, "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/pages/[lang]/login.astro", void 0);

const $$file = "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/pages/[lang]/login.astro";
const $$url = "/[lang]/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
