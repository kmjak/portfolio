import { Text } from "@/components/ui";
import { JSX } from "react";
import AboutSection from "./AboutSection";

/**
 * @description AtCoderの実績を表示するセクションコンポーネント
 *
 * @returns {JSX.Element} - AtCoder実績セクション
 */
export default function AboutAtCoderSection(): JSX.Element {
  return (
    <AboutSection title="AtCoder実績">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
          <Text className="font-semibold mb-2">Algorithm</Text>
          <Text className="font-bold text-lg sm:text-lg md:text-lg lg:text-lg">
            最高レート: 888
          </Text>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
          <Text className="font-semibold mb-2">Heuristic</Text>
          <Text className="font-bold text-lg sm:text-lg md:text-lg lg:text-lg">
            最高レート: 820
          </Text>
        </div>
      </div>
    </AboutSection>
  );
}
