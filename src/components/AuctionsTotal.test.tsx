import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AuctionsTotal from "@/components/AuctionsTotal";

describe("AuctionsTotal", () => {
	it("shows the range of the current page", () => {
		render(<AuctionsTotal meta={{ page: 2, limit: 10, total: 25, totalPages: 3 }} />);

		expect(screen.getByText("Showing auctions 11–20 of 25")).toBeInTheDocument();
	});

	it("ends the range at the total on the last page", () => {
		render(<AuctionsTotal meta={{ page: 3, limit: 10, total: 25, totalPages: 3 }} />);

		expect(screen.getByText("Showing auctions 21–25 of 25")).toBeInTheDocument();
	});
});
