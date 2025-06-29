import { JSX } from "react";
import { Text } from "../ui";
import AboutSection from "./AboutSection";

export default function AchievementsSection(): JSX.Element {
  return (
    <AboutSection title="実績">
      <Text className="font-semibold">2025年06月: HackU 出場</Text>
      <Text className="font-semibold">2025年06月: 株式会社ログラス 5Daysインターンシップ参加</Text>
      <Text className="font-semibold">2025年03月: Progateハッカソン特別賞受賞</Text>
      <Text className="font-semibold">2025年03月: AtCoder Heuristic: レート800到達</Text>
      <Text className="font-semibold">2025年01月: AtCoder Heuristic: レート400到達</Text>
      <Text className="font-semibold">2024年08月: AtCoder Algorithm: レート400到達</Text>
      <Text className="font-semibold">2024年06月: AtCoder Heuristic: 初参加</Text>
      <Text className="font-semibold">2024年06月: AtCoder Algorithm: 初参加</Text>
      <Text className="font-semibold">その他: Call of Duty Mobile 元上位0.05%</Text>
      <Text className="font-semibold">その他: Minecraft Hive Treasure Wars 元世界44位</Text>
    </AboutSection>
  );
}
