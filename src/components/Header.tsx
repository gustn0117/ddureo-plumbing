"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "서비스", href: "#services" },
    { label: "진행절차", href: "#process" },
    { label: "고객후기", href: "#reviews" },
    { label: "출동지역", href: "#coverage" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-soft py-3 border-b border-surface-300/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group">
            <span className={`text-lg font-black tracking-tight leading-none transition-colors duration-500 ${
              scrolled ? "text-navy-800" : "text-white"
            }`}>
              <span className={scrolled ? "text-gradient-animate" : ""}>뚜러배관케어</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`animated-underline px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "text-navy-500 hover:text-primary-500 hover:bg-primary-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:01039712272"
              className={`group flex items-center gap-2 font-bold py-2.5 px-5 rounded-full transition-all duration-300 text-sm ${
                scrolled
                  ? "bg-gradient-to-r from-primary-400 to-primary-500 text-white hover:shadow-glow"
                  : "glass text-white hover:bg-white/15"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>010-3971-2272</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all ${
              scrolled
                ? "text-navy-600 hover:text-primary-500 hover:bg-primary-50"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
          <nav className="flex flex-col gap-1 pb-4 bg-white rounded-2xl p-4 shadow-dramatic border border-surface-300/50">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-navy-600 hover:text-primary-500 rounded-xl hover:bg-primary-50 transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-surface-200 my-2" />
            <div className="flex gap-2 px-2">
              <a href="tel:01039712272" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-bold py-3 rounded-xl text-sm">
                <Phone className="w-4 h-4" />
                전화상담
              </a>
              <a href="sms:01039712272" className="flex-1 flex items-center justify-center gap-2 bg-navy-800 text-white font-bold py-3 rounded-xl text-sm">
                <MessageCircle className="w-4 h-4" />
                문자상담
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
