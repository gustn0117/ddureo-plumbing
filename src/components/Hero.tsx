"use client";

import Image from "next/image";
import { Phone, MessageCircle, ChevronDown, Zap, Shield, Clock, ArrowRight } from "lucide-react";

export default function Hero() {
  const marqueeText = "24시간 긴급출동 · 출장비 무료 · 내시경 무료 · 미해결시 0원 · 전국 출동 · ";

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-navy-950">
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-water.jpg"
          alt="배관 서비스"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/80 to-navy-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-navy-900/40" />
      </div>

      {/* Ambient morphing blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-8%] w-[55%] h-[55%] bg-primary-400/12 blob-morph blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-8%] w-[45%] h-[45%] bg-primary-600/8 blob-morph blur-[120px]" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-[40%] left-[60%] w-[25%] h-[25%] bg-amber-500/6 blob-morph blur-[100px]" style={{ animationDelay: "-6s" }} />
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-12 w-40 h-40 dot-grid opacity-20 float-slow" />
        <div className="absolute top-[30%] right-[8%] w-24 h-24 border border-white/8 rounded-full float-medium" />
        <div className="absolute top-[55%] right-[18%] w-8 h-8 bg-primary-400/15 rounded-full float-slow" style={{ animationDelay: "-1s" }} />
        <div className="absolute top-[20%] right-[28%] w-px h-40 bg-gradient-to-b from-transparent via-white/8 to-transparent rotate-[30deg]" />
        <div className="absolute bottom-[30%] left-[5%] w-20 h-20 border border-white/5 rounded-full float-medium" style={{ animationDelay: "-3s" }} />
        {/* Orbiting elements */}
        <div className="absolute top-[35%] right-[12%] w-3 h-3 bg-amber-400/30 rounded-full orbit-slow" />
        <div className="absolute top-[25%] right-[20%] w-2 h-2 bg-primary-300/20 rounded-full orbit-medium" />
      </div>

      {/* Top scrolling marquee */}
      <div className="relative z-10 mt-20 sm:mt-24 border-y border-white/15 bg-white/[0.04] backdrop-blur-sm py-3 overflow-hidden">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-sm text-white/50 font-medium tracking-wider whitespace-nowrap px-2">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* Live tag */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-primary-300 text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.15em]">
              하수 누수 토탈케어
            </span>
          </div>

          {/* Giant brand */}
          <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-[1] tracking-tight mb-6 hero-brand shine-text">
            배관구조대
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-lg mx-auto leading-relaxed mb-12">
            하수구 막힘부터 누수까지,
            <br />
            전문 기술진이 <span className="text-white font-semibold">직접 해결</span>합니다.
          </p>

          {/* Mini stat badges */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 mb-14">
            {[
              { icon: Clock, value: "30분", label: "평균출동", neon: "neon-primary" },
              { icon: Zap, value: "10K+", label: "누적해결", neon: "neon-amber" },
              { icon: Shield, value: "₩0", label: "미해결시", neon: "neon-emerald" },
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <s.icon className={`w-4 h-4 ${s.neon} mx-auto mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity`} />
                <div className={`text-3xl sm:text-4xl font-black ${s.neon}`}>{s.value}</div>
                <div className="text-[10px] text-white/60 mt-0.5 tracking-wider font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:01039712272"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 text-white font-bold text-lg py-5 px-10 rounded-full transition-all duration-300 hover:shadow-glow-lg overflow-hidden"
            >
              <div className="absolute inset-0 shimmer rounded-full" />
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10">010-3971-2272</span>
              <ArrowRight className="relative z-10 w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
            <a
              href="sms:01039712272"
              className="inline-flex items-center justify-center gap-3 glass text-white font-bold text-lg py-5 px-10 rounded-full transition-all duration-300 hover:bg-white/15"
            >
              <MessageCircle className="w-5 h-5" />
              <span>문자상담</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-6">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>

      {/* Bottom event banner */}
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 gradient-animate py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="bg-white text-amber-600 text-xs font-black px-3 py-1 rounded-full animate-pulse-soft">EVENT</span>
              <span className="text-white font-bold text-sm sm:text-base">
                1만건 돌파 기념 — 출장비 / 내시경 검사 <span className="text-white/80">무료</span>
              </span>
            </div>
            <a href="tel:01039712272" className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
              자세히 보기 <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
