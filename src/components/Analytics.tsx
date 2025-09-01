import {
	ArrowCircleDownIcon,
	ArrowCircleUpIcon,
	CaretLeftIcon,
	CaretRightIcon,
} from "@phosphor-icons/react";
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
			<div className="flex flex-col sm:flex-row items-start gap-y-4 justify-between sm:items-center w-full px-6 py-4">
				<div className="flex flex-col gap-1">
					<h1 className="font-semibold text-[20px]">Sales Overview</h1>
					<p className="text-[12px] text-gray-500">Showing overview Jan 2022 - Sep 2022</p>
				</div>
				<button className="w-[140px] h-[32px] sm:w-[177px] sm:h-[46px] rounded-full border border-gray-300 text-[12px] font-medium">
					View Transactions
				</button>
			</div>

			<div className="flex text-[14px] items-center sm:self-end px-6">
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
			<span className="w-full block h-[1px] bg-light-gray mt-3 mb-4" />

			<div className="px-6 flex flex-col lg:flex-row lg:items-center gap-4 mb-3">
				<div className="flex items-center gap-4 w-full">
					<span className="bg-light-gray size-[18px] rounded-full flex flex-shrink-0 items-center justify-center">
						<CaretLeftIcon size={14} weight="fill" />
					</span>

					<div className="flex gap-2 w-full h-[160px] items-end">
						{/* y-axis */}

						<div className="flex items-end gap-2 mb-4">
							<div className="flex flex-col gap-[14px] text-[10px]">
								{[50, 40, 30, 20, 10, 0].map((n, index) => (
									<span key={index} className="leading-[1em]">
										{n}
									</span>
								))}
							</div>
							<span className="block h-[148px] w-[1px] bg-light-gray" />
						</div>
						{/* x-axis */}
						<div className="flex gap-[10px] justify-between items-end w-full">
							{yAxis.map((item) => (
								<YAxis key={item.month} {...item} />
							))}
						</div>
					</div>
					<span className="bg-light-gray size-[18px] rounded-full flex flex-shrink-0 items-center justify-center">
						<CaretRightIcon size={14} weight="fill" />
					</span>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:min-w-[400px]">
					{cashFlow.map((item, index) => (
						<CashFlowCard key={item.id} {...item} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};

const YAxis = ({ month, barHeight }: YAxisType) => {
	return (
		<div className="flex flex-col">
			<div className="flex items-end gap-1">
				{barHeight.map((h, index) => {
					const barBg = ["bg-blue-600", "bg-green-600", "bg-red-600"];

					const barBgStyle = barBg[index] ?? "";
					return (
						<span key={index} className={`w-1 block ${barBgStyle}`} style={{ height: `${h}px` }} />
					);
				})}
			</div>
			<span className="text-[10px] font-medium text-gray-600">{month}</span>
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
					<div key={cat.tag} className="p-4 flex flex-col gap-2 ">
						<div className="text-sm text-gray-600 leading-4">{cat.tag}</div>
						<div className="text-2xl text-gray-900 font-semibold leading-10">{cat.number}</div>
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

type CashFlowCardProps = CashFlow & {
	index: number;
};

const CashFlowCard = ({ type, increase, decrease, amount, index }: CashFlowCardProps) => {
	const isIncrease = increase !== undefined;
	const styles = ["text-blue-600", "text-green-600", "text-yellow-600", "text-red-600"];

	const typeStyle = styles[index] ?? "";

	return (
		<div className="w-full flex flex-col h-fit border border-light-gray rounded-[12px] px-4 py-2">
			<div className={`font-semibold text-[20px] ${typeStyle}`}>
				N{amount.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
			</div>
			<div className="flex items-center gap-2">
				<span className="text-[10px] font-medium text-deep-gray">{type}</span>
				<div
					className={cn("flex items-center gap-1", isIncrease ? "text-green-500" : "text-red-500")}
				>
					<span>
						{isIncrease ? (
							<ArrowCircleUpIcon size={14} weight="fill" />
						) : (
							<ArrowCircleDownIcon size={14} weight="fill" />
						)}
					</span>
					<span className="text-[10px]">{isIncrease ? increase : decrease}%</span>
				</div>
			</div>
		</div>
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

type CashFlow = {
	id: string;
	type: string;
	amount: number;
	increase?: number;
	decrease?: number;
};

const cashFlow: CashFlow[] = [
	{
		id: crypto.randomUUID(),
		type: "Total Inflow",
		increase: 2.5,
		amount: 120000000,
	},
	{
		id: crypto.randomUUID(),
		type: "MRR",
		increase: 2.5,
		amount: 50000000,
	},
	{
		id: crypto.randomUUID(),
		type: "Commission Revenue",
		decrease: 0.5,
		amount: 200000000,
	},
	{
		id: crypto.randomUUID(),
		type: "GMV",
		decrease: 2.5,
		amount: 100000000,
	},
];

type YAxisType = {
	month: string;
	barHeight: number[];
};

const yAxis = [
	{
		month: "Jan",
		barHeight: [99, 78, 30],
	},
	{
		month: "Feb",
		barHeight: [99, 78, 30],
	},
	{
		month: "Mar",
		barHeight: [99, 78, 30],
	},
	{
		month: "Apr",
		barHeight: [99, 78, 30],
	},

	{
		month: "May",
		barHeight: [99, 78, 30],
	},
	{
		month: "Jun",
		barHeight: [99, 78, 30],
	},

	{
		month: "Ju",
		barHeight: [99, 78, 30],
	},
	{
		month: "Aug",
		barHeight: [99, 78, 30],
	},
	{
		month: "Sep",
		barHeight: [99, 78, 30],
	},
];
