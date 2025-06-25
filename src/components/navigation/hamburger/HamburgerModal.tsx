"use client";

import { JSX } from "react";
import { hamburgerActionAtom } from "@/store/hamburger/hamburgerActionAtom";
import { useAtomValue } from "jotai";
import { navLinks } from "@/config/link/navLinks";
import { NavLinkType } from "@/types/link";
import { cn } from "@/utils/tailwind";
import { NavLink } from "@/components/navigation/link";
import { useHamburger } from "@/hooks/navigation";

/**
 * @description ハンバーガーモーダルコンポーネント
 *
 * @returns JSX.Element
 */
export default function HamburgerModal(): JSX.Element {
  const isOpen = useAtomValue(hamburgerActionAtom);
  const { handleCloseHamburger } = useHamburger();

  return (
    <>
      <nav
        className={cn(
          "md:hidden bg-gray-700 text-white absolute top-0 bottom-0 w-64 h-full right-0 transition-all ease-in-out",
          {
            "right-0": isOpen,
            "-right-64": !isOpen,
          }
        )}
      >
        <ul className="flex flex-col space-y-2">
          {navLinks.map((link: NavLinkType) => (
            <li key={link.href} onClick={handleCloseHamburger}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
