"use client";

import { Text } from "@/components/ui";
import { cn } from "@/utils/tailwind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  textClassName?: string;
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
  textClassName,
}: Readonly<NavLinkProps>): JSX.Element {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "hover:opacity-60 transition-opacity duration-200",
        pathname === href ? "text-blue-400" : "text-white"
      )}
    >
      <Text className={textClassName}>{children}</Text>
    </Link>
  );
}
