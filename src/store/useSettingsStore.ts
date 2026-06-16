import { create } from "zustand";

interface SettingsState {

  offlineMode: boolean;

  autoUpdate: boolean;

  infiniteScroll: boolean;

  toggleOffline: () => void;

}

export const useSettingsStore = create<SettingsState>((set) => ({

  offlineMode: true,

  autoUpdate: true,

  infiniteScroll: true,

  toggleOffline: () =>

    set((state) => ({

      offlineMode: !state.offlineMode,

    })),

}));
