import { JSX } from "react";
import { Text } from "@/components/ui";
import AboutSection from "./AboutSection";
import { hobbies } from "@/config/about";

/**
 * @description 趣味セクションを表示するコンポーネント
 *
 * @returns {JSX.Element} - 趣味セクション
 */
export default function AboutHobbySection(): JSX.Element {
  return (
    <AboutSection title="趣味">
      <div className="grid grid-cols-1 gap-3">
        {hobbies.map((hobby) => (
          <Text key={hobby} className="font-semibold">
            {hobby}
          </Text>
        ))}
      </div>
    </AboutSection>
  );
}
