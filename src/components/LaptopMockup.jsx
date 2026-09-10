import React from 'react';

export default function LaptopMockup({ 
  variant = "pixelwhisk",
  imageSrc,
  alt
}) {
  const defaultSrc = variant === "lilbigthings" ? "/laptop/scene2.png" : "/laptop/scene1.png";
  const src = imageSrc || defaultSrc;
  const defaultAlt = variant === "lilbigthings" ? "Lil Big Things Laptop Mockup" : "PixelWhisk Laptop Mockup";
  const altText = alt || defaultAlt;

  return (
    <div className="w-full max-w-[649px] aspect-[649/436] h-auto overflow-hidden rounded-[6px] border-white/50 border-[0.80px]">
      <img
        src={src}
        alt={altText}
        className="w-full h-full object-cover"
        style={{
          transformOrigin: 'center center',
          opacity: 1,
        }}
      />
    </div>
  );
}

