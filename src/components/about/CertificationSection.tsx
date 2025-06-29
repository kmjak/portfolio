import { Text } from "@/components/ui";
import AboutSection from "./AboutSection";
import { JSX } from "react";

/**
 * @description 資格セクションコンポーネント
 *
 * @returns {JSX.Element} - 資格セクションの内容を含むコンポーネント
 */
export default function CertificationSection(): JSX.Element {
  return (
    <AboutSection title="資格">
      <div className="grid grid-cols-1 gap-3">
        <Text className="font-semibold">2024年05月 CompTIA Security+</Text>
        <Text className="font-semibold">2023年12月:CompTIA A+</Text>
        <Text className="font-semibold">2023年11月: CompTIA Network+</Text>
        <Text className="font-semibold">2023年09月: 基本情報技術者</Text>
        <Text className="font-semibold">2023年08月: ITパスポート</Text>
        <Text className="font-semibold">2023年07月: Azure AI Fundamentals</Text>
        <Text className="font-semibold">など</Text>
      </div>
    </AboutSection>
  );
}
