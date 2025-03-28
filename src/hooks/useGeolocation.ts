import { useState, useEffect } from "react";

interface Location {
	lat: number;
	lon: number;
}

const useGeolocation = () => {
	const [location, setLocation] = useState<Location | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!navigator.geolocation) {
			setError("Geolocation not supported by browser.");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLocation({
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				});
			},
			(err) => {
				setError(`Error getting location: ${err.message}`);
			},
		);
	}, []);

	return { location, error };
};

export default useGeolocation;
