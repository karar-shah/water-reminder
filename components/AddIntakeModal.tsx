import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AddIntakeModal({ open, setOpen, onSubmit }: { open: boolean, setOpen: (v: boolean) => void, onSubmit: (ml: number) => void }) {
  const [amt, setAmt] = useState(250);
  function submit() {
    onSubmit(amt);
    setOpen(false);
    setAmt(250);
  }
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-end justify-center p-4">
        <Dialog.Panel className="bg-white rounded-t-3xl p-6 w-full max-w-sm mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-xl font-semibold text-[#1A2340]">Add Water</Dialog.Title>
            <button onClick={() => setOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
              <XMarkIcon className="w-6 h-6 text-[#4066A0]" />
            </button>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#4066A0] mb-2">Amount (ml)</label>
            <input
              type="number"
              value={amt}
              onChange={(e) => setAmt(Number(e.target.value))}
              className="w-full text-black p-4 border border-gray-200 rounded-xl text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#8EB1E8]"
              min="0"
              step="50"
            />
          </div>
          <button
            onClick={submit}
            className="w-full bg-[#8EB1E8] text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-[#4066A0]"
          >
            Add Water
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}