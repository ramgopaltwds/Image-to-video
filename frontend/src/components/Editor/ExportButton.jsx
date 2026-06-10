function ExportButton({ stageRef }) {
  const handleExport = () => {
    const uri =
      stageRef.current.toDataURL();

    const link =
      document.createElement("a");

    link.download = "birthday-template.png";
    link.href = uri;

    link.click();
  };

  return (
    <button onClick={handleExport}>
      Download PNG
    </button>
  );
}

export default ExportButton;