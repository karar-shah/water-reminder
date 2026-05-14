export default function AddIntakeButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="fixed bottom-5 right-5 bg-[#8EB1E8] p-5 rounded-full shadow-xl hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#4066A0]"
      onClick={onClick}
      aria-label="Add Intake"
    >
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 5v14m-7-7h14"/>
      </svg>
    </button>
  );
}