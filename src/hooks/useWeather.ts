import { getWeather } from "@/services/WeatherService";
import { useQuery } from "@tanstack/react-query";

interface WeatherResponse {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
		sea_level: number;
		grnd_level: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export const useWeather = (lat: number, lon: number, queryKey: string) => {
	return useQuery<WeatherResponse, Error>({
		queryKey: [`weather-${queryKey}`, lat, lon],
		queryFn: () => getWeather(lat, lon),
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchOnWindowFocus: false,
		enabled: lat !== 0 && lon !== 0,
		retry: false
	});
};
