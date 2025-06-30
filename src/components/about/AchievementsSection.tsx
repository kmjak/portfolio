import { JSX, memo } from "react";
import { Text } from "@/components/ui";
import AboutSection from "./AboutSection";
import { achievements } from "@/config/about";

/**
 * @description 実績セクションを表示するコンポーネント
 *
 * @returns {JSX.Element} - 実績セクション
 */
function AchievementsSectionComponent(): JSX.Element {
  return (
    <AboutSection title="実績">
      {achievements.map((achievement) => (
        <Text key={`${achievement.date}-${achievement.name}`} className="font-semibold">
          {achievement.date}: {achievement.name}
        </Text>
      ))}
    </AboutSection>
  );
}

export const AchievementsSection = memo(AchievementsSectionComponent);
