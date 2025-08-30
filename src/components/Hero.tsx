import useModal from "../store/useModal";
import Analytics from "./Analytics";
import BudgetingModal from "./BudgetingModal";
import Tabs from "./Tabs";

export default function Hero() {
	const { budgetingOpen } = useModal();
	return (
		<main>
			<Tabs />
			<Analytics />
			{budgetingOpen && <BudgetingModal />}
		</main>
	);
}
