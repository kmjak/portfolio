"use client";

import { JSX } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useAtom } from "jotai";
import { hamburgerActionAtom } from "@/store/hamburger/hamburgerActionAtom";

/**
 * @description ハンバーガーメニューコンポーネント
 *
 * @returns JSX.Element
 */
export default function HamburgerMenu(): JSX.Element {
  const [open, setOpen] = useAtom(hamburgerActionAtom);

  const handleToggleHamburger = () => {
    console.log("Hamburger menu toggled");
    setOpen((prev: boolean) => !prev);
  };

  return (
    <>
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={handleToggleHamburger}
        aria-label="Toggle menu"
      >
        {open ? <HiX /> : <HiMenu />}
      </button>
    </>
  );
}
