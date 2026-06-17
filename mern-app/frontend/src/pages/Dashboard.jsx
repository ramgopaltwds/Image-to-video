import { useEffect, useState } from "react";
import API from "../api";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Dashboard() {
    const [image, setImage] = useState(null);
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        const res = await API.get("/video/my");
        setJobs(res.data);
    };

    useEffect(() => {
        fetchJobs();

        socket.on("job-update", (data) => {
            setJobs((prev) =>
                prev.map((job) =>
                    job._id === data.jobId ? { ...job, ...data } : job
                )
            );
        });
    }, []);

  

    const upgrade = async () => {
        const res = await API.post("/stripe/checkout");
        window.location.href = res.data.url;
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Video Dashboard</h1>

            {/* Upload */}
            <div className="bg-white p-4 rounded shadow mb-4">
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button
                    onClick={upgrade}
                    className="bg-purple-600 text-white px-4 py-2 rounded"
                >
                    Upgrade to Pro
                </button>
            </div>

            {/* Jobs */}
            <div className="grid gap-4">
                {jobs.map((job) => (
                    <div key={job._id} className="bg-white p-4 rounded shadow">
                        <img src={job.imageUrl} className="w-40 rounded" />

                        <p>Status: {job.status}</p>
                        <p>Progress: {job.progress}%</p>

                        {job.videoUrl && (
                            <video controls className="w-64 mt-2">
                                <source src={job.videoUrl} />
                            </video>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}