// src/pages/Home.jsx
import { useEffect, useState } from "react";
import DropzoneUploader from "../components/DropzoneUploader";
import { generateVideo, getJobStatus } from "../api/client";
import toast from "react-hot-toast";
import { useAppStore } from "../store/useAppStore";
import ProgressTracker from "../components/ProgressTracker";
import VideoPreview from "../components/VideoPreview";

export default function Home() {
  const {
    file,
    setFile,
    prompt,
    setPrompt,
    jobId,
    setJobId,
    status,
    setStatus,
    videoUrl,
    setVideoUrl,
    addToHistory,
  } = useAppStore();

  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!file || !prompt) {
      toast.error("Upload image and enter prompt");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("prompt", prompt);

      const res = await generateVideo(formData);

      const id = res.data.jobId;
      setJobId(id);
      setStatus("queued");

      toast.success("Generation started");

      pollStatus(id);
    } catch (err) {
      toast.error("Failed to start generation");
    } finally {
      setLoading(false);
    }
  };

  const pollStatus = (id) => {
    const interval = setInterval(async () => {
      try {
        const res = await getJobStatus(id);
        const data = res.data;

        setStatus(data.status);

        if (data.status === "completed") {
          setVideoUrl(data.videoUrl);

          addToHistory({
            id,
            videoUrl: data.videoUrl,
            prompt,
          });

          toast.success("Video ready");
          clearInterval(interval);
        }

        if (data.status === "failed") {
          toast.error("Generation failed");
          clearInterval(interval);
        }
      } catch {
        toast.error("Status check failed");
        clearInterval(interval);
      }
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">

      <h1 className="text-3xl font-bold">
        Image → Video Generator
      </h1>

      <DropzoneUploader onFileSelect={setFile} />

      <textarea
        className="w-full border p-3 rounded"
        placeholder="Describe motion (cinematic zoom, wind, lighting shifts...)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        disabled={loading}
        onClick={handleGenerate}
        className="bg-black text-white px-5 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Video"}
      </button>

      {jobId && <ProgressTracker status={status} />}
      {videoUrl && <VideoPreview url={videoUrl} />}
    </div>
  );
}