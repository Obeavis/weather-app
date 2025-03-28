import geocodingClient from "@/api/geocodingClient";

export const getGeocoding = async (lat: number, lon: number) => {
	const response = await geocodingClient.get("/reverse", {
		params: { lat, lon },
	});
	return response.data;
};
