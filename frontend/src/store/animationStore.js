import { create } from "zustand";

const useAnimationStore = create(
  (set) => ({
    animation: "none",

    setAnimation: (
      animation
    ) =>
      set({ animation }),

    clearAnimation: () =>
      set({
        animation: "none",
      }),
  })
);

export default useAnimationStore;