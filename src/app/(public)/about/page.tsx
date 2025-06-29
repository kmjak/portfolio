import {
  AboutAtCoderSection,
  AboutHobbySection,
  AboutIntroSection,
  AchievementsSection,
} from "@/components/about";
import { PageTitle, Text } from "@/components/ui";

/**
 * @description Aboutページのコンポーネント
 *
 * @returns {JSX.Element} - Aboutページのコンポーネント
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen w-full mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto flex flex-col">
        <div className="text-center mb-12">
          <PageTitle>About Me</PageTitle>
          <Text className="text-gray-400 mt-4 max-w-2xl mx-auto">
            継続的な学習を通じて、技術力向上に取り組んでいます。
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <AboutIntroSection />
          <AboutHobbySection />
        </div>
        <AboutAtCoderSection />
        <AchievementsSection />
      </div>
    </div>
  );
}
