"use client";

import Image from "next/image";
import { AlertTriangle, CheckCircle, ArrowDown } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const cases = [
  { before: "배관이 꽉 막혀 물이 전혀 빠지지 않았습니다.", after: "전문 장비로 깔끔하게 해결 완료!", category: "배관 막힘", beforeImg: "/images/drain-cleaning.jpeg", afterImg: "/images/flexshaft-home.jpeg" },
  { before: "하수구 역류로 악취가 심했습니다.", after: "근본 원인을 찾아 완벽 수리!", category: "하수구 역류", beforeImg: "/images/endoscope-camera.jpeg", afterImg: "/images/sink-repair.jpeg" },
];

export default function BeforeAfter() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />
      <div className="absolute inset-0 cross-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-16">
          <span className="inline-flex items-center gap-2 text-primary-400 text-sm font-bold tracking-[0.15em] uppercase mb-4">
            <span className="w-10 h-px bg-gradient-to-r from-primary-400 to-transparent" />
            Before & After
          </span>
          <h2 className="section-title">
            <span className="text-gradient-animate">배관구조대</span>의 해결 사례
          </h2>
        </div>

        <div className="stagger grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-white rounded-3xl border border-surface-300/50 overflow-hidden shadow-soft card-lift hover-glow gradient-border-hover">
              <div className="px-8 pt-7">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-navy-300 bg-surface-100 px-3 py-1.5 rounded-full">
                  사례 {i + 1} · {c.category}
                </span>
              </div>

              {/* Before */}
              <div className="px-8 py-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block bg-navy-800 text-white text-[10px] font-black tracking-wider px-3 py-1 rounded-full mb-2.5">BEFORE</span>
                    <p className="text-navy-600 leading-relaxed mb-3">{c.before}</p>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden group">
                      <Image src={c.beforeImg} alt={`${c.category} 시공 전`} fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-red-900/10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 px-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />
                <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center shadow-glow flex-shrink-0">
                  <ArrowDown className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />
              </div>

              {/* After */}
              <div className="px-8 py-6 pb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block bg-emerald-500 text-white text-[10px] font-black tracking-wider px-3 py-1 rounded-full mb-2.5">AFTER</span>
                    <p className="text-emerald-800 font-medium leading-relaxed mb-3">{c.after}</p>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden group">
                      <Image src={c.afterImg} alt={`${c.category} 시공 후`} fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-emerald-900/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
