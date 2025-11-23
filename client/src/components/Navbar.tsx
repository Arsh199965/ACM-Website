"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "About", number: "1.0" },
  { label: "Events", number: "2.0" },
  { label: "Team", number: "3.0" },
  { label: "Clubs", number: "4.0" },
  { label: "Animeverse", number: "5.0" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-full max-w-[1200px] -translate-x-1/2 px-4">
      {/* Desktop */}
      <div className="hidden w-full overflow-hidden rounded-2xl border border-white/10 bg-[#181818]/45 text-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md md:flex">
        <div className="flex items-center border-r border-white/5 bg-acm-blue/35 px-2">
          <div className="relative h-8 w-16">
            <Image
              src="/ACM_Logo_white_text.png"
              alt="ACM Logo"
              fill
              className="object-contain"
              sizes="128px"
              priority
            />
          </div>
          <span className="rounded-full text-[10px] font-semibold  text-white/70">
            GGSIPU EDC ACM
          </span>
        </div>

        <ul className="flex flex-1 items-stretch text-xs uppercase tracking-[0.3em]">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className="flex flex-1 min-w-[140px] items-center justify-center gap-3 border-r border-white/5 px-6 py-3 text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              <span className="font-mono text-[11px] tracking-[0.2em]">
                {item.number}
              </span>
              <span className="font-semibold tracking-[0.15em]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="flex w-full flex-col rounded-2xl border border-white/10 bg-[#181818]/95 text-white shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="relative h-8 w-28">
            <Image
              src="/ACM_Logo_white_text.png"
              alt="ACM logo"
              fill
              className="object-contain"
              sizes="112px"
              priority
            />
          </div>
          <button
            className="rounded-full border border-white/20 p-2"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="block h-[2px] w-5 bg-white" />
            <span className="mt-1 block h-[2px] w-5 bg-white" />
            <span className="mt-1 block h-[2px] w-5 bg-white" />
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-white/10 px-4 py-3">
            <ul className="space-y-3 text-sm uppercase tracking-[0.25em]">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between text-white/70"
                >
                  <span className="font-mono text-[11px]">{item.number}</span>
                  <span className="font-semibold">{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <button className="rounded-lg bg-acm-blue px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
