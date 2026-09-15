"use server";

import { loginAction } from "@/lib/authActions.service";
import { cookies } from "next/headers";
import { redirect, unauthorized } from "next/navigation";

const AUTH_COOKIE = "darkbay_token";

export async function loginUser(formData: FormData) {
	const username = formData.get("username") as string;
	const password = formData.get("password") as string;

	const authData = await loginAction({ username, password });

	if (authData.statusCode === 401 || !authData.access_token) {
		unauthorized();
	}

	const cookieStore = await cookies();

	cookieStore.set(AUTH_COOKIE, authData.access_token, {
		httpOnly: true,
		//secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 60 * 60, // 1 hour
	});

	//revalidatePath("/auctions");
	redirect("/auctions");
}

export async function logoutUser() {
	const cookieStore = await cookies();

	cookieStore.delete(AUTH_COOKIE);

	redirect("/");
}
