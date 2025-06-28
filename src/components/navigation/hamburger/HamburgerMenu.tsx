"use client";

import { JSX } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useAtomValue } from "jotai";
import { hamburgerActionAtom } from "@/store/hamburger/hamburgerActionAtom";
import { useHamburger } from "@/hooks/navigation";
import { Button } from "@/components/ui";

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
      <Button className="md:hidden py-3 md:py-5 lg:py-6" onClick={handleToggleHamburger}>
        {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
      </Button>
    </>
  );
}
