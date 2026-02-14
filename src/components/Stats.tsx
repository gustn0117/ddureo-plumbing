"use client";

import Image from "next/image";
import { TrendingUp, Users, Clock, Star, CheckCircle2, Award } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function Stats() {
  const ref = useReveal();

  const stats = [
    { value: "99.2%", label: "문제 해결 성공률", icon: TrendingUp, color: "text-primary-500", bg: "bg-primary-50", border: "border-primary-200" },
    { value: "10,000+", label: "누적 해결 건수", icon: Users, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
    { value: "98.6%", label: "재이용 의향률", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
    { value: "30분", label: "평균 출동 시간", icon: Clock, color: "text-primary-600", bg: "bg-primary-50", border: "border-primary-200" },
    { value: "24시간", label: "연중무휴 운영", icon: Award, color: "text-navy-700", bg: "bg-navy-50", border: "border-navy-200" },
    { value: "5.0", label: "고객 만족도", icon: Star, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-primary-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-primary-300 text-sm font-bold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            수치로 증명합니다
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            <span className="text-primary-300">배관구조대</span>의 실적
          </h2>
        </div>

        <div className="stagger grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${s.bg} ${s.border} border flex items-center justify-center mx-auto mb-4`}>
                <s.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${s.color}`} />
              </div>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-black mb-1 tracking-tight text-navy-900`}>
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-navy-400">
                {s.label}
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
          <p className="text-white/60 text-sm">
            배관구조대는 <span className="text-primary-300 font-bold">결과</span>로 신뢰를 증명합니다
          </p>
        </div>
      </div>
    </section>
  );
}
