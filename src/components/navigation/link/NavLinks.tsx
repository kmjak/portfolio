import { NavLinkType } from "@/types/link";
import { navLinks } from "@/config/link/navLinks";
import NavLink from "./NavLink";

/**
 * @description ナビゲーションリンクをまとめたコンポーネント
 *
 * @returns ナビゲーションリンクコンポーネント
 */
export default function NavLinks() {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-4">
        {navLinks.map((link: NavLinkType) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
