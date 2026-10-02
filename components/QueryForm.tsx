"use client";

import { useState, FormEvent } from "react";
import DisplayHeading from "@/components/DisplayHeading";
import { PORTFOLIO_DATA } from "@/src/data/portfolio";
import { ArrowRight, Check, AlertCircle } from "lucide-react";

export default function QueryForm() {
  const [formData, setFormData] = useState({
    category: PORTFOLIO_DATA.inquiryCategories[0],
    name: "",
    email: "",
    timeline: PORTFOLIO_DATA.timelineOptions[0],
    organization: "",
    description: "",
    selectedTracks: [] as string[],
    honeypot: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const toggleTrack = (track: string) => {
    setFormData((prev) => {
      const exists = prev.selectedTracks.includes(track);
      return {
        ...prev,
        selectedTracks: exists
          ? prev.selectedTracks.filter((t) => t !== track)
          : [...prev.selectedTracks, track],
      };
    });
  };

  const handleClear = () => {
    setFormData({
      category: PORTFOLIO_DATA.inquiryCategories[0],
      name: "",
      email: "",
      timeline: PORTFOLIO_DATA.timelineOptions[0],
      organization: "",
      description: "",
      selectedTracks: [],
      honeypot: "",
    });
    setStatus({ type: "idle", message: "" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "SUBMITTING INQUIRY..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: "YOUR INQUIRY WAS SENT SUCCESSFULLY! I WILL GET BACK TO YOU SOON.",
        });

        if (data.fallbackMailto) {
          const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.category} from ${formData.name}`);
          const bodyText = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\nTimeline: ${formData.timeline}\nCompany/Project: ${formData.organization}\nInterests: ${formData.selectedTracks.join(", ")}\n\nMessage:\n${formData.description}`
          );
          window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${bodyText}`;
        }
      } else {
        setStatus({
          type: "error",
          message: data.error || "FAILED TO TRANSMIT MESSAGE. PLEASE TRY AGAIN.",
        });
      }
    } catch (err) {
      console.error(err);
      // Fallback mailto on network error
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.category} from ${formData.name}`);
      const bodyText = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\nTimeline: ${formData.timeline}\nCompany/Project: ${formData.organization}\nInterests: ${formData.selectedTracks.join(", ")}\n\nMessage:\n${formData.description}`
      );
      window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${bodyText}`;
      setStatus({
        type: "success",
        message: "OPENED PREFILLED EMAIL CLIENT TO TRANSMIT DIRECTLY.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#F1F1EE] text-[#101010] py-20 lg:py-28 px-6 lg:px-12 xl:px-16 border-t border-black/20"
    >
      <div className="max-w-[1536px] mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="eyebrow-label mb-3">GET IN TOUCH</div>
              <DisplayHeading
                size="section"
                lines={[
                  { text: "LET'S WORK", type: "solid" },
                  { text: "TOGETHER.", outline: true },
                ]}
              />
              <p className="text-xs sm:text-sm text-[#6B6B68] leading-relaxed max-w-[400px] mt-6">
                Available for full-time engineering roles, freelance software contracts, and technical collaborations across full-stack applications and cloud infrastructure.
              </p>
            </div>

            <div className="pt-12 border-t border-black/20 mt-8">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#6B6B68] mb-2">
                DIRECT INQUIRIES
              </div>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="font-mono text-sm font-bold text-[#101010] underline decoration-[#CBFF44] underline-offset-4 hover:text-[#75E31C] transition-colors"
              >
                {PORTFOLIO_DATA.profile.email}
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            {/* Live ARIA Region for Notifications */}
            <div aria-live="polite" className="mb-4">
              {status.type === "success" && (
                <div className="bg-[#CBFF44] text-[#101010] p-6 border border-black font-mono text-xs font-bold flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm uppercase">
                    <Check size={18} /> {status.message}
                  </div>
                  <button
                    onClick={handleClear}
                    className="self-start underline uppercase text-[11px] hover:opacity-80"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              )}

              {status.type === "error" && (
                <div className="bg-red-100 text-red-900 p-4 border border-red-400 font-mono text-xs font-bold flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>{status.message}</span>
                </div>
              )}
            </div>

            {status.type !== "success" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Field 1: Category */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="inquiry-category" className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6B6B68]">
                    INQUIRY CATEGORY *
                  </label>
                  <select
                    id="inquiry-category"
                    required
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-black/30 py-3 text-sm font-bold uppercase text-[#101010] focus:outline-none focus:border-black focus:bg-[#CBFF44]/20 transition-all rounded-none"
                  >
                    {PORTFOLIO_DATA.inquiryCategories.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#F1F1EE]">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 2 & 3: Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="full-name" className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6B6B68]">
                      YOUR NAME *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      placeholder="E.G. NITIN PATWA"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-black/30 py-3 text-sm font-bold uppercase text-[#101010] placeholder:text-[#6B6B68]/50 focus:outline-none focus:border-black focus:bg-[#CBFF44]/20 transition-all rounded-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6B6B68]">
                      CONTACT EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="YOUR.NAME@COMPANY.COM"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-black/30 py-3 text-sm font-bold uppercase text-[#101010] placeholder:text-[#6B6B68]/50 focus:outline-none focus:border-black focus:bg-[#CBFF44]/20 transition-all rounded-none"
                    />
                  </div>
                </div>

                {/* Field 4 & 5: Timeline & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="target-timeline" className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6B6B68]">
                      TARGET TIMELINE
                    </label>
                    <select
                      id="target-timeline"
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-black/30 py-3 text-sm font-bold uppercase text-[#101010] focus:outline-none focus:border-black focus:bg-[#CBFF44]/20 transition-all rounded-none"
                    >
                      {PORTFOLIO_DATA.timelineOptions.map((time) => (
                        <option key={time} value={time} className="bg-[#F1F1EE]">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="organization" className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6B6B68]">
                      COMPANY / PROJECT NAME
                    </label>
                    <input
                      id="organization"
                      type="text"
                      placeholder="E.G. TECH LABS INC."
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-black/30 py-3 text-sm font-bold uppercase text-[#101010] placeholder:text-[#6B6B68]/50 focus:outline-none focus:border-black focus:bg-[#CBFF44]/20 transition-all rounded-none"
                    />
                  </div>
                </div>

                {/* Field 6: Interest Chips */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6B6B68]">
                    AREAS OF INTEREST
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {PORTFOLIO_DATA.interestChips.map((chip) => {
                      const isSelected = formData.selectedTracks.includes(chip);
                      return (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => toggleTrack(chip)}
                          className={`font-mono text-xs font-bold uppercase py-2 px-3.5 border transition-colors ${
                            isSelected
                              ? "bg-[#CBFF44] text-[#101010] border-black"
                              : "bg-transparent text-[#101010] border-black/20 hover:border-black"
                          }`}
                        >
                          {isSelected ? `✓ ${chip}` : `+ ${chip}`}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Field 7: Description */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="query-description" className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6B6B68]">
                    MESSAGE / INQUIRY DETAILS *
                  </label>
                  <textarea
                    id="query-description"
                    required
                    rows={4}
                    placeholder="DESCRIBE THE ROLE, PROJECT, OR INQUIRY..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-black/30 py-3 text-sm font-bold uppercase text-[#101010] placeholder:text-[#6B6B68]/50 focus:outline-none focus:border-black focus:bg-[#CBFF44]/20 transition-all rounded-none resize-none"
                  />
                </div>

                {/* Submit Row */}
                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={handleClear}
                    className="font-mono text-xs font-bold uppercase text-[#6B6B68] underline hover:text-[#101010]"
                  >
                    RESET FORM
                  </button>

                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="bg-[#101010] text-[#F1F1EE] hover:bg-[#CBFF44] hover:text-[#101010] font-mono text-xs font-bold uppercase tracking-wider py-4 px-8 flex items-center gap-3 transition-all duration-200 group border border-black disabled:opacity-50"
                  >
                    <span>{status.type === "loading" ? "TRANSMITTING..." : "SUBMIT INQUIRY"}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
