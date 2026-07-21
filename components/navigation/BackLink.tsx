import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
        "inline-flex items-center gap-2",
        "text-sm font-bold text-slate-500",
        "transition duration-200",
        "hover:text-blue-600",
        className,
      ].join(" ")}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}