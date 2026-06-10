import { useState } from "react";

function useTemplate(initialTemplate) {
  const [template, setTemplate] =
    useState(initialTemplate);

  const updateTemplate = (data) => {
    setTemplate(data);
  };

  return {
    template,
    updateTemplate,
  };
}

export default useTemplate;