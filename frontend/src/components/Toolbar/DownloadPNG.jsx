function DownloadPNG({ stageRef }) {
  const handleDownload = () => {
    if (!stageRef.current) return;

    const uri =
      stageRef.current.toDataURL({
        pixelRatio: 2
      });

    const link =
      document.createElement("a");

    link.download =
      "birthday-template.png";

    link.href = uri;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download PNG
    </button>
  );
}

export default DownloadPNG;