export default function WeekDaysList({ weekLogs, goal }: { weekLogs: { day: string, date: string, intake: number }[], goal: number }) {
  return (
    <div className="flex justify-center gap-2 mt-4 px-4">
      {weekLogs.map((d, idx) => (
        <div key={d.date} className={`flex flex-col items-center p-3 rounded-xl transition-all min-w-[50px]
         ${d.intake >= goal ? 'bg-[#8EB1E8] text-white shadow-md' : 'bg-gray-100 text-[#4066A0]'}`}>
          <span className="text-xs font-medium">{d.day.slice(0,3)}</span>
          <span className="text-lg font-bold">{new Date(d.date).getDate()}</span>
          <span className="text-xs">{Math.round(d.intake / goal * 100)}%</span>
        </div>
      ))}
    </div>
  );
}