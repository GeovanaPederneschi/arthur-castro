"use client";

import { useEffect, useRef } from "react";
import type { StaticImageData } from "next/image";
import RevealImage from "./RevealImage";

export default function LandmarkBand({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageWrap = imageWrapRef.current;
    if (!container || !imageWrap) return;

    let ticking = false;

    function update() {
      ticking = false;
      if (!container || !imageWrap) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = rect.height;
      const fullHeight = (container.offsetWidth * src.height) / src.width;
      const maxOffset = Math.max(fullHeight - windowHeight, 0);

      const viewportHeight = window.innerHeight;
      const total = viewportHeight + windowHeight;
      const raw = (viewportHeight - rect.top) / total;
      const progress = Math.min(Math.max(raw, 0), 1);

      imageWrap.style.transform = `translateY(${-progress * maxOffset}px)`;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [src.width, src.height]);

  return (
    <div
      ref={containerRef}
      className="relative h-40 overflow-hidden opacity-60 sm:h-48 lg:hidden"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div ref={imageWrapRef} className="absolute inset-x-0 top-0 will-change-transform">
        <RevealImage
          src={src}
          alt={alt}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
