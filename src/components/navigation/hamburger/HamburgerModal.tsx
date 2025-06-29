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
          "md:hidden bg-slate-800 fixed top-16 bottom-0 w-48 sm:w-64 h-full right-0 transition-all ease-in-out z-10",
          {
            "right-0": isOpen,
            "-right-48 sm:-right-64": !isOpen,
          }
        )}
      >
        <ul>
          {navLinks.map((link: NavLinkType) => (
            <li key={link.href} className="hover:bg-slate-700 transition-colors duration-200">
              <NavLink
                href={link.href}
                className="text-lg sm:text-xl px-3 py-1 sm:px-5 sm:py-2 w-full block"
                onClick={handleCloseHamburger}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
