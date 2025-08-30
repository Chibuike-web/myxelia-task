import { create } from "zustand";

type ModalState = {
	budgetingOpen: boolean;
	calendarOpen: boolean;
	openBudgeting: () => void;
	closeBudgeting: () => void;
	toggleBudgeting: () => void;
	openCalendar: () => void;
	closeCalendar: () => void;
	toggleCalendar: () => void;
};

const useModalStore = create<ModalState>((set) => ({
	budgetingOpen: false,
	calendarOpen: false,
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
