import React from "react";
import { Link } from "react-router-dom";

// ─── Typography primitive ────────────────────────────────────────────────────
function T({ children, className = "" }) {
  return (
    <p className={`m-0 font-['Darker_Grotesque'] text-white ${className}`}>
      {children}
    </p>
  );
}

// ─── Universal divider — 0.5px solid white 50% opacity ──────────────────────
// 48px spacing above and below is handled by the parent's gap-[48px].
function Divider() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "784px",
        height: 0,
        borderTop: "0.5px solid rgba(255,255,255,0.5)",
        flexShrink: 0,
      }}
    />
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
// 464px wide, sticky, full viewport height
// Content: 400px wide, pl-64px, pt-128px
// Top info container: 400×189, gap 48px
// Divider: 400px, 0.5px #808080, 32px above + 32px below
// Lower container: 400×317, flex-col, gap 24px
function Sidebar({ data }) {
  const { sidebar } = data;

  return (
    <aside
      style={{
        width: "464px",
        flexShrink: 0,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
      }}
    >
      <div
        style={{ paddingLeft: "64px", paddingTop: "128px", height: "100%" }}
        className="flex flex-col"
      >
        {/* Top info container — 400px wide, gap 48px */}
        <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "48px" }}>
          {/* Back link */}
          <Link
            to="/"
            style={{ fontSize: "18px", fontWeight: 400, lineHeight: "130%", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
            className="font-['Darker_Grotesque'] w-fit block"
          >
            ← &nbsp;Homepage
          </Link>

          {/* Title + description block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <T className="text-[48px] font-bold leading-[130%]">
              {data.title}
            </T>
            <T className="text-[24px] font-medium leading-[130%]">
              {data.description}
            </T>
          </div>
        </div>

        {/* Sidebar divider — 32px above, 32px below */}
        <div style={{ marginTop: "32px", marginBottom: "32px" }}>
          <div
            style={{
              width: "400px",
              height: 0,
              borderTop: "0.5px solid #808080",
            }}
          />
        </div>

        {/* Lower container — 400px wide, flex-col, gap 24px */}
        <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* My role */}
          <div className="flex flex-col">
            <T className="text-[24px] font-medium leading-[130%]">
              {sidebar.role.label}
            </T>
            <T className="text-[18px] font-normal leading-[130%]">
              {sidebar.role.value}
            </T>
          </div>

          {/* Contribution */}
          <div className="flex flex-col" style={{ gap: "8px" }}>
            <T className="text-[24px] font-medium leading-[130%]">
              {sidebar.contribution.label}
            </T>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "10px",
                maxWidth: "90%",
              }}
            >
              {sidebar.contribution.tags.map((tag, i) => (
                <div
                  key={`${tag}-${i}`}
                  style={{
                    display: "flex",
                    height: "27px",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "0.5px solid #FFFFFF",
                    padding: "8px 8px 12px",
                  }}
                >
                  <p
                    className="m-0 font-['Darker_Grotesque'] font-normal text-white"
                    style={{ fontSize: "20px", lineHeight: "5px" }}
                  >
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborated with */}
          <div className="flex flex-col">
            <T className="text-[24px] font-medium leading-[130%]">
              {sidebar.collaborated.label}
            </T>
            <T className="text-[18px] font-normal leading-[130%]">
              {sidebar.collaborated.value}
            </T>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ─── Section text block ───────────────────────────────────────────────────────
// 784 × 242 text container, flex-col, gap 24px
function SectionText({ section }) {
  return (
    <div style={{ width: "784px", display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Title + subtitle stacked */}
      <div className="flex flex-col">
        <T className="text-[32px] font-semibold leading-[130%]">
          {section.title}
        </T>
        <T className="text-[24px] font-medium leading-[130%]">
          {section.subtitle}
        </T>
      </div>

      {/* Paragraphs */}
      <div className="flex flex-col" style={{ gap: "12px" }}>
        {section.paragraphs.map((p, i) => (
          <T key={i} className="text-[20px] font-normal leading-[125%]">
            {p}
          </T>
        ))}
      </div>
    </div>
  );
}

// ─── Image section ────────────────────────────────────────────────────────────
function ImageSection({ section }) {
  return (
    <section
      style={{
        width: "784px",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <SectionText section={section} />

      <div
        style={{
          width: "784px",
          height: `${section.imageHeight}px`,
          borderRadius: `${section.imageRadius ?? 6}px`,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={section.image}
          alt=""
          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </section>
  );
}

// ─── Text-only section ────────────────────────────────────────────────────────
function TextSection({ section }) {
  return (
    <section style={{ width: "784px" }}>
      <SectionText section={section} />
    </section>
  );
}

// ─── Right scrollable content ─────────────────────────────────────────────────
// 976px wide, padding: top 128 right 64 bottom 64 left 128
// Content 784px, main gap 48px
function CaseStudyContent({ data }) {
  return (
    <main
      style={{
        width: "976px",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        paddingTop: "128px",
        paddingRight: "64px",
        paddingBottom: "64px",
        paddingLeft: "128px",
      }}
    >
      {/* Hero — 784 × 527 */}
      <div
        style={{
          width: "784px",
          height: "527px",
          border: "0.5px solid rgba(255,255,255,0.7)",
          borderRadius: "6px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={data.heroImage}
          alt=""
          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <Divider />

      {/* Sections with dividers between */}
      {data.sections.map((section, i) => (
        <React.Fragment key={section.id}>
          {section.type === "image-section" ? (
            <ImageSection section={section} />
          ) : (
            <TextSection section={section} />
          )}
          {i < data.sections.length - 1 && <Divider />}
        </React.Fragment>
      ))}

      <Divider />

      {/* Outcome + Credits — 784 × 184, gap 48px */}
      <section style={{ width: "784px", display: "flex", flexDirection: "column", gap: "48px" }}>
        {/* Outcome */}
        <div className="flex flex-col">
          <T className="text-[32px] font-semibold leading-[130%]">
            {data.outcome.title}
          </T>
          <T className="text-[24px] font-medium leading-[130%]">
            {data.outcome.subtitle}
          </T>
          <T className="text-[20px] font-normal leading-[125%]">
            {data.outcome.paragraph}
          </T>
        </div>

        {/* Credits — 784 × 150, gap 24px */}
        <div style={{ width: "784px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <T className="text-[32px] font-semibold leading-[130%]">
            {data.credits.title}
          </T>
          <T className="text-[20px] font-normal leading-[125%]">
            {data.credits.paragraph}
          </T>
          <p
            className="m-0 font-['Darker_Grotesque'] font-medium text-white"
            style={{ fontSize: "20px", lineHeight: "130%" }}
          >
            Website:{" "}
            <a
              href={data.credits.website}
              target="_blank"
              rel="noreferrer"
              className="text-white underline decoration-solid"
              style={{ textUnderlineOffset: "2px" }}
            >
              {data.credits.website}
            </a>
          </p>
        </div>
      </section>

      <Divider />
    </main>
  );
}

// ─── Case Study Navigation ────────────────────────────────────────────────────
// Full width 1440px, height 364px, padding-top 64px
// PixelWhisk group: 191×40.9545, gap 23.5px
// SVG: 40.9512×40.9545
// Next Case Study: 150×14, arrow 14px, rotate(-180deg), white
function CaseStudyNavigation({ data }) {
  return (
    <section
      style={{
        width: "100%",
        height: "364px",
        paddingTop: "64px",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: "64px",
          paddingRight: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* PixelWhisk group — 191×40.9545, gap 23.5px */}
        <div
          style={{
            width: "191px",
            height: "40.9545px",
            display: "flex",
            alignItems: "center",
            gap: "23.5px",
          }}
        >
          <img
            src="/favicon.svg"
            alt="PixelWhisk"
            style={{
              width: "40.9512px",
              height: "40.9545px",
              flexShrink: 0,
              display: "block",
            }}
          />
          <span
            className="font-['Darker_Grotesque'] font-medium text-white"
            style={{ fontSize: "24px", lineHeight: "130%" }}
          >
            {data.nextCaseStudy.name}
          </span>
        </div>

        {/* Next Case Study link — 150×14 */}
        <Link
          to={data.nextCaseStudy.path}
          style={{
            width: "150px",
            height: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "8px",
            fontSize: "18px",
            lineHeight: "100%",
            fontWeight: 500,
            color: "white",
            textDecoration: "none",
          }}
          className="font-['Darker_Grotesque']"
        >
          <span>Next Case Study</span>
          {/* Arrow — white via CSS filter, points right for forward navigation */}
          <img
            src="/left_arrow.svg"
            alt=""
            style={{
              width: "14px",
              flexShrink: 0,
              filter: "brightness(0) invert(1)",
            }}
          />
        </Link>
      </div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export default function CaseStudyPage({ data }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minWidth: "1440px",
        backgroundColor: "#000000",
      }}
    >
      {/* Two-column layout */}
      <div
        style={{
          width: "1440px",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Sidebar data={data} />
        <CaseStudyContent data={data} />
      </div>

      <CaseStudyNavigation data={data} />
    </div>
  );
}