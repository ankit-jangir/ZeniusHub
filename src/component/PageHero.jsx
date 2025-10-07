import React from "react";
import { Link, useLocation } from "react-router-dom";

function toTitle(text) {
  const cleaned = text.replace(/[-_]+/g, " ").replace(/\s*&\s*/g, " & ");
  return cleaned
    .split(" ")
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export default function PageHero({ title, trail }) {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const computedTrail = [{ label: "Home", to: "/" }].concat(
    segments.map((seg, idx) => ({
      label: toTitle(seg),
      to: "/" + segments.slice(0, idx + 1).join("/")
    }))
  );

  const finalTrail = trail ?? computedTrail;
  const finalTitle = title ?? (finalTrail.length > 1 ? finalTrail[finalTrail.length - 1].label : "");

  return (
    <section className="relative overflow-hidden bg-[#ff6a21]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff6a21] to-[#c94d10]" />

      <div className="absolute -left-20 -top-24 w-72 h-72 rounded-full border-[8px] border-white/30 opacity-60" />
      <div className="absolute -right-12 top-6 w-80 h-80 rounded-full border-[8px] border-white/20 opacity-60" />

      <div className="absolute right-6 bottom-8 grid grid-cols-6 gap-2 float-up-down" style={{ animationDelay: '0.4s' }}>
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.35)]" />
        ))}
      </div>

      <div className="absolute left-8 bottom-10 space-y-3 float-up-down">
        <span className="block w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-white" />
        <span className="block w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-white" />
        <span className="block w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20 min-h-[280px] md:min-h-[360px] flex flex-col items-center justify-center relative">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-wide">
          {finalTitle}
        </h1>
        <nav className="mt-4 text-center">
          {finalTrail.map((item, idx) => (
            <span key={item.to} className="text-gray-300">
              {idx > 0 && <span className="mx-2 text-[#ffffff]">›</span>}
              {idx < finalTrail.length - 1 ? (
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}


