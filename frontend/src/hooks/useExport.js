function useExport(stageRef) {
  const exportPNG = () => {
    if (!stageRef.current) return;

    const uri =
      stageRef.current.toDataURL({
        pixelRatio: 2,
      });

    const link =
      document.createElement("a");

    link.download =
      "birthday-template.png";

    link.href = uri;

    link.click();
  };

  return {
    exportPNG,
  };
}

export default useExport;