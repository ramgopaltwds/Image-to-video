// src/components/ProgressTracker.jsx
export default function ProgressTracker({ status }) {
  const map = {
    queued: 20,
    processing: 60,
    completed: 100,
    failed: 100,
  };

  return (
    <div className="border p-4 rounded-lg space-y-2">
      <p className="font-medium">Status: {status}</p>

      <div className="h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-black transition-all"
          style={{ width: `${map[status] || 10}%` }}
        />
      </div>
    </div>
  );
}