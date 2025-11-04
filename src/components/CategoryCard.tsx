import * as React from "react";
import Link from "next/link";

type CategoryCardProps = {
  name: string;
  icon?: React.ReactNode;
  active?: boolean;
  className?: string;
  href?: string;
};

export default function CategoryCard({ name, icon, active = false, className, href }: CategoryCardProps) {
  const categoryHref = href || `/products?category=${name.toLowerCase().replace(/\s+/g, '-')}`;
  
  function getAutoIcon(categoryName: string): React.ReactNode {
    const key = categoryName.toLowerCase();
    const commonProps = {
      className: "h-14 w-14 text-current",
      viewBox: "0 0 24 24",
      strokeWidth: 1.8,
      stroke: "currentColor",
      fill: "none",
      "aria-hidden": true as unknown as undefined,
    } as React.SVGProps<SVGSVGElement>;

    if (key.includes("phone")) {
      return (
        <svg {...commonProps}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    }
    if (key.includes("computer") || key.includes("laptop")) {
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M2 20h20" />
        </svg>
      );
    }
    if (key.includes("watch")) {
      return (
        <svg {...commonProps}>
          <rect x="7" y="6" width="10" height="12" rx="2" />
          <rect x="9" y="2" width="6" height="4" rx="1" />
          <rect x="9" y="18" width="6" height="4" rx="1" />
          <path d="M12 10v3" />
        </svg>
      );
    }
    if (key.includes("camera")) {
      return (
        <svg {...commonProps}>
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <circle cx="12" cy="13" r="4" />
          <path d="M7 6l2-2h6l2 2" />
        </svg>
      );
    }
    if (key.includes("head") || key.includes("headphone")) {
      return (
        <svg {...commonProps}>
          <path d="M4 13a8 8 0 0 1 16 0" />
          <rect x="3" y="12" width="4" height="7" rx="1.5" />
          <rect x="17" y="12" width="4" height="7" rx="1.5" />
        </svg>
      );
    }
    if (key.includes("game") || key.includes("gaming")) {
      return (
        <svg {...commonProps}>
          <rect x="2" y="9" width="20" height="8" rx="4" />
          <path d="M8 13h-3m1.5-1.5v3" />
          <circle cx="16.5" cy="12.5" r="1.2" />
          <circle cx="18.5" cy="14.5" r="1.2" />
        </svg>
      );
    }
    // Default abstract circle if no match
    return <div className="h-14 w-14 rounded-full bg-black/5" />;
  }

  return (
    <Link
      href={categoryHref}
      className={[
        "group flex h-[145px] w-[170px] flex-col items-center justify-center rounded bg-white dark:bg-neutral-800 border border-black/30 dark:border-neutral-700",
        "transition-colors text-black dark:text-white cursor-pointer",
        active ? "bg-[#db4444] text-white border-transparent" : "hover:bg-[#db4444] hover:text-white hover:border-transparent",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mb-3 flex h-14 w-14 items-center justify-center">
        {icon ? icon : getAutoIcon(name)}
      </div>
      <p className="text-[16px] font-medium leading-6 text-current [font-family:Poppins,ui-sans-serif,system-ui]">
        {name}
      </p>
    </Link>
  );
}
