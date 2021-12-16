import create from "zustand";
import { Member } from "@types";

type StoreProps = {
	toBeEditedMember: Member | null;
	setToBeEditedMember: (member: Member | null) => void;
};

const useGlobalStore = create<StoreProps>((set) => ({
	toBeEditedMember: null,
	setToBeEditedMember: (value) => set({ toBeEditedMember: value }),
}));

export default useGlobalStore;
