"use client";

import Image from "next/image";
import { Camera, Monitor, Target, ArrowRight, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function Inspection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="grid lg:grid-cols-5">
        {/* Left - image with gradient overlay */}
        <div className="reveal-left relative flex flex-col justify-center lg:col-span-3">
          <Image src="/images/pipe-inspection.jpeg" alt="배관 내시경 검사" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 via-primary-600/85 to-navy-900/90" />

          {/* Decorative */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-8 left-8 w-28 h-28 dot-grid opacity-20" />
            <div className="absolute top-[20%] right-[10%] w-20 h-20 border border-white/10 rounded-full float-slow" />
            <div className="absolute bottom-[25%] right-[25%] w-6 h-6 bg-amber-400/30 rounded-full float-medium" />
          </div>

          <div className="relative z-10 p-10 sm:p-14 lg:p-16 xl:p-20">
            <div className="inline-flex items-center gap-2 glass text-white text-xs font-bold tracking-wider px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              1만건 돌파 기념 이벤트
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-5 shine-text">
              내시경 검사
              <br />
              <span className="neon-amber">무료</span>
            </h2>

            <p className="text-white/75 text-base sm:text-lg max-w-md leading-relaxed mb-8">
              하수구 배관은 내부를 육안으로 확인하기 어렵습니다.
              정밀 내시경으로 정확하게 파악합니다.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:01039712272"
                className="group inline-flex items-center gap-3 bg-white text-primary-600 font-bold text-base py-4 px-8 rounded-full hover:shadow-dramatic transition-all duration-300"
              >
                무료 검사 예약
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                    <Image src="/images/endoscope-camera.jpeg" alt="내시경 장비" width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                    <Image src="/images/flexshaft-operation.jpeg" alt="전문 장비" width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                </div>
                <span className="text-white/60 text-xs">전문 장비 · 전문 기사</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right - feature list */}
        <div className="reveal-right bg-white p-10 sm:p-14 lg:p-12 xl:p-16 flex flex-col justify-center relative lg:col-span-2">
          <div className="absolute top-6 right-6 w-20 h-20 border border-surface-200 rounded-full opacity-40" />
          <div className="absolute bottom-10 right-10 w-32 h-32 dot-grid opacity-20" />

          <span className="inline-flex items-center gap-2 text-primary-400 text-sm font-bold tracking-[0.15em] uppercase mb-8">
            <span className="w-10 h-px bg-gradient-to-r from-primary-400 to-transparent" />
            How it works
          </span>

          <div className="space-y-0">
            {[
              { icon: Camera, num: "01", title: "정밀 내시경 배관 진단", desc: "최첨단 카메라로 배관 내부를 직접 확인하여 정확한 원인을 파악합니다." },
              { icon: Monitor, num: "02", title: "실시간 영상 확인", desc: "고화질 모니터로 현장에서 바로 배관 상태를 확인하실 수 있습니다." },
              { icon: Target, num: "03", title: "정확한 원인 분석", desc: "전문가의 진단 후 고객님 상황에 맞는 최적의 솔루션을 제안드립니다." },
            ].map((f, i) => (
              <div key={i} className="group flex gap-5 py-7 border-b border-surface-300/60 last:border-b-0 hover:pl-2 hover:bg-primary-50/50 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-black text-surface-200 group-hover:text-primary-100 transition-colors duration-300">
                    {f.num}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 group-hover:shadow-sm transition-all duration-300">
                      <f.icon className="w-4 h-4 text-primary-400" />
                    </div>
                    <h3 className="text-base font-bold text-navy-800">{f.title}</h3>
                  </div>
                  <p className="text-navy-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
