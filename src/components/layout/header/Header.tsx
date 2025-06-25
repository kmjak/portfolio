import { navLinks } from "@/config/link/navLinks";
import { NavLinkType } from "@/types/link";
import { NavLink } from "@/components/navigation/link";
import { HamburgerMenu } from "@/components/navigation/hamburger/";
import HeaderLogo from "./HeaderLogo";
import { JSX } from "react";

/**
 * @description ヘッダーコンポーネント
 *
 * @returns JSX.Element
 */
export default function Header(): JSX.Element {
  return (
    <header className="w-screen h-10 md:h-12 lg:h-14 bg-gray-950 text-white border-b border-gray-800 flex items-center">
      <div className="container mx-auto flex items-center justify-between px-2">
        <HeaderLogo />

        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navLinks.map((link: NavLinkType) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <HamburgerMenu />
      </div>
    </header>
  );
}
