import { cn } from "@/libs/utils";

interface CelsiusCardProps {
	celsius: number;
}

const cardConfig = {
	cold: {
		color: "text-blue-400",
	},
	average: {
		color: "text-orange-400",
	},
	hot: {
		color: "text-hot-500",
	},
};

const CelsiusCard = ({ celsius }: CelsiusCardProps) => {
	const color =
		celsius <= 5
			? cardConfig.cold.color
			: celsius > 5 && celsius <= 25
				? cardConfig.average.color
				: cardConfig.hot.color;

	return (
		<div className="flex">
			<h2 className={cn("text-[5em] leading-[1em]", color)}>{celsius}</h2>
			<span className={cn("text-[2.5vh] align-super mt-[1.5vh]", color)}>°C</span>
		</div>
	);
};

export default CelsiusCard;
