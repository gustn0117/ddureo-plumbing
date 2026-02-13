"use client";

import Image from "next/image";
import { Star, CheckCircle2, Quote, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const reviews = [
  { name: "김O희", location: "서울 강남구", text: "처음 겪는 경우라 가격이나 비용 등 막막했는데, 배관구조대에서 상담받고 빠르게 해결됐습니다. 친절하고 꼼꼼한 서비스에 감동했어요.", initial: "김" },
  { name: "이O준", location: "경기 수원시", text: "기사님 빠르게 해결해주시고 저희가 바꿨어야 하던 수전까지 무료로 해주셔서 너무 감사했어요. 만족해서 기쁩니다!", initial: "이" },
  { name: "박O수", location: "인천 부평구", text: "대형 식당인데도 불구하고 차분하게 작업해주시고, 비용과 서비스 너무 만족합니다. 문제가 생기면 또 바로 연락하겠습니다.", initial: "박" },
  { name: "정O민", location: "부산 해운대구", text: "아내가 기사님 친절하고 잘 뚫어주신다고 하네요. 주변에도 소개 많이 해야겠어요. 감사합니다!", initial: "정" },
];

export default function Reviews() {
  const ref = useReveal();

  return (
    <section ref={ref} id="reviews" className="section-padding relative overflow-hidden bg-surface-100">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />
      <div className="absolute inset-0 diagonal-stripes pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-primary-400 text-sm font-bold tracking-[0.15em] uppercase mb-4">
              <span className="w-10 h-px bg-gradient-to-r from-primary-400 to-transparent" />
              Reviews
            </span>
            <h2 className="section-title">
              고객님들의 <span className="text-gradient-animate">리얼후기</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-soft border border-surface-300/50">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div>
              <span className="text-3xl font-black text-navy-900">5.0</span>
              <span className="text-xs text-navy-400 ml-1.5">고객만족도</span>
            </div>
          </div>
        </div>

        {/* Featured + stacked */}
        <div className="grid md:grid-cols-5 gap-5">
          {/* Featured card */}
          <div className="reveal-left md:col-span-3 relative rounded-3xl overflow-hidden group card-lift bg-navy-900">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-navy-800/50" />

            <div className="absolute top-6 right-6 opacity-[0.04]">
              <Quote className="w-44 h-44 text-white" />
            </div>
            <div className="absolute bottom-4 left-4 w-24 h-24 dot-grid opacity-10" />
            <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-primary-400/5 rounded-full blur-[60px]" />

            <div className="relative z-10 p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-between min-h-[340px]">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-white/55 text-xs tracking-wider">실제 이용 후기</span>
                </div>
                <p className="text-xl sm:text-2xl lg:text-[1.7rem] leading-relaxed text-white/90 mb-8 font-medium">
                  &ldquo;{reviews[0].text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-400/30 shadow-glow">
                  <Image src="/images/flexshaft-operation.jpeg" alt="시공 사진" width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="font-bold text-white">{reviews[0].name} 고객님</div>
                  <div className="text-white/60 text-sm">{reviews[0].location}</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-emerald-400 text-xs glass px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  인증됨
                </div>
              </div>
            </div>
          </div>

          {/* Stacked cards */}
          <div className="reveal-right md:col-span-2 space-y-4">
            {reviews.slice(1).map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-surface-300/50 card-lift hover-glow gradient-border-hover">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full flex items-center justify-center font-bold text-primary-500 text-sm flex-shrink-0">
                    {r.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-bold text-sm text-navy-800">{r.name}</span>
                        <span className="text-xs text-navy-300 ml-2">{r.location}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-navy-500 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 mt-3">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      실제 이용 후기
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl px-8 py-6 shadow-soft border border-surface-300/50">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {["/images/drain-cleaning.jpeg", "/images/endoscope-camera.jpeg", "/images/service-van.jpeg"].map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image src={src} alt="시공" width={40} height={40} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
            <p className="text-gradient-animate font-bold text-lg">
              배관구조대는 해결 못할 시 금액을 받지 않습니다!
            </p>
          </div>
          <a href="tel:01039712272" className="inline-flex items-center gap-2 bg-primary-400 hover:bg-primary-300 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-sm hover:shadow-glow">
            상담하기
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
