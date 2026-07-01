import type { Metadata } from "next";
import Script from "next/script";
import ClickGuard from "@/components/ClickGuard";
import NaverWcs from "@/components/NaverWcs";
import "./globals.css";

export const metadata: Metadata = {
  title: "배관구조대 | 막혔을땐 배관구조대 - 24시간 전국 출동",
  description:
    "하수구 막힘, 누수 탐지, 배관 청소 전문. 24시간 연중무휴, 전국 30분 출동. 미해결시 무료! 누적 해결 10,000건 이상. 전화 010-8210-4289",
  keywords:
    "배관, 하수구 막힘, 누수, 배관 청소, 변기 막힘, 싱크대 막힘, 24시간 배관, 전국 출동, 배관구조대",
  openGraph: {
    title: "배관구조대 | 막혔을땐 배관구조대",
    description:
      "하수구 막힘, 누수까지 한번에 해결! 미해결시 무료. 전국 30분 출동.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {/* Smartlog 분석 스크립트 */}
        <Script id="smartlog-config" strategy="afterInteractive">
          {`var hpt_info={'_account':'UHPT-300514', '_server': 'a300'};`}
        </Script>
        <Script
          id="smartlog-core"
          src="//cdn.smlog.co.kr/core/smart_renew.js"
          strategy="afterInteractive"
        />
        <noscript>
          <img
            src="//a300.smlog.co.kr/smart_bda?_account=300514"
            style={{ display: "none", width: 0, height: 0 }}
            alt=""
          />
        </noscript>
        {/* 네이버 검색광고 로그분석 + 전환(lead) 추적 */}
        <NaverWcs />
        <ClickGuard />
        {children}
      </body>
    </html>
  );
}
