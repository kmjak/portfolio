"use client";

import { JSX } from "react";
import { useSetAtom } from "jotai";
import Link from "next/link";
import { Text } from "@/components/ui";
import { hamburgerActionAtom } from "@/store/hamburger/hamburgerActionAtom";

/**
 * @description ヘッダーのロゴコンポーネント
 *
 * @returns JSX.Element
 */
export default function HeaderLogo(): JSX.Element {
  const setModal = useSetAtom(hamburgerActionAtom);

  const handleLogoClick = () => {
    setModal(false);
  };

  return (
    <div className="" onClick={handleLogoClick}>
      <Link href="/">
        <Text className="font-bold text-base md:text-lg lg:text-xl">My Portfolio</Text>
      </Link>
    </div>
  );
}
