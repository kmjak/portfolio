"use client";

import { JSX } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useAtomValue } from "jotai";
import { hamburgerActionAtom } from "@/store/hamburger/hamburgerActionAtom";
import { useHamburger } from "@/hooks/navigation";

/**
 * @description ハンバーガーメニューコンポーネント
 *
 * @returns JSX.Element
 */
export default function HamburgerMenu(): JSX.Element {
  const isOpen = useAtomValue(hamburgerActionAtom);
  const { handleToggleHamburger } = useHamburger();

  return (
    <>
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={handleToggleHamburger}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>
    </>
  );
}
