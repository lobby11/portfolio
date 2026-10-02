"use client";

import DisplayHeading from "@/components/DisplayHeading";
import { PORTFOLIO_DATA } from "@/src/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function EducationSection() {
  const education = PORTFOLIO_DATA.education;
  const certification = PORTFOLIO_DATA.certification;

  const items = [
    {
      id: "edu-1",
      number: "01",
      category: "EDUCATION",
      title: education.institution.toUpperCase(),
      subtitle: `${education.degree} • CGPA ${education.cgpa} (${education.location})`,
      tag: education.period,
      link: "#education",
    },
    {
      id: "cert-1",
      number: "02",
      category: "CERTIFICATION",
      title: certification.title.toUpperCase(),
      subtitle: `${certification.platform} • Instructor: ${certification.instructor} • ${certification.details}`,
      tag: certification.date,
      link: "#education",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#F5F2F8] text-[#101010] py-20 lg:py-28 px-6 lg:px-12 xl:px-16 border-t border-black/20"
    >
      <div className="max-w-[1536px] mx-auto w-full">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="eyebrow-label mb-3">ACADEMIC & CREDENTIALS</div>
            <DisplayHeading
              size="section"
              purpleStroke
              lines={[
                { text: "EDUCATION &", type: "solid" },
                { text: "CERTIFICATIONS.", outline: true },
              ]}
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs sm:text-sm text-[#6B6B68] leading-relaxed max-w-[360px] lg:ml-auto">
              Formal academic foundation from IIIT Ranchi alongside specialized industry full-stack certification.
            </p>
          </div>
        </div>

        {/* Clean Hairline List Rows Layout (Exact styling from reference image) */}
        <div className="border-b border-black/20">
          {items.map((item) => (
            <div
              key={item.id}
              className="group border-t border-black/20 py-7 sm:py-9 px-3 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-black/5 transition-colors duration-200"
            >
              {/* Left Column: Number & Title */}
              <div className="flex items-start sm:items-center gap-6 md:w-5/12">
                <span className="font-mono text-xs font-bold text-[#6B6B68] pt-0.5 sm:pt-0">
                  {item.number}
                </span>
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7B3FC9] block mb-1">
                    {item.category}
                  </span>
                  <h3
                    className="font-display font-extrabold text-lg sm:text-xl lg:text-2xl uppercase tracking-tight text-[#101010]"
                    style={{
                      fontFamily: '"Archivo", "Helvetica Neue", Arial, sans-serif',
                      fontStretch: "88%",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Middle Column: Muted Details */}
              <div className="md:w-5/12 pl-12 md:pl-0">
                <p className="text-xs sm:text-sm text-[#6B6B68] font-normal leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Right Column: Date / Action Arrow */}
              <div className="flex items-center justify-between md:justify-end gap-4 md:w-2/12 pl-12 md:pl-0">
                <span className="font-mono text-xs font-bold uppercase text-[#101010] bg-[#CBFF44] px-2.5 py-1 border border-black/20">
                  {item.tag}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-[#101010] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
