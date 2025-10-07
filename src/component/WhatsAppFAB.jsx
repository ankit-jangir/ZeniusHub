import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB({ phone = "+919257479576", message, className = "" }) {
  const defaultMessage = `Hello! 👋
I am interested in your School ERP & Portal.

My details:
• School Name: [Your School Name]
• Location: [City, State]
• Student Strength: [Number of Students]

Please arrange a 15-minute demo at your convenience. 🚀`;

  const finalMessage = message ?? defaultMessage;
  const phoneSanitized = String(phone).replace(/\D/g, "");
  const url = new URL(`https://wa.me/${phoneSanitized}`);
  if (finalMessage) {
    url.searchParams.set("text", finalMessage);
  }
  const href = url.toString();
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`fixed left-5 bottom-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}


