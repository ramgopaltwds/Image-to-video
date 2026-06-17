import { useEffect, useState } from "react";
import API from "../api/client.js";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // 📊 Load user jobs
  const loadJobs = async () => {
    const res = await API.get("/video/my");
    setJobs(res.data);
  };

  useEffect(() => {
    loadJobs();

    // ⚡ Live updates
    socket.on("job-update", (data) => {
      setJobs((prev) =>
        prev.map((job) =>
          job._id === data.jobId
            ? { ...job, ...data }
            : job
        )
      );
    });

    return () => socket.disconnect();
  }, []);

  // 📤 Upload + create job
  const upload = async () => {
    if (!file) return;

    const form = new FormData();
    form.append("image", file);

    setLoading(true);

    await API.post("/video/create", form);

    setLoading(false);
    loadJobs();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">
        🎬 AI Video Dashboard
      </h1>

      {/* UPLOAD SECTION */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={upload}
          disabled={loading}
          className="ml-3 bg-black text-white px-4 py-2 rounded"
        >
          {loading ? "Generating..." : "Generate Video"}
        </button>
      </div>

      {/* JOB LIST */}
      <div className="grid gap-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white p-4 rounded shadow"
          >
            {/* IMAGE */}
            <img
              src={job.imageUrl}
              className="w-40 rounded mb-2"
            />

            {/* STATUS */}
            <p className="font-semibold">
              Status: {job.status}
            </p>

            {/* PROGRESS BAR */}
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div
                className="bg-green-500 h-2 rounded"
                style={{ width: `${job.progress || 0}%` }}
              />
            </div>

            {/* PROGRESS TEXT */}
            <p className="text-sm mt-1">
              {job.progress || 0}% completed
            </p>

            {/* VIDEO PLAYER */}
            {job.videoUrl && (
              <div className="mt-3">
                <video
                  controls
                  className="w-full max-w-md rounded"
                >
                  <source src={job.videoUrl} type="video/mp4" />
                </video>

                <a
                  href={job.videoUrl}
                  target="_blank"
                  className="text-blue-600 text-sm block mt-2"
                >
                  Download Video
                </a>
              </div>
            )}

            {/* ERROR */}
            {job.error && (
              <p className="text-red-500 text-sm mt-2">
                Error: {job.error}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}