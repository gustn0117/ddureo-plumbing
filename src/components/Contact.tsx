"use client";

import Image from "next/image";
import { Phone, MessageCircle, Shield, Clock, MapPin, ArrowRight, Mail } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left - Water image with primary overlay */}
        <div className="reveal-left relative p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
          <Image src="/images/bg-dark-water.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-700/70 via-primary-600/60 to-navy-900/80" />

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/8 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-[80px]" />
            <div className="absolute top-[15%] left-[8%] w-16 h-16 border border-white/10 rounded-full float-slow" />
            <div className="absolute bottom-[20%] right-[15%] w-4 h-4 bg-white/20 rounded-full float-medium" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <span className="text-sm font-medium text-white">지금 상담 가능</span>
            </div>

            <p className="text-white/90 text-lg mb-4 font-medium">지금 전화하시면 출장비 무료!</p>

            <a href="tel:01039712272" className="block text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none mb-4 hover:scale-[1.02] transition-transform duration-300 origin-left">
              010-3971-2272
            </a>

            <a href="mailto:fe21501@naver.com" className="inline-flex items-center gap-2 text-white/80 text-sm mb-8 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              fe21501@naver.com
            </a>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Clock, text: "24시간 운영" },
                { icon: MapPin, text: "전국 출동" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-white/90 text-sm bg-white/15 border border-white/20 px-3 py-1.5 rounded-full">
                  <item.icon className="w-3.5 h-3.5" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-white/70 text-xs">
              <Shield className="w-3.5 h-3.5" />
              상담 전화는 무료이며, 개인정보는 안전하게 보호됩니다.
            </div>
          </div>
        </div>

        {/* Right - Dark with earth image */}
        <div className="reveal-right relative p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
          <Image src="/images/bg-abstract-blue.jpg" alt="" fill className="object-cover object-right" />
          <div className="absolute inset-0 bg-navy-900/90" />

          <div className="absolute top-8 right-8 w-24 h-24 dot-grid opacity-20" />

          <div className="relative z-10 max-w-md">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight shine-text">
              배관 문제,<br />
              더 이상 <span className="text-gradient-animate">고민하지 마세요.</span>
            </h3>
            <p className="text-white/65 mb-10 leading-relaxed">
              24시간 전문 상담사가 대기하고 있습니다.
              전화 한 통이면 전문 기사가 즉시 출동합니다.
            </p>

            <div className="space-y-3 mb-10">
              <a href="tel:01039712272" className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 text-white font-bold text-lg py-5 px-8 rounded-2xl transition-all duration-300 hover:shadow-glow-lg">
                <Phone className="w-5 h-5" />
                긴급상담 전화하기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="sms:01039712272" className="w-full flex items-center justify-center gap-3 bg-white/[0.08] backdrop-blur-sm border border-white/10 text-white font-bold text-lg py-5 px-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.15]">
                <MessageCircle className="w-5 h-5" />
                문자상담
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {["24시간 출동", "전국 가능", "미해결시 무료", "추가비용 없음"].map((t) => (
                <span key={t} className="text-xs text-white/70 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
