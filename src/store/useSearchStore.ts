import { create } from "zustand";

interface SearchState {

  query: string;

  history: string[];

  setQuery: (query: string) => void;

}

export const useSearchStore = create<SearchState>((set) => ({

  query: "",

  history: [],

  setQuery: (query) =>

    set((state) => ({

      query,

      history: [...new Set([query, ...state.history])].slice(0, 20),

    })),

}));
