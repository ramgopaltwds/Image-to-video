import { create } from "zustand";

const useTemplateStore = create((set) => ({
  template: null,

  setTemplate: (template) =>
    set({ template }),

  clearTemplate: () =>
    set({ template: null }),
}));

export default useTemplateStore;