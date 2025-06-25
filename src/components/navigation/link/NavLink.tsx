import { Text } from "@/components/ui";
import Link from "next/link";
import { JSX } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: Readonly<NavLinkProps>): JSX.Element {
  return (
    <Link href={href}>
      <Text>{children}</Text>
    </Link>
  );
}
