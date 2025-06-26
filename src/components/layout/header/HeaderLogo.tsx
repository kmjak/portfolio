"use client";

import { JSX } from "react";
import Link from "next/link";
import { Text } from "@/components/ui";
import { useHamburger } from "@/hooks/navigation";

/**
 * @description ヘッダーのロゴコンポーネント
 *
 * @returns JSX.Element
 */
export default function HeaderLogo(): JSX.Element {
  const { handleCloseHamburger } = useHamburger();

  return (
    <div onClick={handleCloseHamburger}>
      <Link href="/" className="hover:opacity-60 transition-opacity duration-200">
        <Text className="font-bold text-base md:text-lg lg:text-xl">My Portfolio</Text>
      </Link>
    </div>
  );
}
