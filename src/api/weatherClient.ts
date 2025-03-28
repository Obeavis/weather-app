import axios from "axios";

const weatherClient = axios.create({
	baseURL:  import.meta.env.VITE_OPEN_WEATHER_API_URL,
	params: {
		appid: import.meta.env.VITE_OPEN_WEATHER_KEY,
		units: "metric",
	},
});

export default weatherClient;
