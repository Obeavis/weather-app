import useLocationWeatherData from "@/hooks/useLocationWeatherData";
import { countries } from "@/libs/countries";
import { cn } from "@/libs/utils";
import { ArrowDown, ArrowUp, MousePointer2 } from "lucide-react";
import { toast } from "react-toastify";
import CelsiusCard from "@/components/CelsiusCard";
import Spinner from "@/components/Spinner";

interface WeatherCardProps {
	queryKey: string;
	location: {
		lat: number;
		lon: number;
	};
	classname?: string;
	showError?: boolean;
}

const WeatherCard = ({ queryKey, location, classname, showError }: WeatherCardProps) => {
	const {
		weather,
		isLoading,
		weatherError,
		location: locationData,
	} = useLocationWeatherData(location.lat, location.lon, queryKey);

	const country = countries.find((country) => country.code === locationData?.[0]?.country);

	if (weatherError || showError) {
		toast.error("Error getting weather data.");
		return (
			<div className={cn("flex flex-col items-center justify-center gap-4 p-5 h-full w-full", classname)}>
				<h2 className="text-base">Sorry, something went wrong...</h2>
				<img
					className="w-auto h-auto max-w-40"
					src="/images/sad-cloud.png"
					alt={weather?.weather[0].description}
				/>
			</div>
		);
	}

	if (isLoading)
		return (
			<div className={cn("flex flex-col gap-4 p-5 h-full w-full items-center justify-center", classname)}>
				<Spinner />
			</div>
		);

	return (
		<div className={cn("flex flex-col gap-4 p-5 h-full w-full", classname)}>
			<div className="flex justify-between">
				<div className="flex flex-col">
					<div className="flex items-start gap-1">
						<div>
							<p>{locationData?.[0]?.name}</p>
							<p>{country?.name}</p>
						</div>

						<MousePointer2 fill="white" size={16} className="rotate-90 mt-1" />
					</div>
					<div className="flex grow items-end">
						<CelsiusCard celsius={Math.floor(weather?.main?.temp ?? 0)} />
					</div>
				</div>

				<div className="flex flex-col items-end">
					<div className="flex">
						<p className="capitalize">{weather?.weather[0].description}</p>
					</div>
					<div className="flex text-xl ">
						<div className="flex">
							{weather?.weather[0]?.icon && (
								<img
									className="w-14 h-14"
									src={`${import.meta.env.VITE_OPEN_WEATHER_ICON_URL}/${weather?.weather[0]?.icon}@2x.png`}
									alt={weather?.weather[0].description}
								/>
							)}
						</div>
						<div>
							<div className="flex items-center gap-1">
								<ArrowUp size={16} />
								<span>{Math.floor(weather?.main?.temp_max ?? 0)}°</span>
							</div>
							<div className="flex items-center gap-1 opacity-70">
								<ArrowDown size={16} />
								<span>{Math.floor(weather?.main?.temp_min ?? 0)}°</span>
							</div>
						</div>
					</div>
					<div className="flex grow items-end">
						<p>Pressure {weather?.main?.pressure} hPa</p>
					</div>
				</div>
			</div>

			<div className="flex grow justify-between gap-5">
				<div className="flex items-center">
					<video width="60" height="40" autoPlay loop muted>
						<source src="/images/wind.webm" type="video/webm" />
					</video>
					<div>
						<p>{weather?.wind?.speed} m/s</p>
						<p>Wind speed</p>
					</div>
				</div>
				<div className="flex items-center">
					<video width="40" height="40" autoPlay loop muted>
						<source src="/images/humidity.webm" type="video/webm" />
					</video>
					<div>
						<p>{weather?.main?.humidity}%</p>
						<p>Humidity</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherCard;
