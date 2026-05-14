import { useEffect, useState } from "react";

export type WaterLog = {
  date: string;   // ISO yyyy-mm-dd
  intake: number; // Total intake ml for day
};

const DAILY_GOAL = 2000;

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function getSavedState<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}

export default function useWaterTracker() {
  const [logs, setLogs] = useState<WaterLog[]>([]);
  const [profile, setProfile] = useState({
    name: "Karar",
    goal: DAILY_GOAL,
  });

  // Load saved state from localStorage only on the client.
  useEffect(() => {
    setLogs(getSavedState<WaterLog[]>("waterLogs", []));
    setProfile(getSavedState<{ name: string; goal: number }>("waterProfile", {
      name: "Karar",
      goal: DAILY_GOAL,
    }));
  }, []);

  // Save logs and profile to localStorage after hydration.
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("waterLogs", JSON.stringify(logs));
    localStorage.setItem("waterProfile", JSON.stringify(profile));
  }, [logs, profile]);

  // --- Daily value helpers ---
  const addIntake = (ml: number) => {
    setLogs((curr) => {
      const today = todayDate();
      let found = curr.find((l) => l.date === today);
      if (!found) {
        return [...curr, { date: today, intake: ml }];
      } else {
        return curr.map((l) =>
          l.date === today ? { ...l, intake: l.intake + ml } : l
        );
      }
    });
  };

  // Weekdays (Sun-Sat) starting from today -3.
  const getWeekLogs = () => {
    const days: { day: string; date: string; intake: number }[] = [];
    const ref = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(ref);
      date.setDate(ref.getDate() - i);
      const iso = date.toISOString().slice(0, 10);
      const log = logs.find((l) => l.date === iso);
      days.push({
        date: iso,
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        intake: log?.intake || 0,
      });
    }
    return days;
  };

  const todayLog = logs.find((l) => l.date === todayDate()) || { date: todayDate(), intake: 0 };

  return {
    profile, setProfile,
    logs, addIntake,
    todayLog,
    weekLogs: getWeekLogs(),
    goal: profile.goal,
  };
}