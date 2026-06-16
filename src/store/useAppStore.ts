import { create } from "zustand";

interface AppStore {

  search: string;

  setSearch: (value: string) => void;

}

export const useAppStore = create<AppStore>((set) => ({

  search: "",

  setSearch: (value) => set({ search: value }),

}));
