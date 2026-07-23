"use client";

export default function ResumePrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
    >
      🖨 Print / Save as PDF
    </button>
  );
}
