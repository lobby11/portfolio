"use client";

import { useState } from "react";
import DisplayHeading from "@/components/DisplayHeading";
import { PORTFOLIO_DATA } from "@/src/data/portfolio";

export default function NetworkOrbit() {
  const [isPaused, setIsPaused] = useState(false);

  const orbitSkills = PORTFOLIO_DATA.orbitSkills;
  const outerSkills = orbitSkills.slice(0, 8);
  const innerSkills = orbitSkills.slice(8);

  const stats = PORTFOLIO_DATA.stats;
  const skillCategories = PORTFOLIO_DATA.skills;

  return (
    <section
      id="skills"
      className="bg-[#CBFF44] text-[#101010] py-20 lg:py-28 px-6 lg:px-12 xl:px-16 relative overflow-hidden border-t border-b border-black/20"
    >
      <div className="max-w-[1536px] mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-[900px] mx-auto mb-16">
          <div className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-[#101010]/70 mb-3">
            TECHNICAL PROFICIENCY
          </div>
          <DisplayHeading
            size="section"
            lines={[
              { text: "FRONT TO BACK", type: "solid" },
              { text: "TO CLOUD.", outline: true },
            ]}
            onLime
          />
        </div>

        {/* Centered Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-black/20 mb-16 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span
                className={`font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase ${
                  stat.outline ? "outline" : "text-[#101010]"
                }`}
                style={{
                  fontFamily: '"Archivo", "Helvetica Neue", Arial, sans-serif',
                  fontStretch: "88%",
                }}
              >
                {stat.value}
              </span>
              <span className="font-mono text-[11px] font-bold tracking-wider text-[#101010]/80 uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Orbit Rings Container */}
        <div
          className="relative w-full flex justify-center items-center my-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <style jsx>{`
            @keyframes rotateClockwise {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            @keyframes rotateCounterClockwise {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(-360deg);
              }
            }
            .orbit-outer {
              animation: rotateClockwise 46s linear infinite;
            }
            .orbit-inner {
              animation: rotateCounterClockwise 34s linear infinite;
            }
            .orbit-counter-outer {
              animation: rotateCounterClockwise 46s linear infinite;
            }
            .orbit-counter-inner {
              animation: rotateClockwise 34s linear infinite;
            }
            .paused {
              animation-play-state: paused !important;
            }
          `}</style>

          {/* Scaled Orbit Canvas */}
          <div className="relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] lg:w-[580px] lg:h-[580px] flex items-center justify-center">
            {/* Center Core Black Circle with NP monogram */}
            <div className="absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#101010] p-3.5 flex items-center justify-center shadow-2xl border-2 border-[#101010] ring-4 ring-black/20 overflow-hidden">
              <span className="font-display font-black text-2xl sm:text-3xl text-[#F1F1EE] uppercase tracking-tighter">
                NP
              </span>
            </div>

            {/* Outer Orbit Track */}
            <div
              className={`absolute inset-0 rounded-full border border-dashed border-black/40 orbit-outer ${
                isPaused ? "paused" : ""
              }`}
            >
              {outerSkills.map((label, i) => {
                const angle = (i * 360) / outerSkills.length;
                return (
                  <div
                    key={label}
                    className="absolute top-1/2 left-1/2 -ml-16 -mt-5 w-32 h-10 flex items-center justify-center"
                    style={{
                      transform: `rotate(${angle}deg) translate(clamp(135px, 25vw, 290px)) rotate(${-angle}deg)`,
                    }}
                  >
                    <div
                      className={`orbit-counter-outer ${isPaused ? "paused" : ""}`}
                    >
                      <div className="bg-[#F1F1EE] text-[#101010] border border-black px-3 py-1 font-mono text-[11px] font-extrabold uppercase shadow-sm whitespace-nowrap rounded-none">
                        {label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inner Orbit Track */}
            <div
              className={`absolute inset-12 sm:inset-16 lg:inset-20 rounded-full border border-solid border-black/35 orbit-inner ${
                isPaused ? "paused" : ""
              }`}
            >
              {innerSkills.map((label, i) => {
                const angle = (i * 360) / innerSkills.length;
                return (
                  <div
                    key={label}
                    className="absolute top-1/2 left-1/2 -ml-14 -mt-5 w-28 h-10 flex items-center justify-center"
                    style={{
                      transform: `rotate(${angle}deg) translate(clamp(90px, 17vw, 195px)) rotate(${-angle}deg)`,
                    }}
                  >
                    <div
                      className={`orbit-counter-inner ${isPaused ? "paused" : ""}`}
                    >
                      <div className="bg-[#F1F1EE] text-[#101010] border border-black px-2.5 py-1 font-mono text-[10px] font-extrabold uppercase shadow-sm whitespace-nowrap rounded-none">
                        {label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 5 Hairline Skill Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-l border-black/20 mt-16">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="border-r border-b border-black/20 p-6 bg-white/40 backdrop-blur-sm flex flex-col"
            >
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#101010] pb-3 border-b border-black/20 mb-4 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-[10px] text-[#101010]/60">({group.skills.length})</span>
              </div>
              <ul className="space-y-2 font-mono text-xs text-[#101010]/90">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
