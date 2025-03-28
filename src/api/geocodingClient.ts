import axios from "axios";

const geocodingClient = axios.create({
	baseURL: import.meta.env.VITE_OPEN_WEATHER_GEOCODING_API_URL,
	params: {
		appid: import.meta.env.VITE_OPEN_WEATHER_KEY,
		limit: 1,
	},
});

export default geocodingClient;
