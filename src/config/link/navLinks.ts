import { NavLinkType } from "@/types/link";

/**
 * @description
 * ページ遷移のためのナビゲーションリンクの設定
 * 各リンクは、hrefとlabelを持つオブジェクトの配列として定義されています。
 * hrefはリンク先のパス、labelは表示されるテキストです。
 */
export const navLinks: NavLinkType[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/projects",
    label: "Projects",
  },
];
