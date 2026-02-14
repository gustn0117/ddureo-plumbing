"use client";

import Image from "next/image";
import { Phone, MessageCircle, ChevronDown, Zap, Shield, Clock, ArrowRight, Search, CircleDollarSign, Siren } from "lucide-react";

export default function Hero() {
  const marqueeText = "24시간 긴급출동 · 출장비 무료 · 내시경 무료 · 미해결시 0원 · 전국 출동 · ";

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-navy-900">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient arc behind technician area */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full border border-primary-400/10" />
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[580px] h-[580px] sm:w-[750px] sm:h-[750px] rounded-full border border-primary-400/[0.04]" />
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary-500/6 rounded-full blur-[100px]" />
      </div>

      {/* PC decorations */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-12 w-40 h-40 dot-grid opacity-10 float-slow" />
        <div className="absolute bottom-[30%] left-[5%] w-20 h-20 border border-white/5 rounded-full float-medium" style={{ animationDelay: "-3s" }} />
      </div>

      {/* Scrolling marquee */}
      <div className="relative z-10 mt-16 sm:mt-20 md:mt-24 border-y border-white/10 bg-white/[0.03] py-2.5 sm:py-3 overflow-hidden">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-xs sm:text-sm text-white/40 font-medium tracking-wider whitespace-nowrap px-2">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Technician + floating cards */}
        <div className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] mb-3 sm:mb-4">
          <div className="relative aspect-square">
            {/* Soft back-glow */}
            <div className="absolute inset-[20%] rounded-full bg-primary-400/8 blur-[50px]" />

            <Image
              src="/images/technician-hero.png"
              alt="배관구조대 전문 기술자"
              fill
              className="object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
              priority
            />

            {/* ── Floating card 1 — 투명 견적 (top-right) ── */}
            <div className="absolute right-[-8px] sm:right-0 top-[8%] sm:top-[6%]">
              <div className="relative bg-navy-800/95 border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.1)]">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary-500/15 border border-primary-400/20 flex items-center justify-center shrink-0">
                    <Search className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-[11px] sm:text-sm leading-tight">투명한 견적</div>
                    <div className="text-white/40 text-[9px] sm:text-xs leading-tight mt-0.5">추가비용 없는 명확한 안내</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Floating card 2 — 미해결시 0원 (mid-right, bigger) ── */}
            <div className="absolute right-[-12px] sm:right-[-4px] top-[36%] sm:top-[34%]">
              <div className="relative bg-navy-800/95 border border-emerald-400/15 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_12px_rgba(16,185,129,0.08)]">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center shrink-0">
                    <CircleDollarSign className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-[11px] sm:text-sm leading-tight">미해결시</div>
                    <div className="text-emerald-400 font-black text-base sm:text-xl leading-tight">₩0</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Floating card 3 — 24시간 출동 (bottom-right) ── */}
            <div className="absolute right-[-4px] sm:right-[4px] top-[62%] sm:top-[60%]">
              <div className="relative bg-navy-800/95 border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(251,191,36,0.1)]">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/15 border border-amber-400/20 flex items-center justify-center shrink-0">
                    <Siren className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-[11px] sm:text-sm leading-tight">24시간 긴급출동</div>
                    <div className="text-white/40 text-[9px] sm:text-xs leading-tight mt-0.5">심야·주말·공휴일 가능</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Small floating pill — left side ── */}
            <div className="absolute left-[-6px] sm:left-0 top-[18%] sm:top-[16%]">
              <div className="flex items-center gap-1.5 bg-white/[0.07] border border-white/10 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white/70 text-[9px] sm:text-[11px] font-semibold">출장비 무료</span>
              </div>
            </div>

            {/* ── Small floating pill — bottom-left ── */}
            <div className="absolute left-[2px] sm:left-[8px] top-[52%] sm:top-[50%]">
              <div className="flex items-center gap-1.5 bg-white/[0.07] border border-white/10 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                <span className="text-white/70 text-[9px] sm:text-[11px] font-semibold">내시경 무료</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="text-center w-full max-w-2xl">
          {/* Live tag */}
          <div className="mb-3 sm:mb-5 flex items-center justify-center gap-2 sm:gap-3">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-primary-300 text-base sm:text-xl md:text-2xl font-black tracking-[0.12em] sm:tracking-[0.15em]">
              하수 누수 토탈케어
            </span>
          </div>

          {/* Brand */}
          <h1 className="text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw] font-black leading-[1] tracking-tight mb-3 sm:mb-4 hero-brand shine-text">
            배관구조대
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-white/65 max-w-md mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            하수구 막힘부터 누수까지,{" "}
            전문 기술진이 <span className="text-white font-semibold">직접 해결</span>합니다.
          </p>

          {/* Stat badges */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mb-7 sm:mb-10">
            {[
              { icon: Clock, value: "30분", label: "평균출동", neon: "neon-primary" },
              { icon: Zap, value: "10K+", label: "누적해결", neon: "neon-amber" },
              { icon: Shield, value: "₩0", label: "미해결시", neon: "neon-emerald" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <s.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${s.neon} mx-auto mb-1 sm:mb-1.5`} />
                <div className={`text-xl sm:text-2xl md:text-3xl font-black ${s.neon}`}>{s.value}</div>
                <div className="text-[9px] sm:text-[10px] text-white/50 mt-0.5 tracking-wider font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 px-2">
            <a
              href="tel:01039712272"
              className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-primary-500 hover:bg-primary-400 text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>010-3971-2272</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-50" />
            </a>
            <a
              href="sms:01039712272"
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-white/[0.06] border border-white/10 hover:bg-white/10 text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>문자상담</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-4 sm:pb-6">
        <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-white/30">
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
        </div>
      </div>

      {/* Event banner */}
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 gradient-animate py-3 sm:py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="bg-white text-amber-600 text-[10px] sm:text-xs font-black px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full animate-pulse-soft shrink-0">EVENT</span>
              <span className="text-white font-bold text-xs sm:text-base leading-tight">
                1만건 돌파 기념 — 출장비·내시경 검사 무료
              </span>
            </div>
            <a href="tel:01039712272" className="text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-1">
              자세히 보기 <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
