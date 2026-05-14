import React from "react";
import { WaterLog } from "../hooks/useWaterTracker";

export default function HistoryView({ logs }: { logs: WaterLog[] }) {
  if (!logs.length) {
    return <div className="text-center text-[#4066A0] mt-8">No intake history yet.</div>;
  }
  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <h2 className="text-lg font-semibold text-[#1A2340] mb-2">History</h2>
      <ul className="divide-y divide-[#E0E7EF] bg-white rounded-xl shadow">
        {[...logs].reverse().map((log) => (
          <li key={log.date} className="flex justify-between px-4 py-3">
            <span className="text-[#4066A0] font-medium">{new Date(log.date).toLocaleDateString()}</span>
            <span className="text-[#1A2340]">{log.intake} ml</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
