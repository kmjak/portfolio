import { Text } from "@/components/ui";
import Link from "next/link";
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
  return (
    <Link href={href}>
      <Text className={textClassName}>{children}</Text>
    </Link>
  );
}
