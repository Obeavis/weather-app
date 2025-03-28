import weatherClient from "@/api/weatherClient";

export const getWeather = async (lat: number, lon: number) => {
	const response = await weatherClient.get("/weather", {
		params: { lat, lon },
	});
	return response.data;
};
