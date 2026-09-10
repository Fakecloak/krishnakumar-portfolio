import React from "react";
import { Link } from "react-router-dom";
import pixelwhiskLogo from "../../assets/logo/pixelwhisklogo.svg";
import lilbigthingsLogo from "../../assets/logo/lilbigthings.svg";
import caseStudy0001Image from "../../assets/case-study2/0001.png";
import whiskImage0002Image from "../../assets/case-study1/0002.png";   




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
        width: "100%",
        maxWidth: "784px",
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
    <aside className="w-full lg:w-[464px] shrink-0 lg:sticky lg:top-0 self-start h-auto lg:h-screen">
      <div className="px-4 sm:px-8 lg:px-0 lg:pl-16 pt-20 sm:pt-24 lg:pt-32 pb-4 lg:pb-0 h-full flex flex-col">
        {/* Top info container — 400px wide, gap 48px */}
        <div className="w-full max-w-[784px] lg:max-w-[400px] flex flex-col gap-6 sm:gap-12">
          {/* Back link */}
          <Link
            to={data.backAnchor || "/"}
            style={{ fontSize: "18px", fontWeight: 400, lineHeight: "130%", color: "rgba(255,255,255,0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
            className="font-['Darker_Grotesque'] w-fit hover:text-white transition-colors"
          >
            <img src="/right_arrow.svg" alt="" style={{ width: "15px", flexShrink: 0 }} />
            Homepage
          </Link>

          {/* Title + description block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <T className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold leading-[120%] lg:leading-[130%]">
              {data.title}
            </T>
            <T className="text-[20px] sm:text-[24px] font-medium leading-[130%]">
              {data.description}
            </T>
          </div>
        </div>

        {/* Sidebar divider — 32px above, 32px below */}
        <div className="my-6 lg:my-8 w-full max-w-[784px] lg:max-w-[400px]">
          <div
            className="w-full h-0 border-t-[0.5px] border-[#808080]"
          />
        </div>

        {/* Lower container — 400px wide, flex-col, gap 24px */}
        <div className="w-full max-w-[784px] lg:max-w-[400px] flex flex-col gap-6">
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
                maxWidth: "100%",
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
    <div className="w-full max-w-[784px] flex flex-col">
      {/* Main heading */}
      <T className="text-[26px] sm:text-[30px] md:text-[32px] font-semibold leading-[130%]">
        {section.title}
      </T>

      {/* Subheading — 24px below heading */}
      <T className="text-[20px] sm:text-[22px] md:text-[24px] font-medium leading-[130%] mt-4 sm:mt-6">
        {section.subtitle}
      </T>

      {/* Paragraphs — first is 12px below subheading, rest are 8px apart */}
      {section.paragraphs.map((p, i) => (
        <T
          key={i}
          className="text-[18px] sm:text-[20px] font-normal leading-[130%] sm:leading-[125%]"
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
      className="w-full max-w-[784px] flex flex-col"
      style={{
        gap: `${section.imageGap ?? 48}px`,
      }}
    >
      <SectionText section={section} />

      <div
        className="w-full max-w-[784px] relative overflow-hidden shrink-0"
        style={{
          aspectRatio: `784 / ${section.imageHeight}`,
          height: "auto",
          border: section.imageBorder ?? "0.5px solid rgba(255, 255, 255, 0.7)",
          borderRadius: `${section.imageRadius ?? 6}px`,
          backgroundColor: section.imageBg ?? "transparent",
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
    <section className="w-full max-w-[784px]">
      <SectionText section={section} />
    </section>
  );
}

// ─── Right scrollable content ─────────────────────────────────────────────────
function CaseStudyContent({ data }) {
  return (
    <main className="w-full lg:w-[976px] shrink-0 flex flex-col gap-8 sm:gap-12 px-4 sm:px-8 lg:px-0 lg:pl-32 lg:pr-16 pt-4 sm:pt-8 lg:pt-32 pb-12 lg:pb-16 max-w-[784px] lg:max-w-none mx-auto lg:mx-0">
      {/* Hero — 784 × 527 */}
      <div
        className="w-full max-w-[784px] aspect-[784/527] h-auto border-[0.5px] border-white/70 rounded-[6px] overflow-hidden shrink-0"
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

      {/* Outcome + Credits — max-w-[784px], gap 48px */}
      <section className="w-full max-w-[784px] flex flex-col gap-8 sm:gap-12">
        {/* Outcome */}
        {data.outcome && (
          <>
            <div className="flex flex-col">
              <T className="text-[26px] sm:text-[30px] md:text-[32px] font-semibold leading-[130%]">
                {data.outcome.title}
              </T>
              <T className="text-[20px] sm:text-[22px] md:text-[24px] font-medium leading-[130%] mt-4 sm:mt-6">
                {data.outcome.subtitle}
              </T>
              <T className="text-[18px] sm:text-[20px] font-normal leading-[130%] sm:leading-[125%] mt-3">
                {data.outcome.paragraph}
              </T>
            </div>

            <Divider />
          </>
        )}

        {/* Credits — max-w-[784px], gap 24px */}
        <div className="w-full max-w-[784px] flex flex-col gap-6">
          <T className="text-[26px] sm:text-[30px] md:text-[32px] font-semibold leading-[130%]">
            {data.credits.title}
          </T>
          <T className="text-[18px] sm:text-[20px] font-normal leading-[130%] sm:leading-[125%]">
            {data.credits.paragraph}
          </T>
          <p
            className="m-0 font-['Darker_Grotesque'] font-medium text-white break-all sm:break-normal"
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
      width: "min(442.59px, 60vw)",
      height: "auto",
      aspectRatio: "442.59 / 297.51",
      borderRadius: "6px",
      rotation: "4.32deg",
      bottom: "-25px",
    },

    "PixelWhisk": {
      src: data.nextCaseStudy?.animationImage || whiskImage0002Image,
      width: "min(442.59px, 60vw)",
      height: "auto",
      aspectRatio: "442.59 / 297.51",
      borderRadius: "6px",
      rotation: "4.32deg",
      bottom: "-25px",
    },
  };

  const config = laptopConfig[data.nextCaseStudy?.name];

  return (
    <section className="w-full h-[240px] sm:h-[364px] pt-8 sm:pt-16 relative overflow-hidden">
      {/* Entire inner area is a single Link */}
      <Link
        to={data.nextCaseStudy.path}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="block no-underline w-full h-[180px] sm:h-[300px] border-t-[0.5px] border-b-[0.5px] border-white/50 relative overflow-hidden cursor-pointer transition-colors duration-500"
        style={{
          background: hovered ? "rgba(255, 255, 255, 0.10)" : "rgba(1, 71, 176, 0.10)",
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
              aspectRatio: config.aspectRatio,
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

        {/* Content row — space-between, vertically centred */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 sm:px-8 md:px-16">
          {/* Next case study logo / title */}
          {data.nextCaseStudy?.name === "PixelWhisk" ? (
            <img
              src={pixelwhiskLogo}
              alt="PixelWhisk"
              className="h-[28px] sm:h-[40px] w-auto shrink-0 block"
            />
          ) : data.nextCaseStudy?.name === "Lil Big Things" ? (
            <img
              src={lilbigthingsLogo}
              alt="Lil Big Things"
              className="h-[28px] sm:h-[40px] w-auto shrink-0 block"
            />
          ) : (
            <T className="text-[24px] sm:text-[32px] font-bold leading-[130%]">
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
            <span className="text-[16px] sm:text-[18px] leading-none font-medium">
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
    <div className="relative w-full pb-16 lg:pb-32 overflow-hidden">
      {/* Two-column layout on lg, stacked on <lg */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start">
        <Sidebar data={data} />
        <CaseStudyContent data={data} />
      </div>

      <CaseStudyNavigation data={data} />
    </div>
  );
}