import { useWeather } from "./useWeather";
import { useGeocoding } from "./useGeocoding";

const useLocationWeatherData = (lat: number, lon: number, queryKey: string) => {
	const {
		data: weather,
		isLoading,
		error: weatherError,
	} = useWeather(lat ?? 0, lon ?? 0, queryKey);
	const { data: location, error: locationError } = useGeocoding(lat ?? 0, lon ?? 0, queryKey);
	return { weather, isLoading, weatherError, location, locationError };
};

export default useLocationWeatherData;
