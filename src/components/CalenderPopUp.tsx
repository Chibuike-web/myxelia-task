import { ArrowLeftIcon, CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import useModal from "../store/useModal";

export default function CalenderPopUp() {
	const { closeCalendar, calendarOpen } = useModal();
	const [activeDay] = useState(18);

	useEffect(() => {
		if (calendarOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [calendarOpen]);

	return (
		<div className="fixed w-full md:w-[400px] bg-[#0D0D0D] z-[1000] right-0 top-[80px] text-white bottom-0 ">
			<div className=" flex items-center px-6 h-13 bg-[#171717] ">
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-2">
						<ArrowLeftIcon size={24} />
						<span>Calendar</span>
					</div>
					<button onClick={() => closeCalendar()}>
						<XIcon />
					</button>
				</div>
			</div>
			<div className="text-[#98a2b3] flex items-center justify-self-center mt-4 mb-6">
				<CaretLeftIcon size={24} weight="fill" />
				<span className="text-white font-semibold">November 2023</span>
				<CaretRightIcon size={24} weight="fill" />
			</div>

			<div className="px-6">
				<div className="grid grid-cols-7 w-full h-6">
					{dates.map((date, index) => (
						<div
							key={index}
							className="border border-[#242424] text-[#969696] font-medium flex items-center pl-2 text-[8px]"
						>
							{date}
						</div>
					))}
				</div>
				<div className="grid grid-cols-7 w-full ">
					{days.map((day, index) => (
						<button
							key={index}
							className="border border-[#242424] flex pl-2 pt-2 text-[8px] h-[92px]"
						>
							<span
								className={cn(
									"text-[10px] text-[#969696]",
									activeDay === index
										? "px-[8px] py-[2px] rounded-full bg-blue text-white h-fit"
										: ""
								)}
							>
								{" "}
								{day}
							</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

const dates = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];

const days = [
	29,
	30,
	31,
	"Nov 1",
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30,
	31,
	"DEC 1",
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
];
