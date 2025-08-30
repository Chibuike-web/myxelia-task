import { useState } from "react";

export function useActiveIndex(initalIndex: number) {
	const [activeIndex, setActiveIndex] = useState(initalIndex);

	const handleActiveIndex = (index: number) => {
		setActiveIndex(index);
	};

	return {
		activeIndex,
		handleActiveIndex,
	};
}
