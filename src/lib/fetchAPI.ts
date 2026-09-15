import { cookies } from "next/headers";

const AUTH_COOKIE = "darkbay_token";

export async function fetchAPI(path: string, options: RequestInit = {}) {
	const cookieStore = await cookies();
	const token = cookieStore.get(AUTH_COOKIE)?.value;

	const headers = new Headers(options.headers);

	if (token) {
		headers.set("Authorization", `Bearer ${token}`);
	}

	return fetch(`${process.env.NEXT_PUBLIC_DARKBAY_API_URL}${path}`, {
		...options,
		headers,
	});
}
