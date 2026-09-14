"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

export default function RevealImage({ alt, className = "", style, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={`transition-[clip-path] duration-700 ease-out ${className}`}
      style={{
        ...style,
        clipPath: loaded ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
      }}
    />
  );
}
