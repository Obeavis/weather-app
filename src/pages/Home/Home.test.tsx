import { vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import useGeolocation from "@/hooks/useGeolocation";
import { createWrapper } from "@/tests/utils";
import Home from "./Home";

vi.mock("@/hooks/useGeolocation", () => ({
	default: vi.fn(),
}));

vi.mock("@/libs/cities", () => ({
	cities: {
		joinville: { location: { lat: -26.3045, lon: -48.8483 } },
		sanFrancisco: { location: { lat: 37.7749, lon: -122.4194 } },
		urubici: { location: { lat: -28.0156, lon: -49.51 } },
	},
}));

describe("Home", () => {
	const Component = createWrapper(<Home />);

	(useGeolocation as vi.Mock).mockReturnValue({
		location: { lat: -30.0614, lon: -51.1508 },
		error: null,
	});

	it("should render the date correctly", () => {
		const mockDate = "2025-03-28";
		vi.setSystemTime(new Date(mockDate));

		render(<Component />);

		expect(screen.getByText("Thursday, March 27, 2025")).toBeInTheDocument();
	});

	it("should render the geolocation  correctly", async () => {
		render(<Component />);

		await waitFor(() => {
			expect(screen.getByText("Porto Alegre")).toBeInTheDocument();
		});
	});

	it("should render WeatherCard components", async () => {
		render(<Component />);

		await waitFor(() => {
			expect(screen.getByText("Joinville")).toBeInTheDocument();
			expect(screen.getByText("San Francisco")).toBeInTheDocument();
			expect(screen.getByText("Urubici")).toBeInTheDocument();
		});
	});

	it("should display an error message if geolocation fails", async () => {
		(useGeolocation as vi.Mock).mockReturnValue({
			location: null,
			error: "Geolocation error",
		});

		render(<Component />);

		await waitFor(() => {
			expect(screen.getByText("Sorry, something went wrong...")).toBeInTheDocument();
		});
	});
});
