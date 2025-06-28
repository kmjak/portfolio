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
          "md:hidden bg-slate-800 fixed top-[64px] bottom-0 w-48 sm:w-64 h-full right-0 transition-all ease-in-out",
          {
            "right-0": isOpen,
            "-right-48 sm:-right-64": !isOpen,
          }
        )}
      >
        <ul className="flex flex-col space-y-1 sm:space-y-2">
          {navLinks.map((link: NavLinkType) => (
            <li
              key={link.href}
              onClick={handleCloseHamburger}
              className="hover:bg-slate-700 px-3 sm:px-5 transition-colors duration-200"
            >
              <NavLink href={link.href} textClassName="text-lg sm:text-xl">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
