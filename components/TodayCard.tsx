// components/TodayCard.tsx
export default function TodayCard({ intake, goal }: { intake: number; goal: number }) {
  const percent = Math.min(1, intake / goal);
  const today = new Date();

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percent * circumference);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-sm mx-auto mt-4">
      <div className="text-center mb-4">
        <div className="text-sm text-[#4066A0] font-medium">Today</div>
        <div className="text-lg text-[#1A2340] font-semibold">{today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</div>
      </div>
      <div className="relative flex items-center justify-center h-40 w-40 mx-auto">
        <svg className="absolute transform -rotate-90" width="160" height="160" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#E0E7EF"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#8EB1E8"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute text-center">
          <div className="text-3xl font-bold text-[#1A2340]">{Math.floor(percent * 100)}%</div>
          <div className="text-sm text-[#4066A0]">{intake}ml / {goal}ml</div>
        </div>
      </div>
    </div>
  );
}