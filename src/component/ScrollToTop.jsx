import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop({ showAt = 4, className = "" }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledY = window.scrollY || window.pageYOffset;
      const maxScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScrollable > 0 ? (scrolledY / maxScrollable) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (progress <= showAt) return null;

  return (
    <div
      className={`fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full p-[3px] shadow-lg ${className}`}
      style={{
        background: `conic-gradient(#ff6a21 ${progress * 3.6}deg, white 0deg)`
      }}    
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full h-full rounded-full bg-white text-[#ff6a21] flex items-center justify-center border border-[#ff6a21] hover:bg-[#ff6a21] hover:text-white transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    </div>
  );
}


