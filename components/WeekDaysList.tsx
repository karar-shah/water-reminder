export default function WeekDaysList({ weekLogs, goal }: { weekLogs: { day: string, date: string, intake: number }[], goal: number }) {
  return (
    <div className="flex px-2 justify-between w-full max-w-md mt-2">
      {weekLogs.map((d, idx) => (
        <div key={d.date} className={`flex flex-col items-center rounded-full px-2 py-2 transition-all
         ${d.intake >= goal ? 'bg-gradient-to-tr from-purple-200 to-lavender-200 shadow' : 'bg-[#F3F3FA]'}`}>
          <span className={`text-[11px] ${d.intake >= goal ? 'font-bold text-blue-950' : 'text-[#999AC6]'}`}>{d.day}</span>
          <span className={`text-lg font-medium ${d.intake >= goal ? 'text-blue-600' : 'text-[#413C6D]'}`}>{new Date(d.date).getDate()}</span>
        </div>
      ))}
    </div>
  );
}