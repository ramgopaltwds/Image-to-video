export const exportPNG = (stageRef) => {
  if (!stageRef.current) return;

  const uri = stageRef.current.toDataURL({
    pixelRatio: 2,
  });

  const link = document.createElement("a");
  link.download = "design.png";
  link.href = uri;
  link.click();
};