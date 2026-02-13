"use client";

import Image from "next/image";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function Coverage() {
  const ref = useReveal();

  return (
    <section ref={ref} id="coverage" className="relative overflow-hidden bg-navy-900">
      {/* Background image */}
      <Image src="/images/bg-abstract-blue.jpg" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-navy-900/80" />

      <div className="grid lg:grid-cols-2 relative z-10">
        {/* Left - Ripple visualization */}
        <div className="reveal-left relative flex items-center justify-center p-10 sm:p-16">
          <div className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 mx-auto">
            <div className="ripple-circle absolute inset-0 rounded-full border-2 border-primary-400/30" />
            <div className="ripple-circle absolute inset-[15%] rounded-full border-2 border-primary-400/30" />
            <div className="ripple-circle absolute inset-[30%] rounded-full border-2 border-primary-400/30" />

            <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
            <div className="absolute inset-[20%] rounded-full border border-dashed border-white/20" />
            <div className="absolute inset-[40%] rounded-full border border-dashed border-white/20" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl sm:text-7xl font-black text-white mb-2">전국</div>
                <div className="text-primary-300 text-sm font-bold tracking-wider">24시간 출동</div>
              </div>
            </div>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm float-slow">전국 출동</div>
            <div className="absolute top-[22%] right-0 bg-amber-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm float-medium" style={{ animationDelay: "-1s" }}>당일처리</div>
            <div className="absolute top-[42%] left-0 bg-primary-400 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm float-slow" style={{ animationDelay: "-2s" }}>30분 출동</div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="reveal-right relative p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 text-primary-300 text-sm font-bold tracking-[0.15em] uppercase mb-6">
              <span className="w-10 h-px bg-gradient-to-r from-primary-400 to-transparent" />
              Coverage
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 leading-tight shine-text">
              전국 어디서든<br />
              <span className="neon-amber">빠르게 출동</span>합니다
            </h2>
            <p className="text-white/65 mb-10 leading-relaxed">전국 네트워크로 어디서든 신속하게 방문합니다.</p>

            <div className="space-y-3 mb-10">
              {[
                { region: "수도권", detail: "서울 · 경기 · 인천", time: "30분 내", color: "bg-primary-400", border: "border-primary-400/20" },
                { region: "광역시", detail: "부산 · 대구 · 광주 · 대전 · 울산", time: "당일", color: "bg-amber-500", border: "border-amber-500/20" },
                { region: "전국", detail: "전국 어디든 방문 서비스", time: "출동 가능", color: "bg-emerald-500", border: "border-emerald-500/20" },
              ].map((r, i) => (
                <div key={i} className={`flex items-center gap-4 bg-white/[0.08] backdrop-blur-sm rounded-2xl p-5 hover:bg-white/[0.12] transition-all duration-300 border ${r.border}`}>
                  <div className={`w-2 h-12 ${r.color} rounded-full flex-shrink-0`} />
                  <MapPin className="w-4 h-4 text-white/50 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{r.region}</span>
                      <span className="text-primary-300 text-sm font-bold bg-primary-400/10 px-3 py-1 rounded-full">{r.time}</span>
                    </div>
                    <span className="text-white/65 text-sm">{r.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="tel:01039712272" className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 text-white font-bold text-lg py-5 px-10 rounded-full transition-all duration-300 hover:shadow-glow-lg">
              <Phone className="w-5 h-5" />
              010-3971-2272
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
