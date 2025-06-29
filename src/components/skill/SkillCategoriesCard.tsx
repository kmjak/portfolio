import { SkillCategories } from "@/types/skill";
import { skillCategories } from "@/config/skill";
import { CategoryCard } from "./CategoryCard";
import { JSX } from "react";

/**
 * @description スキルカテゴリカードを表示するコンポーネントです。
 *
 * @returns {JSX.Element} スキルカテゴリカードのグリッド
 */
export default function SkillCategoriesCard(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillCategories.map((category: SkillCategories) => (
        <CategoryCard key={category.title} category={category} />
      ))}
    </div>
  );
}
