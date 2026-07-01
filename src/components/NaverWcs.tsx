"use client";

import Script from "next/script";
import { useEffect } from "react";

const WA_KEY = "s_1342baa98ed9"; // 네이버 검색광고 공통키
const SITE_DOMAIN = "ddureo.hsweb.pics";

declare global {
  interface Window {
    wcs_add?: Record<string, string>;
    wcs_do?: (nasa?: unknown) => void;
    wcs?: {
      inflow: (domain?: string) => void;
      trans: (conv: { type: string; value?: string }) => void;
    };
  }
}

export default function NaverWcs() {
  // 모든 전화걸기(tel:) / 문자상담(sms:) 버튼 클릭 시 전환(lead) 집계
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      if (!href.startsWith("tel:") && !href.startsWith("sms:")) return;

      if (window.wcs && typeof window.wcs.trans === "function") {
        window.wcs.trans({ type: "lead" });
      }
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return (
    <Script
      src="//wcs.naver.net/wcslog.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (!window.wcs_add) window.wcs_add = {};
        window.wcs_add["wa"] = WA_KEY;
        if (window.wcs) {
          window.wcs.inflow(SITE_DOMAIN);
          window.wcs_do?.();
        }
      }}
    />
  );
}
