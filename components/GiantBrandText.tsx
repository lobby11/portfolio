"use client";

import { useState, useRef, MouseEvent, TouchEvent, useEffect } from "react";

export default function GiantBrandText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 500, y: 100 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const svgX = ((clientX - rect.left) / rect.width) * 1000;
    const svgY = ((clientY - rect.top) / rect.height) * 200;
    setCoords({ x: svgX, y: svgY });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    handlePointerMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      setIsHovered(true);
      handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      className="bg-[#101010] text-[#F1F1EE] border-t border-b border-white/20 relative overflow-hidden py-16 lg:py-24 select-none cursor-crosshair"
    >
      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16">
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-auto block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Spotlight Radial Mask */}
            <radialGradient
              id="spotlight-gradient"
              cx={coords.x}
              cy={coords.y}
              r="220"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>

            <mask id="spotlight-mask">
              <rect x="0" y="0" width="1000" height="200" fill="black" />
              <circle
                cx={coords.x}
                cy={coords.y}
                r="220"
                fill="url(#spotlight-gradient)"
              />
            </mask>
          </defs>

          {/* Base Dim Paper Hairline Outline */}
          <text
            x="500"
            y="145"
            textAnchor="middle"
            fill="none"
            stroke="#F1F1EE"
            strokeWidth="1.5"
            strokeOpacity={prefersReducedMotion ? "0.3" : "0.18"}
            className="font-display font-black uppercase"
            style={{
              fontFamily: '"Archivo", "Helvetica Neue", Arial, sans-serif',
              fontStretch: "88%",
              fontSize: "135px",
              letterSpacing: "-0.03em",
            }}
          >
            NITIN PATWA
          </text>

          {/* Lit Lime Outline Layer Controlled by Mask */}
          <text
            x="500"
            y="145"
            textAnchor="middle"
            fill="none"
            stroke="#CBFF44"
            strokeWidth="2.2"
            strokeOpacity={isHovered || prefersReducedMotion ? "1" : "0"}
            mask={prefersReducedMotion ? undefined : "url(#spotlight-mask)"}
            className="font-display font-black uppercase transition-opacity duration-300"
            style={{
              fontFamily: '"Archivo", "Helvetica Neue", Arial, sans-serif',
              fontStretch: "88%",
              fontSize: "135px",
              letterSpacing: "-0.03em",
            }}
          >
            NITIN PATWA
          </text>
        </svg>
      </div>

      <div className="text-center font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B6B68] mt-4">
        HOVER OR TOUCH TO ILLUMINATE
      </div>
    </section>
  );
}
