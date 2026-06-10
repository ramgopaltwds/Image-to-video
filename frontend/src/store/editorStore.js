import { create } from "zustand";

const useEditorStore = create((set) => ({
  elements: [],

  setElements: (elements) =>
    set({ elements }),

  addElement: (element) =>
    set((state) => ({
      elements: [
        ...state.elements,
        element,
      ],
    })),

  updateElement: (id, data) =>
    set((state) => ({
      elements: state.elements.map(
        (item) =>
          item.id === id
            ? { ...item, ...data }
            : item
      ),
    })),

  deleteElement: (id) =>
    set((state) => ({
      elements: state.elements.filter(
        (item) => item.id !== id
      ),
    })),
}));

export default useEditorStore;