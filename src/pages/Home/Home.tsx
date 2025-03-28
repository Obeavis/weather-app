import WeatherCard from "@/components/WeatherCard";
import useGeolocation from "@/hooks/useGeolocation";
import { cities } from "@/libs/cities";
import { formatDate } from "@/libs/utils";
import { toast } from "react-toastify";

const Home = () => {
	const { location, error } = useGeolocation();

	const date = new Date();
	const formattedDate = formatDate(date);

	if (error) {
		toast.error("Error getting location data.");
	}

	return (
		<div className="bg-background min-w-screen min-h-screen flex flex-col items-center justify-center">
			<div className="flex container justify-center bg-gradient-to-t from-sky-900 to-slate-800 xl:max-w-[75%] h-full lg:h-[90%] md:rounded-4xl shadow-2xl p-10">
				<div className="flex flex-col items-center w-full gap-2">
					<h2 className="text-xl">{formattedDate}</h2>
					<div className="flex flex-col h-full w-full items-center justify-between gap-10">
						<WeatherCard
							classname="text-base max-w-[20rem]"
							queryKey="current"
							location={{ lat: location?.lat ?? 0, lon: location?.lon ?? 0 }}
							showError={!!error}
						/>
						<div className="flex flex-col xl:flex-row grow h-full w-full gap-10">
							<WeatherCard
								classname="bg-gradient-to-b from-green-400 to-blue-400 text-xs rounded-4xl shadow-2xl"
								queryKey="joinville"
								location={cities.joinville?.location}
							/>
							<WeatherCard
								classname="bg-gradient-to-b from-amber-400 to-orange-800 text-xs rounded-4xl shadow-2xl"
								queryKey="sanFrancisco"
								location={cities.sanFrancisco?.location}
							/>
							<WeatherCard
								classname="bg-gradient-to-b from-green-500 to-yellow-300 text-xs rounded-4xl shadow-2xl"
								queryKey="urubici"
								location={cities.urubici?.location}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
