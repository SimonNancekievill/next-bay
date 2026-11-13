import { beforeEach, describe, expect, it, vi } from "vitest";

import { isAuthenticated, loginAction } from "@/app/action";
import { loginUser } from "@/lib/auth.service";

const cookieStore = { get: vi.fn(), set: vi.fn(), delete: vi.fn() };
vi.mock("next/headers", () => ({ cookies: () => Promise.resolve(cookieStore) }));
vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));
vi.mock("next/navigation", () => ({
	redirect: vi.fn(),
	unauthorized: vi.fn(() => {
		throw new Error("unauthorized");
	}),
}));
vi.mock("@/lib/auth.service", () => ({ loginUser: vi.fn(), registerUser: vi.fn() }));

const { redirect } = await import("next/navigation");

function loginForm() {
	const formData = new FormData();
	formData.set("username", "anna");
	formData.set("password", "secret123");
	return formData;
}

describe("loginAction", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.unstubAllEnvs();
	});

	it("stores the token in an httpOnly cookie and redirects to the auctions", async () => {
		vi.mocked(loginUser).mockResolvedValue({ access_token: "abc" });

		await loginAction(loginForm());

		expect(cookieStore.set).toHaveBeenCalledWith(
			"darkbay_token",
			"abc",
			expect.objectContaining({ httpOnly: true }),
		);
		expect(redirect).toHaveBeenCalledWith("/auctions");
	});

	it("sends the cookie over HTTP outside production, so local login works", async () => {
		vi.mocked(loginUser).mockResolvedValue({ access_token: "abc" });

		await loginAction(loginForm());

		expect(cookieStore.set).toHaveBeenCalledWith(
			"darkbay_token",
			"abc",
			expect.objectContaining({ secure: false }),
		);
	});

	it("only sends the cookie over HTTPS in production", async () => {
		vi.stubEnv("NODE_ENV", "production");
		vi.mocked(loginUser).mockResolvedValue({ access_token: "abc" });

		await loginAction(loginForm());

		expect(cookieStore.set).toHaveBeenCalledWith(
			"darkbay_token",
			"abc",
			expect.objectContaining({ secure: true }),
		);
	});

	it("rejects wrong credentials without setting a cookie", async () => {
		vi.mocked(loginUser).mockResolvedValue({ message: "Unauthorized", statusCode: 401 });

		await expect(loginAction(loginForm())).rejects.toThrow("unauthorized");
		expect(cookieStore.set).not.toHaveBeenCalled();
	});
});

describe("isAuthenticated", () => {
	it("is true when the auth cookie is set", async () => {
		cookieStore.get.mockReturnValue({ value: "abc" });

		expect(await isAuthenticated()).toBe(true);
	});

	it("is false without the auth cookie", async () => {
		cookieStore.get.mockReturnValue(undefined);

		expect(await isAuthenticated()).toBe(false);
	});
});
