import { cn } from "@/utils/tailwind";
import { HTMLProps, JSX, ReactNode } from "react";

interface PageSubTitleProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
}

/**
 * @description
 * 再利用可能なPageSubTitleコンポーネント
 * ページのタイトルや見出しを表示するために使うことを想定している
 * classNameプロパティを使ってスタイルを追加・上書きすることができる
 *
 * @param {string} [className] - 追加のCSSクラス
 * @param {ReactNode} children - タイトルの内容
 * @param {HTMLProps<HTMLHeadingElement>} props - HTMLの標準的なh3の属性
 * @returns {JSX.Element} - PageTitleコンポーネント
 */
export default function PageSubTitle({
  children,
  className,
  ...props
}: PageSubTitleProps): JSX.Element {
  return (
    <h3
      className={cn(
        "text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold py-1 md:py-2 lg:py-3 select-none",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
