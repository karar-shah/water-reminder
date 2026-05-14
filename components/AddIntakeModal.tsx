import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function AddIntakeModal({ open, setOpen, onSubmit }: { open: boolean, setOpen: (v: boolean) => void, onSubmit: (ml: number) => void }) {
  const [amt, setAmt] = useState(250);
  function submit() {
    onSubmit(amt);
    setOpen(false);
    setAmt(250);
  }
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl p-6 w-full max-w-sm">
          <Dialog.Title className="text-lg font-semibold text-[#413C6D] mb-4">Add Water Intake</Dialog.Title>
          <div className="mb-4">
            <label className="block text-sm text-[#7A7C90] mb-2">Amount (ml)</label>
            <input
              type="number"
              value={amt}
              onChange={(e) => setAmt(Number(e.target.value))}
              className="w-full p-2 border rounded-lg"
              min="0"
              step="50"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={() => setOpen(false)} className="px-4 py-2 text-[#7A7C90]">Cancel</button>
            <button onClick={submit} className="px-4 py-2 bg-gradient-to-tr from-purple-400 to-blue-400 text-white rounded-lg">Add</button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}