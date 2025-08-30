import {
	ArticleIcon,
	HouseIcon,
	MagnifyingGlassIcon,
	ScrollIcon,
	ToolboxIcon,
	UserIcon,
	type Icon,
} from "@phosphor-icons/react";
import { useActiveIndex } from "../lib/Hooks";
import { cn } from "../lib/utils";

export default function Tabs() {
	const { activeIndex, handleActiveIndex } = useActiveIndex(0);
	return (
		<div className="py-[14px]">
			<div className="max-w-[1280px] mx-auto flex items-center gap-10 w-full px-6 xl:px-0">
				<div className="flex items-center gap-4">
					{tabs.map(({ id, text, icon: Icon }, index) => (
						<div
							key={id}
							onClick={() => handleActiveIndex(index)}
							className={cn(
								"flex items-center justify-center gap-2 w-[170px] h-[36px] rounded-[4px] cursor-pointer",
								index === activeIndex && "bg-gray font-semibold"
							)}
						>
							<span>
								<Icon className="size-6" weight={activeIndex === index ? "fill" : "regular"} />
							</span>
							<span key={id}>{text}</span>
						</div>
					))}
				</div>
				<div className="flex items-center gap-2 bg-gray rounded-[12px] w-full border border-light-gray h-11 px-2">
					<MagnifyingGlassIcon className="size-8" />
					<input
						type="text"
						className="focus:outline-none focus:border-none placeholder:leading-4 placeholder:font-light placeholder:text-semi-gray"
						placeholder="Search listings, user here..."
					/>
				</div>
			</div>
		</div>
	);
}

type TabType = {
	id: string;
	text: string;
	icon: Icon;
};

const tabs: TabType[] = [
	{
		id: crypto.randomUUID(),
		text: "Dashboard",
		icon: HouseIcon,
	},
	{
		id: crypto.randomUUID(),
		text: "Listings",
		icon: ToolboxIcon,
	},
	{
		id: crypto.randomUUID(),
		text: "Users",
		icon: UserIcon,
	},
	{
		id: crypto.randomUUID(),
		text: "Request",
		icon: ArticleIcon,
	},
	{
		id: crypto.randomUUID(),
		text: "Applications",
		icon: ScrollIcon,
	},
];
