import { CaretRightIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { ListingHouseIcon, ProfileIcon } from "../assets/Icons";
import firstMetricItem from "../assets/first-metric-item.webp";
import secondMetricItem from "../assets/second-metric-item.webp";
import thirdMetricItem from "../assets/third-metric-item.webp";

import { useActiveIndex } from "../lib/Hooks";
import { cn } from "../lib/utils";

export default function Analytics() {
	return (
		<div className="max-w-[1280px] mx-auto flex flex-col w-full px-6 xl:px-0">
			<h1 className="font-semibold mb-4 mt-7 text-xl">Welcome, Ahmed</h1>
			<div className="flex flex-col xl:flex-row w-full gap-5">
				<SalesOverview />
				<SubOverviews />
			</div>
			<span className="mt-5" />
			<Images />
		</div>
	);
}

const SalesOverview = () => {
	const { activeIndex, handleActiveIndex } = useActiveIndex(2);
	return (
		<div className="flex flex-col border border-light-gray rounded-[16px] w-full xl:max-w-[857px] xl:flex-shrink-0">
			<div className="flex justify-between items-center w-full">
				<div>
					<h1>Sales Overview</h1>
					<p>Showing overview Jan 2022 - Sep 2022</p>
				</div>
				<button>View Transactions</button>
			</div>
			<div>
				<div>
					{["1 Week", "1 Month", "1 Year"].map((item, index) => (
						<button
							key={index}
							onClick={() => handleActiveIndex(index)}
							className={cn(
								"w-20 h-8 rounded-[8px]",
								index === activeIndex && "bg-gray font-semibold"
							)}
						>
							{item}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

const SubOverviews = () => {
	return (
		<div className="flex flex-col md:flex-row xl:flex-col gap-4 w-full ">
			{subOverviews.map((item) => (
				<Card key={item.id} {...item} />
			))}
		</div>
	);
};

const Card = ({ title, icon: Icon, categories }: SubOverview) => {
	return (
		<div className="rounded-xl border border-gray-200 overflow-hidden w-full">
			{/* Header */}
			<div className="flex items-center justify-between px-4 py-3 bg-[#F9FAFB]">
				<div className="flex items-center gap-3">
					<Icon className="text-blue" />
					<span className="font-medium text-gray-800">{title}</span>
				</div>
				<div className="flex items-center gap-1 text-blue cursor-pointer text-sm">
					<span>View all</span>
					<CaretRightIcon size={16} weight="bold" />
				</div>
			</div>

			{/* Categories */}
			<div className="grid grid-cols-3">
				{categories.map((cat) => (
					<div key={cat.tag} className="p-4 flex flex-col gap-2">
						<div className="text-sm text-gray-600">{cat.tag}</div>
						<div className="text-2xl text-gray-900 font-semibold">{cat.number}</div>
					</div>
				))}
			</div>
		</div>
	);
};

const Images = () => {
	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[15px] mb-6">
			{cardImages.map((item) => (
				<ImageCard key={item.id} {...item} />
			))}
		</div>
	);
};

const ImageCard = ({ heading, text, images }: CardImage) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<article
			className=" w-full h-[286px] rounded-[12px] overflow-hidden bg-center bg-cover flex"
			style={{
				backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 60%), url(${images[activeIndex]})`,
			}}
		>
			<div className="flex flex-col text-white self-end px-4 py-4 w-full">
				<div>
					<span className="block font-medium text-[14px]">{heading}</span>
					<span className="block font-semibold text-[18px] leading-6">{text}</span>
				</div>

				<div className="flex justify-center items-center gap-2 mt-2">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							className={cn(
								"size-[8px] rounded-full transition",
								activeIndex === index ? "bg-white border-light-gray border-[2.2px]" : "bg-white/20"
							)}
						/>
					))}
				</div>
			</div>
		</article>
	);
};

type Category = {
	tag: string;
	number: string;
};

type SubOverview = {
	id: string;
	title: string;
	icon: React.ElementType;
	categories: Category[];
};

const subOverviews: SubOverview[] = [
	{
		id: crypto.randomUUID(),
		title: "Listings Overview",
		icon: ListingHouseIcon,
		categories: [
			{ tag: "Total", number: "1.8k" },
			{ tag: "Active", number: "80k" },
			{ tag: "Archived", number: "1k" },
		],
	},
	{
		id: crypto.randomUUID(),
		title: "User Overview",
		icon: ProfileIcon,
		categories: [
			{ tag: "Total", number: "20.7k" },
			{ tag: "Riders", number: "8.5k" },
			{ tag: "Subscribers", number: "7.5k" },
		],
	},
];

type CardImage = {
	id: string;
	heading: string;
	text: string;
	images: string[];
};

const cardImages: CardImage[] = [
	{
		id: crypto.randomUUID(),
		heading: "MOST CLICKED",
		text: "Urban Prime Plaze Premiere",
		images: [firstMetricItem, secondMetricItem],
	},
	{
		id: crypto.randomUUID(),
		heading: "MOST WATCHLISTED",
		text: "Urban Prime Plaze Premiere",
		images: [secondMetricItem, thirdMetricItem, firstMetricItem, secondMetricItem, thirdMetricItem],
	},
	{
		id: crypto.randomUUID(),
		heading: "MOST CLICKED",
		text: "Urban Prime Plaze Premiere",
		images: [thirdMetricItem, firstMetricItem, secondMetricItem, thirdMetricItem, firstMetricItem],
	},
];
