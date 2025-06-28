import { JSX } from "react";
import HeaderLogo from "./HeaderLogo";
import { HamburgerMenu } from "@/components/navigation/hamburger/";
import { NavLinks } from "@/components/navigation/link";

/**
 * @description ヘッダーコンポーネント
 *
 * @returns JSX.Element
 */
export default function Header(): JSX.Element {
  return (
    <header className="w-full h-16 md:h-18 lg:h-20 bg-gray-950 border-b border-gray-800 flex items-center">
      <div className="container mx-auto flex items-center justify-between px-2">
        <HeaderLogo />
        <NavLinks />
        <HamburgerMenu />
      </div>
    </header>
  );
}
