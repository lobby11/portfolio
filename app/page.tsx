"use client";

import { useState } from "react";
import DisplayHeading from "@/components/DisplayHeading";
import GiantBrandText from "@/components/GiantBrandText";
import NetworkOrbit from "@/components/NetworkOrbit";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import QueryForm from "@/components/QueryForm";
import { PORTFOLIO_DATA } from "@/src/data/portfolio";
import {
  ArrowUpRight,
  Menu,
  X,
  ArrowUp,
  Mail,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const profile = PORTFOLIO_DATA.profile;

  return (
    <main className="min-h-screen bg-[#F1F1EE] text-[#101010] selection:bg-[#CBFF44] selection:text-[#101010]">
      <header className="sticky top-0 z-50 bg-[#F1F1EE]/95 backdrop-blur-md border-b border-black/20">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <span
              className="font-display font-black text-2xl uppercase tracking-tighter text-[#101010]"
              style={{
                fontFamily: '"Archivo", "Helvetica Neue", Arial, sans-serif',
                fontStretch: "88%",
              }}
            >
              NITIN PATWA
            </span>
            <span className="w-2 h-2 bg-[#101010] inline-block ml-0.5 group-hover:bg-[#CBFF44] transition-colors" />
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] font-bold tracking-[0.18em] uppercase">
            <a
              href="#projects"
              className="relative py-1 text-[#6B6B68] hover:text-[#101010] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#101010] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              PROJECTS
            </a>
            <a
              href="#skills"
              className="relative py-1 text-[#6B6B68] hover:text-[#101010] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#101010] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              SKILLS
            </a>
            <a
              href="#education"
              className="relative py-1 text-[#6B6B68] hover:text-[#101010] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#101010] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              EDUCATION & CERTIFICATIONS
            </a>
            <a
              href="#contact"
              className="relative py-1 text-[#6B6B68] hover:text-[#101010] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#101010] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              CONTACT
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-6">
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#CBFF44] bg-transparent text-[#101010] hover:bg-[#CBFF44] transition-all rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-2 group"
            >
              <span>RESUME ↗</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            className="md:hidden p-2 text-[#101010]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#F1F1EE] border-b border-black/20 p-6 flex flex-col gap-4 font-mono text-xs font-bold uppercase tracking-wider">
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              PROJECTS
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              SKILLS
            </a>
            <a href="#education" onClick={() => setMenuOpen(false)}>
              EDUCATION & CERTIFICATIONS
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </a>
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center border border-[#CBFF44] bg-[#CBFF44] text-[#101010] py-3 rounded-full font-bold flex items-center justify-center gap-2"
            >
              <span>RESUME ↗</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </header>

      <section className="bg-[#F1F1EE] hero-layout w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 py-6 select-none relative overflow-hidden" id="top">
        {/* Top: Pulsing Lime Dot status badge */}
        <div className="eyebrow-label flex items-center gap-2 pt-1 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#75E31C] border border-[#101010] animate-pulse" />
          <span>FULL-STACK DEVELOPER</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full my-auto py-4">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <DisplayHeading
              size="hero"
              lines={[
                { text: "FULL-STACK", type: "solid" },
                { text: "DEVELOPER.", outline: true },
                { text: "FROM UI", type: "solid" },
                { text: "TO CLOUD.", type: "solid" },
              ]}
              className="mb-6"
            />

            <p className="text-xs sm:text-sm text-[#6B6B68] leading-relaxed max-w-[520px] mb-8 font-normal">
              Full-stack web developer with production-grade experience across backend systems, responsive frontend applications, and cloud infrastructure on AWS (ECS, Fargate) and Vercel.
            </p>

            <div className="flex flex-wrap items-center gap-6 font-mono text-xs font-bold uppercase tracking-wider">
              <a href="#projects" className="link-cta group flex items-center gap-2 border-b border-black pb-1 hover:text-[#75E31C] transition-colors">
                <span>VIEW PROJECTS ↗</span>
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={profile.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="link-cta group text-[#6B6B68] border-b border-[#6B6B68] pb-1 flex items-center gap-2 hover:text-black hover:border-black transition-colors"
              >
                <span>DOWNLOAD RESUME ↗</span>
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-end items-center w-full">
            <div className="w-full sm:w-[420px] lg:w-[460px] bg-white border border-black/20 p-4 shadow-sm relative group">
              {/* Outer Corner Hairline Decorators */}
              <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-black" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-black" />
              <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-black" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-black" />

              {/* Main Photo Frame */}
              <div className="relative w-full aspect-[4/4.8] max-h-[380px] overflow-hidden bg-[#D9D9D4] border border-black/15">
                <img
                  src="/myll.jpeg"
                  alt="Nitin Kumar Patwa"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 bg-[#CBFF44] text-[#101010] px-2.5 py-1 font-mono text-[10px] font-extrabold border border-black/30 shadow-sm uppercase tracking-wider">
                  FULL-STACK DEV
                </div>

                <div className="absolute top-3 right-3 bg-white/95 text-[#101010] px-2 py-0.5 font-mono text-[9px] font-bold border border-black/20 uppercase">
                  INDIA
                </div>
              </div>

              {/* Bottom Caption Bar */}
              <div className="pt-3 flex items-center justify-between border-t border-black/15 mt-3">
                <div>
                  <h4 className="font-display font-extrabold text-sm uppercase text-[#101010]">
                    NITIN KUMAR PATWA
                  </h4>
                  <span className="font-mono text-[9px] text-[#6B6B68] uppercase">
                    IIIT RANCHI • B.TECH ECE
                  </span>
                </div>
                <span className="font-mono text-[9px] font-bold text-[#75E31C] bg-black px-2 py-0.5 uppercase tracking-wider">
                  ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/20 pt-4 pb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs font-bold uppercase tracking-wider">
          <div className="text-[#101010]">
            NITIN KUMAR PATWA / {profile.location}
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B68] hover:text-[#101010] transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B68] hover:text-[#101010] transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-[#6B6B68] hover:text-[#101010] transition-colors"
            >
              EMAIL ↗
            </a>
          </div>
        </div>
      </section>

      <ProjectsSection />
      <GiantBrandText />
      <NetworkOrbit />
      <EducationSection />

      <section className="bg-[#CBFF44] text-[#101010] py-24 px-6 lg:px-12 xl:px-16 relative overflow-hidden border-t border-black/20" id="support">
        <div className="max-w-[1536px] mx-auto w-full">
          <div className="eyebrow-label text-[#101010]/70 mb-4">
            CORE COMPETENCIES
          </div>

          <DisplayHeading
            size="section"
            onLime
            lines={[
              { text: "FULL-STACK", type: "solid" },
              { text: "DEVELOPMENT.", outline: true },
            ]}
            className="mb-8 text-[#101010]"
          />

          <p className="text-xs sm:text-sm text-[#101010]/80 max-w-md mb-12 leading-relaxed font-medium">
            Architecting scalable web applications, asynchronous real-time services, containerized cloud deployments, and responsive UI interactions.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#101010]/20 mb-4">
            {PORTFOLIO_DATA.whatIDo.map((item) => (
              <div key={item.number} className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#101010]/60">{item.number}</span>
                <div>
                  <div className="font-display font-bold text-sm uppercase text-[#101010] tracking-wider mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#101010]/80 font-medium leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QueryForm />

      <footer className="bg-[#101010] text-[#F1F1EE] pt-16 pb-12 px-6 lg:px-12 xl:px-16 border-t border-white/20">
        <div className="max-w-[1536px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
            {/* Logo & Tagline */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-display font-black text-2xl uppercase tracking-tighter">
                  NITIN PATWA
                </span>
                <span className="w-2 h-2 bg-[#CBFF44]" />
              </div>
              <p className="text-xs text-white/60 leading-relaxed max-w-[340px]">
                Full-stack developer building from UI to cloud. Specialized in React, Node.js microservices, real-time systems, and AWS infrastructure.
              </p>
            </div>

            {/* Nav Links */}
            <div className="md:col-span-4 flex flex-col gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80">
              <a href="#projects" className="hover:text-[#CBFF44] transition-colors">
                / PROJECTS
              </a>
              <a href="#skills" className="hover:text-[#CBFF44] transition-colors">
                / SKILLS
              </a>
              <a href="#education" className="hover:text-[#CBFF44] transition-colors">
                / EDUCATION & CERTIFICATIONS
              </a>
              <a href="#contact" className="hover:text-[#CBFF44] transition-colors">
                / CONTACT
              </a>
            </div>

            {/* Social Icons (1px Outline Circles: GitHub, LinkedIn, Email) */}
            <div className="md:col-span-3 flex items-center gap-4 justify-start md:justify-end">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#CBFF44] hover:text-[#CBFF44] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#CBFF44] hover:text-[#CBFF44] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#CBFF44] hover:text-[#CBFF44] transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/50 uppercase tracking-wider">
            <div>© {new Date().getFullYear()} NITIN KUMAR PATWA. ALL RIGHTS RESERVED.</div>
            <a href="#top" className="flex items-center gap-1 text-[#F1F1EE] hover:text-[#CBFF44] transition-colors">
              <span>BACK TO TOP</span>
              <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
