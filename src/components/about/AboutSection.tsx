import { JSX, ReactNode } from "react";
import { PageSubTitle } from "@/components/ui/";

interface AboutSectionProps {
  children: ReactNode;
  title: string;
}

/**
 * @description 特定のセクションのタイトルとその内容を表示するコンポーネント
 *
 * @param {AboutSectionProps} props - AboutSectionコンポーネントのプロパティ
 * @returns {JSX.Element} - AboutSectionコンポーネント
 */
export default function AboutSection({ children, title }: AboutSectionProps): JSX.Element {
  return (
    <section className="bg-gray-900 backdrop-blur-sm border-2 border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
      <PageSubTitle className="mb-4 text-blue-400">{title}</PageSubTitle>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
