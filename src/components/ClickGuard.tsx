"use client";

import { useEffect } from "react";

const STORAGE_KEY = "cg_data";
const MAX_VISITS = 10; // 1시간 내 최대 방문 수
const MAX_CTA_CLICKS = 5; // 1시간 내 최대 CTA 클릭 수
const TIME_WINDOW = 60 * 60 * 1000; // 1시간

interface ClickData {
  visits: number[];
  clicks: number[];
  blocked: boolean;
}

function getData(): ClickData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { visits: [], clicks: [], blocked: false };
}

function saveData(data: ClickData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

function filterRecent(timestamps: number[]): number[] {
  const cutoff = Date.now() - TIME_WINDOW;
  return timestamps.filter((t) => t > cutoff);
}

export default function ClickGuard() {
  useEffect(() => {
    const data = getData();

    // 이전 차단 상태에서 시간 지났으면 해제
    if (data.blocked) {
      const recentVisits = filterRecent(data.visits);
      if (recentVisits.length < MAX_VISITS) {
        data.blocked = false;
      }
    }

    // 방문 기록
    data.visits = filterRecent(data.visits);
    data.visits.push(Date.now());

    // 과도한 방문 감지
    if (data.visits.length > MAX_VISITS) {
      data.blocked = true;
    }

    saveData(data);

    if (data.blocked) {
      document.body.innerHTML = "";
      return;
    }

    // CTA 클릭 감시 (tel: 링크)
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      if (!href.startsWith("tel:")) return;

      const d = getData();
      d.clicks = filterRecent(d.clicks);
      d.clicks.push(Date.now());

      if (d.clicks.length > MAX_CTA_CLICKS) {
        d.blocked = true;
        saveData(d);
        e.preventDefault();
        document.body.innerHTML = "";
        return;
      }

      saveData(d);
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
