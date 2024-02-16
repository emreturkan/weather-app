import { create } from "zustand";

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const useCurrentWeatherStore = create((set) => ({
  currentWeather: {},
  fetchCurrentWeather: async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_WEATHER_APP);
    const data = await response.json();
    set({ currentWeather: data });
  },
}));
