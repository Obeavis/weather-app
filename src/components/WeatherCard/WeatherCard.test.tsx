import { vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createWrapper } from "@/tests/utils";
import useLocationWeatherData from "@/hooks/useLocationWeatherData";
import WeatherCard from "./WeatherCard";

vi.mock("@/hooks/useLocationWeatherData", () => ({
	__esModule: true,
	default: vi.fn(),
}));

describe("WeatherCard", () => {
	const mockLocation = {
		lat: -30.0614,
		lon: -51.1508,
	};
	const Component = createWrapper(<WeatherCard queryKey="weather" location={mockLocation} />);

	it("should render loading state correctly", () => {
		(useLocationWeatherData as jest.Mock).mockReturnValue({
			weather: null,
			isLoading: true,
			weatherError: null,
			location: [{ name: "Porto Alegre", country: "BR" }],
		});

		render(<Component />);

		expect(screen.getByRole("status")).toBeInTheDocument();
	});

	it("should render weather data correctly", async () => {
		(useLocationWeatherData as jest.Mock).mockReturnValue({
			weather: {
				main: {
					temp: 25,
					temp_max: 30,
					temp_min: 20,
					pressure: 1013,
					humidity: 80,
				},
				weather: [{ description: "Clear sky", icon: "01d" }],
				wind: {
					speed: 5,
				},
			},
			isLoading: false,
			weatherError: null,
			location: [{ name: "Porto Alegre", country: "BR" }],
		});

		render(<Component />);

		expect(screen.getByText("Porto Alegre")).toBeInTheDocument();
		expect(screen.getByText("Clear sky")).toBeInTheDocument();
		expect(screen.getByText("25")).toBeInTheDocument();
		expect(screen.getByText("30°")).toBeInTheDocument();
		expect(screen.getByText("20°")).toBeInTheDocument();
		expect(screen.getByText("Pressure 1013 hPa")).toBeInTheDocument();
		expect(screen.getByText("5 m/s")).toBeInTheDocument();
	});

	it("should render error state correctly", async () => {
		(useLocationWeatherData as jest.Mock).mockReturnValue({
			weather: null,
			isLoading: false,
			weatherError: "Geolocation error",
			location: [{ name: "Porto Alegre", country: "BR" }],
		});

		const Rerender = createWrapper(
			<WeatherCard queryKey="weather" location={mockLocation} showError={true} />,
		);

		render(<Rerender />);

		expect(screen.getByText("Sorry, something went wrong...")).toBeInTheDocument();
	});

	it("should display an error message when weather data fetch fails", async () => {
		const toastError = vi.fn();
		vi.stubGlobal("toast", { error: toastError });

		(useLocationWeatherData as jest.Mock).mockReturnValue({
			weather: null,
			isLoading: false,
			weatherError: "Geolocation error",
			location: [{ name: "Porto Alegre", country: "BR" }],
		});

		render(<Component />);

		await waitFor(() => {
			expect(screen.getByText("Sorry, something went wrong...")).toBeInTheDocument();
		});
	});
});
