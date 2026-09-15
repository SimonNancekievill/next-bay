import { AuthResponse } from "./types/auth.types";
import { UserCredentials } from "./types/user.types";

export async function loginAction({ username, password }: UserCredentials): Promise<AuthResponse> {
	console.log("loginAction credentials", username, password);
	const response = await fetch(process.env.NEXT_PUBLIC_DARKBAY_API_URL + `/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
	});
	const authData = await response.json();
	console.log(authData);
	// { message: 'Unauthorized', statusCode: 401 }
	return authData;
}

export async function registerAction(): Promise<void> {}

export async function logoutAction(): Promise<void> {}
