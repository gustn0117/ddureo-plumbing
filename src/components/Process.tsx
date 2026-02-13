"use client";

import Image from "next/image";
import { PhoneCall, Truck, Settings, ClipboardCheck, Phone, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  { icon: PhoneCall, title: "문의접수", desc: "전화 한 통이면 접수 완료! 증상을 말씀해주시면 최적의 솔루션을 안내해드립니다.", num: "01", color: "from-primary-400 to-primary-500", img: "/images/equipment-setup.jpeg" },
  { icon: Truck, title: "긴급출동", desc: "전국 어디든 평균 30분 이내 출동. 전문 장비를 갖춘 기사가 신속히 방문합니다.", num: "02", color: "from-amber-400 to-amber-500", img: "/images/service-van.jpeg" },
  { icon: Settings, title: "작업 진행", desc: "내시경 진단으로 정확한 원인 파악 후 맞춤 장비로 작업을 진행합니다.", num: "03", color: "from-emerald-400 to-emerald-500", img: "/images/flexshaft-operation.jpeg" },
  { icon: ClipboardCheck, title: "완료·검수", desc: "작업 완료 후 꼼꼼한 검수까지. 재발 방지 팁도 안내해드립니다.", num: "04", color: "from-primary-300 to-primary-400", img: "/images/technician-kitchen.jpeg" },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section ref={ref} id="process" className="relative overflow-hidden bg-surface-100 py-28 sm:py-36">
      <div className="absolute inset-0 diagonal-stripes pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-20">
          <span className="inline-flex items-center gap-2 text-primary-400 text-sm font-bold tracking-[0.15em] uppercase mb-4">
            <span className="w-8 h-px bg-primary-400" />
            Process
            <span className="w-8 h-px bg-primary-400" />
          </span>
          <h2 className="section-title mb-4">
            전화 한 통이면 <span className="text-gradient-animate">끝!</span>
          </h2>
          <p className="text-navy-400 text-lg max-w-md mx-auto">복잡한 과정 없이 간단하게 진행됩니다</p>
        </div>

        <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="relative bg-white rounded-3xl border border-surface-300/50 overflow-hidden card-lift hover-glow gradient-border-hover h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  <div className="absolute top-3 right-4 text-5xl font-black text-white/40 leading-none select-none">{s.num}</div>
                </div>
                <div className="relative z-10 p-7 pt-2">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 -mt-10 relative z-10 border-4 border-white`}>
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-[10px] font-black text-navy-300 tracking-widest bg-surface-100 px-2.5 py-1 rounded inline-block mb-3">STEP {s.num}</span>
                  <h3 className="text-xl font-bold text-navy-800 mb-3">{s.title}</h3>
                  <p className="text-navy-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 bg-primary-400 rounded-full flex items-center justify-center shadow-glow">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-16">
          <a href="tel:01039712272" className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:shadow-glow-lg">
            <Phone className="w-5 h-5" />
            지금 전화하기
            <span className="text-white/70 text-sm">010-3971-2272</span>
          </a>
        </div>
      </div>
    </section>
  );
}
