import { create } from "zustand";

export const useSearchStore = create((set) => ({
  search: "Istanbul",
  setSearch: (search) => set((state) => ({ ...state, search })),
}));
