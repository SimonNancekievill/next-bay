import { beforeEach, describe, expect, it, vi } from "vitest";

import { fetchAPI } from "@/lib/fetchAPI";

const cookieStore = { get: vi.fn() };
vi.mock("next/headers", () => ({ cookies: () => Promise.resolve(cookieStore) }));

const fetchMock = vi.fn(() => Promise.resolve(new Response("{}")));
vi.stubGlobal("fetch", fetchMock);

function sentHeaders() {
	const [, options] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
	return new Headers(options.headers);
}

describe("fetchAPI", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("sends the token from the cookie as bearer token", async () => {
		cookieStore.get.mockReturnValue({ value: "abc" });

		await fetchAPI("http://api/auctions");

		expect(sentHeaders().get("Authorization")).toBe("Bearer abc");
	});

	it("sends no Authorization header without a cookie", async () => {
		cookieStore.get.mockReturnValue(undefined);

		await fetchAPI("http://api/auctions");

		expect(sentHeaders().has("Authorization")).toBe(false);
	});

	it("keeps the request options and headers", async () => {
		cookieStore.get.mockReturnValue({ value: "abc" });

		await fetchAPI("http://api/auctions", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});

		expect(fetchMock).toHaveBeenCalledWith(
			"http://api/auctions",
			expect.objectContaining({ method: "POST" }),
		);
		expect(sentHeaders().get("Content-Type")).toBe("application/json");
	});
});
