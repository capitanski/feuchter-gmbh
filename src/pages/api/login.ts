import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const formData = await request.formData();
    const password = formData.get('password');

    if (password === 'feuchtergmbh25') {
        cookies.set('accessToken', 'ok', { httpOnly: true, path: '/' });
        return new Response(null, { status: 200 }); // Einfach 200 OK
    }

    return new Response(null, { status: 401 }); // Unauthorized
};
