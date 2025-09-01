import useModal from "../store/useModal";
import Analytics from "./Analytics";
import BudgetingModal from "./BudgetingModal";
import CalenderPopUp from "./CalenderPopUp";
import Tabs from "./Tabs";

export default function Hero() {
	const { budgetingOpen, calendarOpen } = useModal();
	return (
		<main>
			<Tabs />
			<Analytics />
			{budgetingOpen && <BudgetingModal />}
			{calendarOpen && <CalenderPopUp />}
		</main>
	);
}
