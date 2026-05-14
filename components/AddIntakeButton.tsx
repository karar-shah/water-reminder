export default function AddIntakeButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="fixed bottom-5 right-5 bg-gradient-to-tr from-purple-400 to-blue-400 p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform"
      onClick={onClick}
      aria-label="Add Intake"
    >
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 5v14m-7-7h14"/>
      </svg>
    </button>
  );
}