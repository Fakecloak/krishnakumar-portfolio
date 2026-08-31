export default function CaseStudySection({
  id,
  title,
  description,
  paragraphs = [],
  image,
  imageClassName = "",
  imagePosition = "after",
}) {
  return (
    <section
      id={id}
      className="w-full pb-[64px]"
    >
      {title && (
        <h2 className="text-[11px] font-medium leading-[1.4] text-white">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-[14px] text-[9px] leading-[1.65] text-white/70">
          {description}
        </p>
      )}

      {paragraphs.length > 0 && (
        <div className="mt-[14px]">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mb-[12px] text-[9px] leading-[1.7] text-white/70 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {image && imagePosition === "after" && (
        <div
          className={`
            mt-[32px]
            w-full
            overflow-hidden
            ${imageClassName}
          `}
        >
          <img
            src={image}
            alt=""
            className="block h-auto w-full"
          />
        </div>
      )}
    </section>
  );
}