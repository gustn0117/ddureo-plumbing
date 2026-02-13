"use client";

import Image from "next/image";
import { Phone, Clock, MapPin, Droplets, Shield, ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white noise-bg">
      <div className="h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-black text-white">배관구조대</span>
                <span className="text-white/50 text-xs ml-2">24시간 전문 배관 서비스</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-6">
              <a href="tel:01039712272" className="flex items-center gap-1.5 hover:text-primary-300 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                010-3971-2272
              </a>
              <div className="w-px h-3 bg-white/10" />
              <a href="mailto:fe21501@naver.com" className="flex items-center gap-1.5 hover:text-primary-300 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                fe21501@naver.com
              </a>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                24시간 연중무휴
              </div>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                전국 출장 가능
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/50 text-xs">
              <Shield className="w-3 h-3" />
              고객님의 개인정보는 안전하게 보호됩니다.
            </div>
          </div>

          {/* Quick links + photo */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {["/images/technician-kitchen.jpeg", "/images/service-van.jpeg"].map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full overflow-hidden border-2 border-navy-900">
                  <Image src={src} alt="" width={40} height={40} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
            <a
              href="tel:01039712272"
              className="group flex items-center gap-2 glass text-white font-bold py-2.5 px-5 rounded-full text-sm hover:bg-white/15 transition-all"
            >
              <Phone className="w-4 h-4" />
              지금 상담하기
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5">
          <p className="text-white/45 text-sm text-center">
            &copy; 2026 배관구조대. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
