import { JSX } from "react";

interface ErrorLayoutProps {
  children: JSX.Element;
}

/**
 * @description エラー発生時のレイアウトコンポーネント
 *
 * @param {ErrorLayoutProps} props - 子要素を含むプロパティ
 * @return JSX.Element
 */
export default function ErrorLayout({ children }: ErrorLayoutProps): JSX.Element {
  return <div className="mt-12 md:mt-32 h-full mx-auto px-4 text-center">{children}</div>;
}
