"use client";

import Image from "next/image";
import { Phone, MessageCircle, ChevronDown, Zap, Shield, Clock, ArrowRight } from "lucide-react";

export default function Hero() {
  const marqueeText = "24시간 긴급출동 · 출장비 무료 · 내시경 무료 · 미해결시 0원 · 전국 출동 · ";

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── Layer 1: Base gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a9ecc] via-[#3b8abf] to-[#1e5a8a]" />

      {/* ── Layer 2: Radial highlights ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_25%,rgba(135,206,250,0.45)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_80%_10%,rgba(255,220,150,0.12)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f3a5e]/50 via-transparent to-transparent" />

      {/* ── Layer 3: Dot grid pattern ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* ── Layer 4: Diagonal lines ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)",
      }} />

      {/* ── Layer 5: Large concentric rings ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-white/[0.08]" />
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[750px] h-[750px] sm:w-[1000px] sm:h-[1000px] rounded-full border border-white/[0.05]" />
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] sm:w-[1200px] sm:h-[1200px] rounded-full border border-white/[0.03]" />
      </div>

      {/* ── Layer 6: SVG wave shapes ── */}
      <svg className="absolute bottom-[12%] left-0 w-full h-40 sm:h-56 pointer-events-none" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path d="M0,120 C240,180 480,60 720,120 C960,180 1200,60 1440,120 L1440,200 L0,200Z" fill="rgba(255,255,255,0.03)" />
        <path d="M0,140 C360,80 600,180 900,100 C1100,50 1300,150 1440,100 L1440,200 L0,200Z" fill="rgba(255,255,255,0.025)" />
      </svg>

      {/* ── Layer 7: Hexagon accent (top-left) ── */}
      <svg className="absolute top-[12%] left-[3%] w-32 h-32 sm:w-48 sm:h-48 pointer-events-none opacity-[0.06]" viewBox="0 0 100 100">
        <polygon points="50,5 93,25 93,75 50,95 7,75 7,25" fill="none" stroke="white" strokeWidth="0.8" />
        <polygon points="50,20 78,33 78,67 50,80 22,67 22,33" fill="none" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* ── Layer 7b: Hexagon accent (bottom-right) ── */}
      <svg className="absolute bottom-[22%] right-[5%] w-24 h-24 sm:w-40 sm:h-40 pointer-events-none opacity-[0.05]" viewBox="0 0 100 100">
        <polygon points="50,5 93,25 93,75 50,95 7,75 7,25" fill="none" stroke="white" strokeWidth="0.8" />
      </svg>

      {/* ── Layer 8: Floating geometric shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Diamond */}
        <div className="absolute top-[18%] right-[12%] w-6 h-6 sm:w-8 sm:h-8 border border-white/10 rotate-45 float-slow" />
        {/* Small circle */}
        <div className="absolute top-[35%] left-[8%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/10 float-medium" style={{ animationDelay: "-2s" }} />
        {/* Plus */}
        <div className="absolute bottom-[35%] right-[8%] w-5 h-5 sm:w-7 sm:h-7 float-slow" style={{ animationDelay: "-4s" }}>
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-white/10" />
        </div>
        {/* Triangle */}
        <svg className="absolute bottom-[40%] left-[12%] w-5 h-5 sm:w-6 sm:h-6 float-medium opacity-[0.08]" style={{ animationDelay: "-3s" }} viewBox="0 0 20 20">
          <polygon points="10,2 18,18 2,18" fill="none" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      {/* ── Layer 9: Soft color blurs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] left-[5%] w-[35%] h-[25%] bg-sky-300/15 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[0%] w-[25%] h-[18%] bg-cyan-200/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[20%] h-[15%] bg-teal-300/8 rounded-full blur-[70px]" />
      </div>

      {/* Scrolling marquee */}
      <div className="relative z-10 mt-16 sm:mt-20 md:mt-24 border-y border-white/20 bg-white/10 backdrop-blur-sm py-2.5 sm:py-3 overflow-hidden">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-xs sm:text-sm text-white/60 font-semibold tracking-wider whitespace-nowrap px-2">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Technician image */}
        <div className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] mb-3 sm:mb-4">
          <div className="relative aspect-square">
            {/* Soft back-glow */}
            <div className="absolute inset-[12%] rounded-full bg-white/20 blur-[60px]" />

            <Image
              src="/images/technician-hero.png"
              alt="배관구조대 전문 기술자"
              fill
              className="object-contain drop-shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
              priority
            />
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
            <span className="text-white/90 text-base sm:text-xl md:text-2xl font-black tracking-[0.12em] sm:tracking-[0.15em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              하수 · 누수 토탈케어
            </span>
          </div>

          {/* Brand */}
          <h1 className="text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw] font-black leading-[1] tracking-tight mb-3 sm:mb-4 hero-brand shine-text">
            배관구조대
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-white/75 max-w-md mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            <span className="inline-block">하수구 막힘부터 누수까지,</span>{" "}
            <span className="inline-block">전문 기술진이 <span className="text-white font-semibold">직접 해결</span>합니다.</span>
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
                <div className="text-[9px] sm:text-[10px] text-white/45 mt-0.5 tracking-wider font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 px-2">
            <a
              href="tel:01039712272"
              className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-white hover:bg-white/90 text-primary-700 font-bold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 rounded-full transition-colors shadow-xl shadow-black/20"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>010-3971-2272</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-50" />
            </a>
            <a
              href="sms:01039712272"
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-white/10 border border-white/25 hover:bg-white/20 text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 rounded-full transition-colors"
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
                <span className="inline-block">1만건 돌파 기념</span>{" "}
                <span className="inline-block">— 출장비·내시경 검사 무료</span>
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
