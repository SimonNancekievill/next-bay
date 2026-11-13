import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import AuctionsPagination from "@/components/AuctionsPagination";

vi.mock("next/navigation", () => ({ usePathname: () => "/auctions" }));

const meta = (page: number) => ({ page, limit: 10, total: 30, totalPages: 3 });

describe("AuctionsPagination", () => {
	it("only links forward on the first page", () => {
		render(<AuctionsPagination meta={meta(1)} />);

		expect(screen.queryByRole("link", { name: "Back" })).not.toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Forward" })).toHaveAttribute(
			"href",
			"/auctions?page=2",
		);
	});

	it("links both ways on a middle page", () => {
		render(<AuctionsPagination meta={meta(2)} />);

		expect(screen.getByRole("link", { name: "Back" })).toHaveAttribute(
			"href",
			"/auctions?page=1",
		);
		expect(screen.getByRole("link", { name: "Forward" })).toHaveAttribute(
			"href",
			"/auctions?page=3",
		);
		expect(screen.getByText("2 / 3")).toBeInTheDocument();
	});

	it("only links back on the last page", () => {
		render(<AuctionsPagination meta={meta(3)} />);

		expect(screen.getByRole("link", { name: "Back" })).toBeInTheDocument();
		expect(screen.queryByRole("link", { name: "Forward" })).not.toBeInTheDocument();
	});
});
