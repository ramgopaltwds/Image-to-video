// src/store/useAppStore.js
import { create } from "zustand";

export const useAppStore = create((set) => ({
  file: null,
  prompt: "",
  jobId: null,
  status: null,
  videoUrl: null,
  history: [],

  setFile: (file) => set({ file }),
  setPrompt: (prompt) => set({ prompt }),
  setJobId: (jobId) => set({ jobId }),
  setStatus: (status) => set({ status }),
  setVideoUrl: (videoUrl) => set({ videoUrl }),

  addToHistory: (item) =>
    set((state) => ({
      history: [item, ...state.history].slice(0, 20),
    })),
}));