import { create } from "zustand";

type ModalState = {
	isOpen: boolean;
	budgetingOpen: boolean;
	calendarOpen: boolean;
	toggleOpen: () => void;
	openBudgeting: () => void;
	closeBudgeting: () => void;
	toggleBudgeting: () => void;
	openCalendar: () => void;
	closeCalendar: () => void;
	toggleCalendar: () => void;
};

const useModalStore = create<ModalState>((set) => ({
	isOpen: false,
	budgetingOpen: false,
	calendarOpen: false,
	toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
	openBudgeting: () => set({ budgetingOpen: true }),
	closeBudgeting: () => set({ budgetingOpen: false }),
	toggleBudgeting: () => set((state) => ({ budgetingOpen: !state.budgetingOpen })),
	openCalendar: () => set({ calendarOpen: true }),
	closeCalendar: () => set({ calendarOpen: false }),
	toggleCalendar: () => set((state) => ({ calendarOpen: !state.calendarOpen })),
}));

export default function useModal() {
	return useModalStore();
}
