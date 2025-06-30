import { SkillCategoriesCard } from "@/components/skill";
import { PageTitle, Text } from "@/components/ui";
import { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "skillsページ",
};

/**
 * @description Skillsページのコンポーネント
 *
 * @returns {JSX.Element} - SkillsPageコンポーネント
 */
export default function SkillsPage(): JSX.Element {
  return (
    <div className="min-h-screen w-full mx-auto px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <PageTitle>Skills</PageTitle>
          <Text className="text-gray-400 mt-4 max-w-2xl mx-auto">
            興味を持った技術を積極的に学び、実際のプロジェクトで活用してきました。新しい技術にも柔軟に対応し、自走的にスキルを伸ばすことを大切にしています。
          </Text>
        </div>
        <SkillCategoriesCard />
      </div>
    </div>
  );
}
