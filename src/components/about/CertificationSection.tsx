import { Text } from "@/components/ui";
import AboutSection from "./AboutSection";
import { JSX, memo } from "react";
import { certifications } from "@/config/about";
import { AboutDetails } from "@/types/about";

/**
 * @description 資格セクションコンポーネント
 *
 * @returns {JSX.Element} - 資格セクションの内容を含むコンポーネント
 */
function CertificationSectionComponent(): JSX.Element {
  return (
    <AboutSection title="資格">
      <ul className="grid grid-cols-1 gap-3">
        {certifications.map((certification: AboutDetails) => (
          <li key={`${certification.date}-${certification.name}`}>
            <Text className="font-semibold">
              {certification.date}: {certification.name}
            </Text>
          </li>
        ))}
      </ul>
    </AboutSection>
  );
}

export const CertificationSection = memo(CertificationSectionComponent);
