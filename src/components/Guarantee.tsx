"use client";

import { ShieldCheck, CircleDollarSign, Phone, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function Guarantee() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-900 py-32 sm:py-40">
      {/* Giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[30vw] sm:text-[25vw] font-black text-white/[0.03] leading-none">₩0</span>
      </div>

      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-28 h-28 border border-white/5 rounded-full float-slow" />
        <div className="absolute bottom-[15%] right-[8%] w-20 h-20 border border-white/5 rounded-full float-medium" />
        <div className="absolute top-[50%] right-[5%] w-4 h-4 bg-primary-400/20 rounded-full float-slow" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-[20%] right-[30%] w-px h-24 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-[30%] left-[15%] w-3 h-3 bg-amber-400/15 rounded-full orbit-slow" />
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-primary-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-20">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-primary-300 text-sm sm:text-base font-bold tracking-wider px-6 py-3 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4" />
            배관구조대의 약속
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/80 mb-4">
            해결하지 못했는데 요금청구?
          </h2>
          <h3 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-8 text-glow shine-text">
            미해결시 <span className="neon-amber">₩0</span>
          </h3>
          <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-xl sm:text-2xl">
            배관구조대는 고객님의 문제를 완벽하게 해결할 때까지 책임집니다.
            해결하지 못하면 비용을 청구하지 않습니다.
          </p>
        </div>

        {/* Three promises */}
        <div className="stagger grid sm:grid-cols-2 gap-5 mb-14 max-w-2xl mx-auto">
          {[
            { icon: ShieldCheck, title: "완벽 해결 보장", desc: "책임감 있는 작업으로 확실한 해결", color: "text-primary-300", bg: "bg-primary-400/10", border: "border-primary-400/15" },
            { icon: CircleDollarSign, title: "미해결시 전액 무료", desc: "해결 못하면 비용 부담 제로", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/15" },
          ].map((item, i) => (
            <div key={i} className={`group relative rounded-2xl bg-white/[0.06] border ${item.border} p-8 text-center card-lift hover:bg-white/[0.1] transition-all duration-300`}>
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <a href="tel:01039712272" className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 hover:shadow-glow-lg">
            <Phone className="w-5 h-5" />
            무료 견적 받기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
