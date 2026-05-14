import { BellIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 pt-6">
      <img
        src="/profile.jpg"
        alt="profile"
        className="w-12 h-12 rounded-full border-4 border-gradient-to-tr from-purple-400 to-blue-400"
      />
      <span className="font-medium text-lg text-[#413C6D]">Hi, Karar!</span>
      <button aria-label="Notifications">
        <BellIcon className="w-7 h-7 text-[#413C6D]/70" />
      </button>
    </div>
  );
}
