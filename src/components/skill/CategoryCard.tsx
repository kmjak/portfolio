import { Skill, SkillCategories } from "@/types/skill";
import { memo } from "react";
import { PageSubTitle } from "@/components/ui";
import { SkillItem } from "./SkillItem";

function CategoryCardComponent({ category }: { category: SkillCategories }) {
  return (
    <div className="bg-gray-900 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <PageSubTitle className="text-blue-400 mb-6">{category.title}</PageSubTitle>
      <div className="grid grid-cols-1 gap-3">
        {category.skills.map((skill: Skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export const CategoryCard = memo(CategoryCardComponent);
