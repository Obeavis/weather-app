import { getGeocoding } from "@/services/WeatherService";
import { useQuery } from "@tanstack/react-query";

interface GeocodingResponse {
	name: string;
	local_names: {
		[key: string]: string;
	};
	lat: number;
	lon: number;
	country: string;
	state: string;
}

export const useGeocoding = (lat: number, lon: number, queryKey: string) => {
	return useQuery<GeocodingResponse[], Error>({
		queryKey: [`geocoding-${queryKey}`, lat, lon],
		queryFn: () => getGeocoding(lat, lon),
		refetchOnWindowFocus: false,
		enabled: lat !== 0 && lon !== 0,
	});
};
