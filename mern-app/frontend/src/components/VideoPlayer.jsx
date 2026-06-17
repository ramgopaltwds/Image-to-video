export default function VideoPlayer({ url }) {
  return (
    <div>
      <h3>Generated Video</h3>

      <video
        controls
        width="100%"
      >
        <source
          src={url}
          type="video/mp4"
        />
      </video>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        Download Video
      </a>
    </div>
  );
}