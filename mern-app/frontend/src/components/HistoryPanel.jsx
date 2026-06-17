// src/components/HistoryPanel.jsx
import { useAppStore } from "../store/useAppStore";

export default function HistoryPanel() {
  const history = useAppStore((s) => s.history);

  return (
    <div className="border p-4 rounded-lg">
      <h3 className="font-bold mb-2">Recent Generations</h3>

      {history.length === 0 && (
        <p className="text-gray-500 text-sm">No history yet</p>
      )}

      <div className="space-y-2">
        {history.map((h) => (
          <div key={h.id} className="text-sm border-b pb-2">
            <p className="truncate">{h.prompt}</p>
            <a href={h.videoUrl} className="underline text-xs">
              View Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}