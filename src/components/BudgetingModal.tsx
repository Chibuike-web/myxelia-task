import { ChartIcon, SettingIcon, TrackIcon } from "../assets/Icons";
import modalImage from "../assets/sketch.svg";
import useModal from "../store/useModal";

export default function BudgetingModal() {
	const { closeBudgeting } = useModal();
	return (
		<div
			className="fixed inset-0 bg-black/80 flex items-center justify-center"
			onClick={(e) => {
				e.stopPropagation();
				closeBudgeting();
			}}
		>
			<div className="bg-white w-full max-w-[438px] rounded-[10px] overflow-hidden pb-6 ">
				<div className="bg-[#0C2841] h-[213px] flex items-start justify-center overflow-hidden">
					<img src={modalImage} className="mt-[40px]" />
				</div>
				<div className="px-12">
					<ul className="flex flex-col gap-6 mt-6">
						{lists.map(({ id, heading, subHeading, icon: Icon }) => (
							<li key={id} className="flex items-center gap-[12px]">
								<span>
									<Icon className="text-gray-600" />
								</span>
								<div className="flex flex-col gap-[4px]">
									<span className="font-semibold">{heading}</span>
									<span className="text-gray-400 text-[12px]">{subHeading}</span>
								</div>
							</li>
						))}
					</ul>
					<button className="h-12 w-full bg-primary rounded-full  text-white mt-6">
						Create Budget
					</button>
				</div>
			</div>
		</div>
	);
}

const lists = [
	{
		id: crypto.randomUUID(),
		heading: "Set up annual budgets by account category",
		subHeading: "Allocate funds across income and expense lines with full visibility",
		icon: SettingIcon,
	},
	{
		id: crypto.randomUUID(),
		heading: "Track actuals vs budget in real time",
		subHeading: "See how your community is performing against plan month by month",
		icon: TrackIcon,
	},
	{
		id: crypto.randomUUID(),
		heading: "Adjust figures and forecast with ease",
		subHeading:
			"Edit amounts, apply percentage changes, or roll forward last year's data-all in one place",
		icon: ChartIcon,
	},
];
