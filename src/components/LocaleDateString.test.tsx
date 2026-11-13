import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LocaleDateString from "@/components/LocaleDateString";

describe("LocaleDateString", () => {
	it("formats the date in German format and UTC", () => {
		const { container } = render(
			<LocaleDateString date={new Date("2026-11-14T08:05:09.000Z")} />,
		);

		expect(container).toHaveTextContent("14.11.2026, 08:05:09");
	});
});
