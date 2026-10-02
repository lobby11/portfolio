"use client";

import { useState } from "react";
import DisplayHeading from "@/components/DisplayHeading";
import { PORTFOLIO_DATA, Project } from "@/src/data/portfolio";
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"ALL" | "BACKEND" | "FRONTEND" | "CLOUD">("ALL");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const projects = PORTFOLIO_DATA.projects;

  const countForTag = (tag: "ALL" | "BACKEND" | "FRONTEND" | "CLOUD") => {
    if (tag === "ALL") return projects.length;
    return projects.filter((p) => p.tags.includes(tag)).length;
  };

  const filteredProjects = projects.filter((p) => {
    if (filter === "ALL") return true;
    return p.tags.includes(filter);
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="projects"
      className="bg-[#D9D9D4] text-[#101010] py-20 lg:py-28 px-6 lg:px-12 xl:px-16 border-t border-black/20"
    >
      <div className="max-w-[1536px] mx-auto w-full">
        {/* Section Header Row */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="eyebrow-label mb-3">FEATURED WORKS</div>
            <DisplayHeading
              size="section"
              lines={[
                { text: "SELECTED", type: "solid" },
                { text: "PROJECTS.", outline: true },
              ]}
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs sm:text-sm text-[#6B6B68] leading-relaxed max-w-[340px] lg:ml-auto">
              Production-grade software systems built and deployed across responsive frontends, microservice backends, and cloud infrastructure.
            </p>
          </div>
        </div>

        {/* Text Filter Tabs */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 border-b border-black/20 mb-10 pb-3 font-mono text-xs font-bold uppercase tracking-wider">
          {(["ALL", "BACKEND", "FRONTEND", "CLOUD"] as const).map((tab) => {
            const count = countForTag(tab);
            const isActive = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative py-2 px-2 transition-colors ${
                  isActive
                    ? "text-[#101010] border-b-2 border-[#101010]"
                    : "text-[#6B6B68] hover:text-[#101010]"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#CBFF44] -z-10 opacity-80" />
                )}
                {tab} ({count})
              </button>
            );
          })}
        </div>

        {/* 2x2 Hairline Cell Grid - Uniform styling for ALL cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-black/20">
          {filteredProjects.map((proj) => {
            const isExpanded = expandedId === proj.id;

            return (
              <div
                key={proj.id}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                onClick={() => toggleExpand(proj.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand(proj.id);
                  }
                }}
                className="group border-r border-b border-black/20 p-6 sm:p-8 flex flex-col justify-between min-h-[340px] bg-[#F1F1EE] text-[#101010] hover:bg-[#E5E5E0] transition-all duration-300 relative overflow-hidden outline-none cursor-pointer"
              >
                <div>
                  {/* Top Bar: Number + Tags */}
                  <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="text-[#6B6B68]">
                      /{proj.number}
                    </span>
                    <div className="flex items-center gap-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-extrabold border border-black/30 text-[#101010] bg-black/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-extrabold text-2xl lg:text-3xl uppercase leading-tight tracking-tight mb-4 text-[#101010]"
                    style={{
                      fontFamily: '"Archivo", "Helvetica Neue", Arial, sans-serif',
                      fontStretch: "88%",
                    }}
                  >
                    {proj.title}
                  </h3>

                  {/* Short Description or All Bullets when Expanded */}
                  {!isExpanded ? (
                    <p className="text-xs leading-relaxed mb-6 line-clamp-2 text-[#6B6B68]">
                      {proj.bullets[0]}
                    </p>
                  ) : (
                    <ul className="text-xs leading-relaxed space-y-2 mb-6 text-[#101010]/80">
                      {proj.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#75E31C]">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Stack Mono Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 border border-black/20 text-[#101010] bg-black/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links & Expand indicator */}
                <div
                  className="pt-4 border-t border-black/15 flex items-center justify-between text-xs"
                  onClick={(e) => e.stopPropagation()} // Prevent double trigger when clicking direct links
                >
                  <div className="flex items-center gap-4">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 border-b pb-0.5 text-[#101010] border-[#101010] hover:text-[#75E31C] hover:border-[#75E31C] transition-colors"
                        title={proj.githubNote ? `${proj.github} (${proj.githubNote})` : proj.github}
                      >
                        <FaGithub size={13} />
                        <span>GITHUB ↗</span>
                      </a>
                    )}

                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 border-b pb-0.5 text-[#101010] border-[#101010] hover:text-[#75E31C] hover:border-[#75E31C] transition-colors"
                      >
                        <ExternalLink size={13} />
                        <span>LIVE ↗</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => toggleExpand(proj.id)}
                    className="font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 text-[#6B6B68] hover:text-[#101010]"
                  >
                    <span>{isExpanded ? "COLLAPSE" : "EXPAND BULLETS"}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
