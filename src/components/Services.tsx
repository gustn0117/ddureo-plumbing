"use client";

import Image from "next/image";
import { Wrench, Building2, Home, Factory, Droplets, Phone, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  { icon: Wrench, title: "변기·싱크대 막힘", desc: "물 내려가는 속도가 더디거나 악취, 역류할 때! 전문 장비로 즉시 해결합니다.", accent: "from-primary-400 to-primary-600", tag: "BEST", tagColor: "bg-primary-400", image: "/images/toilet.jpg" },
  { icon: Building2, title: "상가 배관막힘", desc: "식당, 공공기관 등 많은 분들이 방문하시는 곳의 배관 문제를 해결합니다.", accent: "from-amber-400 to-amber-600", tag: null, tagColor: "", image: "/images/work-outdoor.jpeg" },
  { icon: Home, title: "주택·아파트 배관", desc: "반복되는 막힘, 노후배관 문제를 근본적으로 해결해드립니다.", accent: "from-emerald-400 to-emerald-600", tag: null, tagColor: "", image: "/images/sink-repair.jpeg" },
  { icon: Factory, title: "공장·산업시설", desc: "대형 산업시설 배관도 전문 장비로 확실하게 해결합니다.", accent: "from-navy-600 to-navy-800", tag: null, tagColor: "", image: "/images/factory-pipes.jpg" },
  { icon: Droplets, title: "누수 탐지·수리", desc: "보이지 않는 누수, 최신 탐지 장비로 정확히 찾아냅니다.", accent: "from-primary-500 to-primary-700", tag: "NEW", tagColor: "bg-emerald-500", image: "/images/pressure-gauge.jpeg" },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section ref={ref} id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-amber-100/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-primary-400 text-sm font-bold tracking-[0.15em] uppercase mb-4">
              <span className="w-10 h-px bg-gradient-to-r from-primary-400 to-transparent" />
              Services
            </span>
            <h2 className="section-title mb-4">
              다양한 배관 문제,<br />
              <span className="text-gradient-animate">확실하게 해결</span>합니다.
            </h2>
          </div>
          <a href="tel:01039712272" className="group inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold py-3.5 px-7 rounded-full transition-all duration-300 self-start lg:self-auto hover:shadow-elevated">
            <Phone className="w-4 h-4" />
            전체 서비스 상담
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className="group relative bg-white rounded-3xl border border-surface-300/50 overflow-hidden card-lift hover-glow gradient-border-hover">
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image src={s.image} alt={s.title} fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                {s.tag && (
                  <div className="absolute top-4 left-4">
                    <span className={`${s.tagColor} text-white text-[10px] font-black tracking-wider px-3 py-1.5 rounded-full shadow-sm`}>{s.tag}</span>
                  </div>
                )}
                <div className="absolute bottom-4 right-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-navy-800 mb-2.5">{s.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                <a href="tel:01039712272" className="inline-flex items-center gap-2 text-primary-500 font-bold text-sm group/link hover:gap-3 transition-all">
                  <Phone className="w-4 h-4" />
                  상담하기
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
