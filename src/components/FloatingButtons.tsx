"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      <a
        href="tel:01039712272"
        className="fixed bottom-24 right-5 z-50 flex items-center gap-2 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-bold py-3.5 px-5 rounded-full shadow-elevated transition-all duration-300 hover:scale-110 hover:shadow-glow-lg glow-ring group"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">전화상담</span>
      </a>

      <a
        href="sms:01039712272"
        className="fixed bottom-10 right-5 z-50 flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-bold py-3.5 px-5 rounded-full shadow-elevated transition-all duration-300 hover:scale-110 hover:shadow-dramatic"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">문자문의</span>
      </a>
    </>
  );
}
