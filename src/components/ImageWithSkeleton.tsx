"use client";

import * as React from "react";

type Props = {
  src: string;
  alt: string;
  containerClassName?: string;
  imgClassName?: string;
};

// eslint-disable-next-line @next/next/no-img-element
export default function ImageWithSkeleton({ src, alt, containerClassName, imgClassName }: Props) {
  const [loaded, setLoaded] = React.useState(false);
  const [errored, setErrored] = React.useState(false);

  return (
    <div className={["relative overflow-hidden", containerClassName].filter(Boolean).join(" ")}> 
      {/* Skeleton */}
      <div
        aria-hidden
        className={[
          "absolute inset-0 animate-pulse bg-muted",
          loaded && !errored ? "opacity-0" : "opacity-100",
          "transition-opacity duration-300",
        ].join(" ")}
      />

      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={[
            "h-full w-full object-cover transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8" cy="11" r="2" />
            <path d="M21 17l-6-6-8 8" />
          </svg>
        </div>
      )}
    </div>
  );
}


