export default function CaseStudyHero({
  title,
  description,
  meta = [],
  image,
}) {
  return (
    <section className="grid w-full grid-cols-[1fr_1.35fr] items-start gap-8 pb-[128px] pt-0">
      {/* Project information */}
      <div className="pt-[5px]">
        <h1 className="text-[16px] font-medium leading-[1.2] tracking-[-0.02em] text-white">
          {title}
        </h1>

        {description && (
          <p className="mt-3 max-w-[270px] text-[9px] leading-[1.65] text-white/70">
            {description}
          </p>
        )}

        {meta.length > 0 && (
          <div className="mt-8 flex flex-col gap-5">
            {meta.map((item) => (
              <div key={item.label}>
                <p className="text-[7px] uppercase tracking-[0.1em] text-white/40">
                  {item.label}
                </p>

                <p className="mt-1.5 text-[9px] leading-[1.5] text-white/80">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hero image */}
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt=""
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
}