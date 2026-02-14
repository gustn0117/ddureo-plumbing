"use client";

import Image from "next/image";
import { TrendingUp, Users, Clock, Star, CheckCircle2, Award } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function Stats() {
  const ref = useReveal();

  const stats = [
    { value: "99.2%", label: "문제 해결 성공률", icon: TrendingUp, iconBg: "bg-primary-500", cardBg: "bg-primary-500", isHighlight: true },
    { value: "10,000+", label: "누적 해결 건수", icon: Users, iconBg: "bg-navy-800", cardBg: "bg-navy-800", isHighlight: true },
    { value: "98.6%", label: "재이용 의향률", icon: CheckCircle2, iconBg: "bg-emerald-500", cardBg: "bg-white", isHighlight: false },
    { value: "30분", label: "평균 출동 시간", icon: Clock, iconBg: "bg-primary-400", cardBg: "bg-white", isHighlight: false },
    { value: "24시간", label: "연중무휴 운영", icon: Award, iconBg: "bg-amber-500", cardBg: "bg-white", isHighlight: false },
    { value: "5.0", label: "고객 만족도", icon: Star, iconBg: "bg-amber-500", cardBg: "bg-white", isHighlight: false },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 cross-pattern opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-primary-50/50 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-500 text-sm font-bold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full border border-primary-100 mb-6">
            <TrendingUp className="w-4 h-4" />
            수치로 증명합니다
          </span>
          <h2 className="section-title section-accent mx-auto w-fit">
            <span className="text-gradient-animate">배관구조대</span>의 실적
          </h2>
        </div>

        <div className="stagger grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 ${
                s.isHighlight
                  ? `${s.cardBg} text-white shadow-lg`
                  : "bg-white border-2 border-surface-200 hover:border-primary-200 hover:shadow-md"
              }`}
            >
              <div className="relative z-10">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5 ${
                  s.isHighlight ? "bg-white/20" : s.iconBg
                }`}>
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className={`text-3xl sm:text-4xl md:text-5xl font-black mb-1 tracking-tight whitespace-nowrap ${
                  s.isHighlight ? "text-white" : "text-navy-900"
                }`}>
                  {s.value}
                </div>
                <div className={`text-xs sm:text-sm font-semibold ${
                  s.isHighlight ? "text-white/80" : "text-navy-400"
                }`}>
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {["/images/plumber-work.jpg", "/images/tools-wrench.jpg", "/images/plumber-work2.jpg"].map((src, i) => (
              <div key={i} className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image src={src} alt="전문가" width={40} height={40} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
          <p className="text-navy-300 text-sm">
            배관구조대는 <span className="text-primary-500 font-bold">결과</span>로 신뢰를 증명합니다
          </p>
        </div>
      </div>
    </section>
  );
}
