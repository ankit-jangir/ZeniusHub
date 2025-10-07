import React, { useEffect, useState } from "react";

export default function PromoModal({ onClose, delayMs = 600 }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  const close = () => {
    setOpen(false);
    onClose && onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-black/60" onClick={close} />

      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden promo-pop">
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-3 right-3 text-gray-600 hover:text-black rounded-full w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
        >
          ✕
        </button>

        <div className="bg-gradient-to-r from-[#ff9b59] to-[#ff6a21] text-white px-6 sm:px-8 py-5 sm:py-6">
          <div className="flex items-center gap-3">
            {/* <div className="hidden sm:block w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl font-extrabold">%</div> */}
            <div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-wide">Zeniushub Limited Time Offer</div>
              <div className="text-4xl sm:text-5xl font-extrabold mt-1 leading-none">20% OFF</div>
              <div className="mt-1 text-xs sm:text-sm opacity-90">On onboarding & setup fee</div>
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-5 text-gray-800">
          <div className="text-xs sm:text-sm bg-orange-50 border border-orange-200 text-orange-700 px-3 py-2 rounded-lg inline-block">New users only</div>
          <p className="mt-3 text-sm sm:text-base">Upgrade to Zeniushub’s modern school ERP and save on onboarding. Fast setup, secure cloud, and a delightful parent app — limited time.</p>

          <div className="mt-4 overflow-hidden rounded-md border border-orange-200 bg-orange-50">
            <div className="marquee whitespace-nowrap text-[#ff6a21] font-semibold py-2">
              <span className="mx-6">Admissions</span>
              <span className="mx-6">Fees & Accounting</span>
              <span className="mx-6">Attendance</span>
              <span className="mx-6">Exams & Results</span>
              <span className="mx-6">Parent App</span>
              <span className="mx-6">Admin Panel</span>
              <span className="mx-6">Teacher Panel</span>
              <span className="mx-6">Analytics & Reports</span>
              <span className="mx-6">Transport & Hostel</span>
              <span className="mx-6">Library & Inventory</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => { window.dispatchEvent(new Event('open-lead-form')); close(); }}
              className="sm:flex-1 text-center px-4 py-3 rounded-lg bg-[#ff6a21] text-white font-semibold hover:opacity-90"
            >
              Get Offer
            </button>
            <button onClick={close} className="px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50">Maybe Later</button>
          </div>
        </div>
      </div>
    </div>
  );
}


