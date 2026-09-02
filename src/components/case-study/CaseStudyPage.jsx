import React from "react";
import { Link } from "react-router-dom";
import pixelwhiskLogo from "../../assets/logo/pixelwhisklogo.svg";
import lilbigthingsLogo from "../../assets/logo/lilbigthings.svg";
import caseStudy0001Image from "../../assets/case-study2/0001.png";
import whiskImage from "../../assets/case-study1/whisk.png";




// ─── Typography primitive ────────────────────────────────────────────────────
function T({ children, className = "", style }) {
  return (
    <p className={`m-0 font-['Darker_Grotesque'] text-white ${className}`} style={style}>
      {children}
    </p>
  );
}

// ─── Universal divider — 0.5px solid white 50% opacity ──────────────────────
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
            to={data.backAnchor || "/"}
            style={{ fontSize: "18px", fontWeight: 400, lineHeight: "130%", color: "rgba(255,255,255,0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
            className="font-['Darker_Grotesque'] w-fit"
          >
            <img src="/right_arrow.svg" alt="" style={{ width: "15px", flexShrink: 0 }} />
            Homepage
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
function SectionText({ section }) {
  return (
    <div style={{ width: "784px", display: "flex", flexDirection: "column" }}>
      {/* Main heading */}
      <T className="text-[32px] font-semibold leading-[130%]">
        {section.title}
      </T>

      {/* Subheading — 24px below heading */}
      <T className="text-[24px] font-medium leading-[130%]" style={{ marginTop: "24px" }}>
        {section.subtitle}
      </T>

      {/* Paragraphs — first is 12px below subheading, rest are 8px apart */}
      {section.paragraphs.map((p, i) => (
        <T
          key={i}
          className="text-[20px] font-normal leading-[125%]"
          style={{ marginTop: i === 0 ? "12px" : "8px" }}
        >
          {p}
        </T>
      ))}
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
        gap: `${section.imageGap ?? 48}px`,
      }}
    >
      <SectionText section={section} />

      <div
        style={{
          width: "784px",
          height: `${section.imageHeight}px`,
          border: section.imageBorder ?? "0.5px solid rgba(255, 255, 255, 0.7)",
          borderRadius: `${section.imageRadius ?? 6}px`,
          backgroundColor: section.imageBg ?? "transparent",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={section.image}
          alt=""
          style={
            section.innerImageStyle ?? {
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }
          }
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
          width: "100%",
          maxWidth: "784px",
          height: "527px",
          aspectRatio: "784 / 527",
          border: "0.5px solid rgba(255,255,255,0.7)",
          borderRadius: "6px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {data.heroVideoUrl ? (
          <iframe
            src={data.heroVideoUrl}
            title={data.title || "Hero video"}
            style={{ display: "block", width: "100%", height: "100%", border: "none", opacity: 1 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <img
            src={data.heroImage}
            alt=""
            style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
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
        {data.outcome && (
          <>
            <div className="flex flex-col">
              <T className="text-[32px] font-semibold leading-[130%]">
                {data.outcome.title}
              </T>
              <T className="text-[24px] font-medium leading-[130%]" style={{ marginTop: "24px" }}>
                {data.outcome.subtitle}
              </T>
              <T className="text-[20px] font-normal leading-[125%]" style={{ marginTop: "12px" }}>
                {data.outcome.paragraph}
              </T>
            </div>

            <Divider />
          </>
        )}

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

    </main>
  );
}

// ─── Case Study Navigation ────────────────────────────────────────────────────
function CaseStudyNavigation({ data }) {
  const [hovered, setHovered] = React.useState(false);

  const laptopConfig = {
    "Lil Big Things": {
      src: data.nextCaseStudy?.animationImage || caseStudy0001Image,
      width: "442.59px",
      height: "297.51px",
      borderRadius: "6px",
      rotation: "4.32deg",
      bottom: "-25px",
    },

    "PixelWhisk": {
      src: data.nextCaseStudy?.animationImage || whiskImage,
      width: "442.59px",
      height: "297.51px",
      borderRadius: "6px",
      rotation: "4.32deg",
      bottom: "-25px",
    },
  };

  const config = laptopConfig[data.nextCaseStudy?.name];

  return (
    <section
      style={{
        width: "100%",
        height: "364px",
        paddingTop: "64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Entire 300px inner area is a single Link */}
      <Link
        to={data.nextCaseStudy.path}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "block",
          textDecoration: "none",
          width: "100%",
          height: "300px",
          background: hovered ? "rgba(255, 255, 255, 0.10)" : "rgba(1, 71, 176, 0.10)",
          borderTop: "0.5px solid rgba(255, 255, 255, 0.50)",
          borderBottom: "0.5px solid rgba(255, 255, 255, 0.50)",
          transition: "background 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        {/* Laptop mockup — slides up from below on hover */}
        {config?.src && (
          <img
            src={config.src}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: config.bottom || "-25px",
              left: "50%",
              width: config.width,
              height: config.height,
              borderRadius: config.borderRadius,
              display: "block",

              transform: hovered
                ? `translateX(-50%) translateY(0) rotate(${config.rotation})`
                : `translateX(-50%) translateY(125%) rotate(${config.rotation})`,

              transformOrigin: "center center",
              transition: "transform 0.3s ease-in-out",
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        )}

        {/* Content row — space-between, px 64px, vertically centred */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "64px",
            paddingRight: "64px",
          }}
        >
          {/* Next case study logo / title */}
          {data.nextCaseStudy?.name === "PixelWhisk" ? (
            <img
              src={pixelwhiskLogo}
              alt="PixelWhisk"
              style={{
                height: "40px",
                width: "auto",
                flexShrink: 0,
                display: "block",
              }}
            />
          ) : data.nextCaseStudy?.name === "Lil Big Things" ? (
            <img
              src={lilbigthingsLogo}
              alt="Lil Big Things"
              style={{
                height: "40px",
                width: "auto",
                flexShrink: 0,
                display: "block",
              }}
            />
          ) : (
            <T className="text-[32px] font-bold leading-[130%]">
              {data.nextCaseStudy?.name}
            </T>
          )}

          {/* Next Case Study label — fades to 10% on section hover */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "8px",
              flexShrink: 0,
              color: hovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.70)",
              transition: "color 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="font-['Darker_Grotesque']"
          >
            <span style={{ fontSize: "18px", lineHeight: "100%", fontWeight: 500 }}>
              Next Case Study
            </span>
            <img
              src="/left_arrow.svg"
              alt=""
              style={{
                width: "14px",
                flexShrink: 0,
                filter: "brightness(0) invert(1)",
                opacity: hovered ? 1 : 0.7,
                transition: "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
        </div>
      </Link>
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
        paddingBottom: "128px",
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