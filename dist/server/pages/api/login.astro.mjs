export { renderers } from '../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const password = formData.get("password");
  if (password === "feuchtergmbh25") {
    cookies.set("accessToken", "ok", { httpOnly: true, path: "/" });
    return new Response(null, { status: 200 });
  }
  return new Response(null, { status: 401 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
