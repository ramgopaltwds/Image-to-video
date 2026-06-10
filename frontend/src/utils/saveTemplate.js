export const saveTemplate = (editorData) => {
  const blob = new Blob(
    [JSON.stringify(editorData, null, 2)],
    {
      type: "application/json",
    }
  );

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "template.json";
  link.click();
};