"use client";

import { cn } from "@/utils/tailwind";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface NavLinkProps extends Omit<LinkProps, 'href'> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * @description ナビゲーションリンクコンポーネント
 *
 * @param {NavLinkProps} props - リンクのプロパティ
 * @returns {JSX.Element} - ナビゲーションリンクの要素
 */
export default function NavLink({
  href,
  children,
  className,
  ...props
}: Readonly<NavLinkProps>): JSX.Element {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "hover:opacity-70 transition-opacity duration-200",
        className,
        pathname === href && "text-blue-400"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
