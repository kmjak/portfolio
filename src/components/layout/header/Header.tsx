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
    <header className="fixed top-0 left-0 w-screen h-16 md:h-18 lg:h-20 bg-gray-950 border-b border-gray-800 flex items-center z-10">
      <div className="w-full flex items-center justify-between px-4">
        <HeaderLogo />
        <NavLinks />
        <HamburgerMenu />
      </div>
    </header>
  );
}
