import { Text } from "@/components/ui";
import AboutSection from "./AboutSection";
import { JSX } from "react";

export default function AboutAtCoderSection(): JSX.Element {
  return (
    <AboutSection title="AtCoder実績">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
          <Text className="font-semibold mb-2">Algorithm</Text>
          <Text className="font-bold text-lg sm:text-lg md:text-lg lg:text-lg">
            最高レート: 790
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
