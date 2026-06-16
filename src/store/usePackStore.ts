import { create } from "zustand";

interface PackState {

  currentPack: string | null;

  favorites: string[];

  library: string[];

  addFavorite: (id: string) => void;

}

export const usePackStore = create<PackState>((set) => ({

  currentPack: null,

  favorites: [],

  library: [],

  addFavorite: (id) =>

    set((state) => ({

      favorites: [...new Set([...state.favorites, id])],

    })),

}));
