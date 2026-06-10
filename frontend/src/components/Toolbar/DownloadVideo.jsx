function DownloadVideo() {
  const handleVideoExport = () => {
    alert(
      "Video export will be connected to FFmpeg backend."
    );
  };

  return (
    <button
      onClick={handleVideoExport}
    >
      Download MP4
    </button>
  );
}

export default DownloadVideo;