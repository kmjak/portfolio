import { JSX } from "react";
import { Text } from "@/components/ui";
import AboutSection from "./AboutSection";

/**
 * @description 自己紹介セクションを表示するコンポーネント
 *
 * @returns {JSX.Element} - 自己紹介セクション
 */
export default function AboutIntroSection(): JSX.Element {
  return (
    <AboutSection title="自己紹介">
      <div className="space-y-3">
        <Text className="text-lg sm:text-lg md:text-lg lg:text-lg">
          名前: <span className="font-bold">奥村真翔</span>
        </Text>
        <Text className="text-gray-300">
          私は将来的に、高い技術力と柔軟な設計力の両面を兼ね備えたテックリードになりたいと考えています。
        </Text>
      </div>
    </AboutSection>
  );
}
