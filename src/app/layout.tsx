import type { Metadata } from "next";
import ClickGuard from "@/components/ClickGuard";
import "./globals.css";

export const metadata: Metadata = {
  title: "배관구조대 | 막혔을땐 배관구조대 - 24시간 전국 출동",
  description:
    "하수구 막힘, 누수 탐지, 배관 청소 전문. 24시간 연중무휴, 전국 30분 출동. 미해결시 무료! 누적 해결 10,000건 이상. 전화 010-3971-2272",
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
        <ClickGuard />
        {children}
      </body>
    </html>
  );
}
