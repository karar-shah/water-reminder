import { BellIcon } from "@heroicons/react/24/outline";

export default function Header({ onNotify }: { onNotify?: () => void }) {
  return (
    <div className="flex items-center justify-between px-6 pt-8 pb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white font-semibold text-base">
          K
        </div>
        <div>
          <div className="text-sm text-white/80">Good morning</div>
          <div className="text-lg font-semibold text-white">Karar!</div>
        </div>
      </div>
      <button
        aria-label="Notifications"
        onClick={onNotify}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <BellIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}