export function auth(cookies, redirect) {
    const token = cookies.get('accessToken')?.value;
    console.log(token)
    if (!token) throw new Error("bad token")
}