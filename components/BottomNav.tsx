import { HomeIcon, ChartBarIcon, PlusIcon, UserIcon, CogIcon } from "@heroicons/react/24/outline";

export default function BottomNav({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center relative">
        <button className="flex flex-col items-center p-2 text-[#4066A0]">
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center p-2 text-[#4066A0]">
          <ChartBarIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Stats</span>
        </button>
        <button
          onClick={onAdd}
          className="absolute -top-10 bg-[#8EB1E8] border-2 border-b-0 border-white rounded-full p-4  hover:bg-[#78A1E3] transition-all focus:outline-none focus:ring-2 focus:ring-[#4066A0]"
        >
          <PlusIcon className="w-8 h-8 text-white" />
        </button>
        <button className="flex flex-col items-center p-2 text-[#4066A0]">
          <UserIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
        <button className="flex flex-col items-center p-2 text-[#4066A0]">
          <CogIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </button>
      </div>
    </div>
  );
}