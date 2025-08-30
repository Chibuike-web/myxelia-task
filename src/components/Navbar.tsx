import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import {
	BudgetingIcon,
	CalendarIcon,
	MessageNotificationIcon,
	NotificationIcon,
} from "../assets/Icons";
import useModal from "../store/useModal";

const navItems = [
	{ icon: <NotificationIcon />, label: "Notifications" },
	{ icon: <BudgetingIcon />, label: "Budgeting" },
	{ icon: <CalendarIcon />, label: "Calendar" },
	{ icon: <MessageNotificationIcon />, label: "Messages" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const { openBudgeting, openCalendar } = useModal();
	return (
		<header className="bg-primary py-[20px]">
			<div className="max-w-[1280px] mx-auto flex justify-between w-full text-white px-6 xl:px-0">
				<img src="/myxelia-logo.svg" />
				<nav className="flex items-center gap-4">
					<ul className="hidden md:flex items-center gap-4">
						{navItems.map(({ icon, label }, i) => (
							<Tooltip key={i} label={label}>
								<button
									className="relative"
									onClick={() => {
										label.toLowerCase() === "budgeting"
											? openBudgeting()
											: label.toLowerCase() === "calendar"
											? openCalendar()
											: null;
									}}
								>
									{icon}
								</button>
							</Tooltip>
						))}
					</ul>
					<span className="size-10 bg-white rounded-full flex items-center justify-center text-primary font-medium text-[24px]">
						D
					</span>
					<button className="md:hidden text-white" onClick={() => setIsOpen((prev) => !prev)}>
						{isOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
					</button>
				</nav>
			</div>

			{isOpen && <MobileNav isOpen={isOpen} />}
		</header>
	);
}

function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<li className="relative group">
			{children}
			<div
				className="absolute -bottom-18 left-1/2 -translate-x-1/2 mb-2
				opacity-0 group-hover:opacity-100 transition
				px-[12px] py-[8px] rounded-[8px] bg-primary text-white text-sm whitespace-nowrap"
			>
				{label}
				<span
					className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-0 h-0
					border-l-10 border-l-transparent
					border-r-10 border-r-transparent
					border-b-10 border-b-primary"
				></span>
			</div>
		</li>
	);
}

const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	});
	return (
		<ul className="flex flex-col fixed top-[80px] left-0 bottom-0 right-0 bg-primary top text-white px-6 py-4">
			{navItems.map((item, index) => (
				<li key={index} className="py-6 flex items-center gap-4">
					<span>{item.icon}</span> <span>{item.label}</span>
				</li>
			))}
		</ul>
	);
};
