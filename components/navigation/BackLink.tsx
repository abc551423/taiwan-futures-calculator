import Link from "next/link";

interface BackLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function BackLink({
  href,
  label,
  className = "",
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center gap-2 text-sm font-medium",
        "text-slate-500 transition-colors hover:text-slate-900",
        className,
      ].join(" ")}
    >
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
}