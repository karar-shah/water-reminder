"use client";
import { useState } from "react";
import useWaterTracker from "../../hooks/useWaterTracker";
import Header from "../../components/Header";
import TodayCard from "../../components/TodayCard";
import WeekDaysList from "../../components/WeekDaysList";
import AddIntakeButton from "../../components/AddIntakeButton";
import AddIntakeModal from "../../components/AddIntakeModal";

export default function HomePage() {
  const { todayLog, weekLogs, goal, addIntake } = useWaterTracker();
  const [modalOpen, setModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A18CD1] via-[#FBC2EB] to-[#C9D6FF] flex flex-col">
      <Header onNotify={handleNotify} />
      <main className="flex flex-col items-center px-2 gap-4 mt-4">
        <TodayCard intake={todayLog.intake} goal={goal} />
        <WeekDaysList weekLogs={weekLogs} goal={goal} />
      </main>
      <AddIntakeButton onClick={() => setModalOpen(true)} />
      <AddIntakeModal open={modalOpen} setOpen={setModalOpen} onSubmit={addIntake} />
    </div>
  );
}
