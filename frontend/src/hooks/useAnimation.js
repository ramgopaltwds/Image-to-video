import { useState } from "react";

function useAnimation() {
  const [animation, setAnimation] =
    useState("none");

  const selectAnimation = (type) => {
    setAnimation(type);
  };

  return {
    animation,
    selectAnimation,
  };
}

export default useAnimation;