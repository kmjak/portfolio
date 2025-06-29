import { JSX } from "react";
import AboutSection from "./AboutSection";
import { Text } from "@/components/ui";

export default function AboutHobbySection(): JSX.Element {
  return (
    <AboutSection title="趣味">
      <div className="grid grid-cols-1 gap-3">
        <Text className="font-semibold">競技プログラミング</Text>
        <Text className="font-semibold">Webアプリケーション開発</Text>
        <Text className="font-semibold">資格取得</Text>
        <Text className="font-semibold">ゲーム (CoDM最高上位0.05%)</Text>
      </div>
    </AboutSection>
  );
}
