"use client";

interface HeadingLine {
  text: string;
  outline?: boolean;
  accent?: boolean;
  accentColor?: string;
}

interface DisplayHeadingProps {
  lines: HeadingLine[];
  className?: string;
  dark?: boolean;
  onLime?: boolean;
  purpleStroke?: boolean;
  size?: "hero" | "section" | "panel";
}

export default function DisplayHeading({
  lines,
  className = "",
  dark = false,
  onLime = false,
  purpleStroke = false,
  size = "section",
}: DisplayHeadingProps) {
  const displayClass =
    size === "hero"
      ? "display"
      : size === "panel"
      ? "display-panel"
      : "display-section";

  const contextClass = dark
    ? "on-dark"
    : onLime
    ? "on-lime"
    : purpleStroke
    ? "purple-stroke"
    : "";

  return (
    <h1 className={`${displayClass} ${contextClass} ${className}`}>
      {lines.map((line, idx) => {
        const isLast = idx === lines.length - 1;
        const textWithDot = isLast && !line.text.endsWith(".") ? `${line.text}.` : line.text;

        let lineClass = "line";
        if (line.outline) {
          lineClass += " outline";
        } else if (line.accent) {
          lineClass += ` ${line.accentColor || (dark ? "text-[#CBFF44]" : "text-[#7B3FC9]")}`;
        } else if (dark) {
          lineClass += " text-white";
        } else {
          lineClass += " text-[#101010]";
        }

        return (
          <span key={idx} className={lineClass} aria-label={textWithDot}>
            {textWithDot}
          </span>
        );
      })}
    </h1>
  );
}
