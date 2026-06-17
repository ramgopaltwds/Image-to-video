// src/components/VideoPreview.jsx
export default function VideoPreview({ url }) {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold">Generated Video</h2>

      <video
        controls
        className="w-full rounded-lg border"
        autoPlay
      >
        <source src={url} type="video/mp4" />
      </video>

      <a
        href={url}
        target="_blank"
        className="text-sm underline"
      >
        Open in new tab
      </a>
    </div>
  );
}