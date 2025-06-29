import { Text } from "@/components/ui";
import AboutSection from "./AboutSection";
import { JSX } from "react";
import { certifications } from "@/config/about";
import { Certification } from "@/types/about";

/**
 * @description 資格セクションコンポーネント
 *
 * @returns {JSX.Element} - 資格セクションの内容を含むコンポーネント
 */
export default function CertificationSection(): JSX.Element {
  return (
    <AboutSection title="資格">
      <div className="grid grid-cols-1 gap-3">
        {certifications.map((certification: Certification, index: number) => (
          <div key={index}>
            <Text className="font-semibold">
              {certification.date}: {certification.name}
            </Text>
          </div>
        ))}
      </div>
    </AboutSection>
  );
}
