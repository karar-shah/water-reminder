// components/TodayCard.tsx
export default function TodayCard({ intake, goal }: { intake: number; goal: number }) {
  const percent = Math.min(1, intake / goal);
  const today = new Date();

  return (
    <div className="bg-[#FFFFFFBB] rounded-2xl shadow-lg p-5 w-full max-w-md mt-4 flex flex-col items-center">
      <div className="text-md text-[#6E62A2] mb-2 font-semibold">
        Today, {today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
      {/* Animated wave SVG */}
      <div className="relative flex items-end h-32 w-32">
        <svg viewBox="0 0 120 120" className="absolute z-0">
          <defs>
            <linearGradient id="wave" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#A18CD1" />
              <stop offset="100%" stopColor="#C9D6FF"/>
            </linearGradient>
          </defs>
          <path
              d={`M0,${120-(percent*90)}
                  Q30,${110-(percent*60)}
                  60,${120-(percent*80)}
                  Q90,${130-(percent*80)}
                  120,${120-(percent*90)}
                  V120 H0 Z`}
              fill="url(#wave)"
          />
        </svg>
        <div className="relative z-10 w-full text-center pt-16">
          <strong className="text-2xl text-[#43406A]">{Math.floor(percent*goal)}ml</strong>
          <div className="text-xs text-[#7A7C90]">of {goal}ml</div>
        </div>
      </div>
    </div>
  );
}