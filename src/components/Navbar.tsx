import {
	BudgetingIcon,
	CalendarIcon,
	MessageNotificationIcon,
	NotificationIcon,
} from "../assets/Icons";

export default function Navbar() {
	return (
		<header className="bg-primary py-[20px]">
			<div className="max-w-[1280px] mx-auto flex justify-between w-full text-white px-6 xl:px-0">
				<img src="/myxelia-logo.svg" />
				<nav className="flex items-center gap-4">
					<NotificationIcon />
					<BudgetingIcon />
					<CalendarIcon />
					<MessageNotificationIcon />
					<span className="size-10 bg-white rounded-full flex items-center justify-center text-primary font-medium text-[24px]">
						D
					</span>
				</nav>
			</div>
		</header>
	);
}
