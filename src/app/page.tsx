"use client";
import { useState, useEffect } from "react";
import useWaterTracker from "../../hooks/useWaterTracker";
import Header from "../../components/Header";
import TodayCard from "../../components/TodayCard";
import WeekDaysList from "../../components/WeekDaysList";
import AddIntakeModal from "../../components/AddIntakeModal";
import BottomNav from "../../components/BottomNav";

export default function HomePage() {
  const { todayLog, weekLogs, goal, addIntake } = useWaterTracker();
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNotify = () => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Stay Hydrated!', { body: 'Time to drink some water!' });
    } else if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Stay Hydrated!', { body: 'Time to drink some water!' });
        }
      });
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#8EB1E8] flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#8EB1E8] flex flex-col pb-20">
      <Header onNotify={handleNotify} />
      <main className="flex flex-col items-center px-4 gap-6 mt-6 flex-1">
        <TodayCard intake={todayLog.intake} goal={goal} />
        <WeekDaysList weekLogs={weekLogs} goal={goal} />
      </main>
      <BottomNav onAdd={() => setModalOpen(true)} />
      <AddIntakeModal open={modalOpen} setOpen={setModalOpen} onSubmit={addIntake} />
    </div>
  );
}
