import { useState } from "react";

function useUndoRedo(initialState) {
  const [history, setHistory] =
    useState([initialState]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const state = history[currentIndex];

  const setState = (newState) => {
    const updatedHistory =
      history.slice(0, currentIndex + 1);

    updatedHistory.push(newState);

    setHistory(updatedHistory);

    setCurrentIndex(
      updatedHistory.length - 1
    );
  };

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return {
    state,
    setState,
    undo,
    redo,
  };
}

export default useUndoRedo;