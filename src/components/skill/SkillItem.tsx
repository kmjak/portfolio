import { Skill } from "@/types/skill";
import { JSX, memo } from "react";
import { Text } from "@/components/ui";

interface SkillItemProps {
  skill: Skill;
}

/**
 * @description スキルアイテム(名前とアイコン)を表示するコンポーネント
 *
 * @param {SkillItemProps} props - スキルアイテムのプロパティ
 * @returns {JSX.Element} - スキルアイテムコンポーネント
 */
function SkillItemComponent({ skill }: SkillItemProps): JSX.Element {
  const IconComponent = skill.icon;

  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 group">
      <IconComponent
        className={`text-xl ${skill.color} group-hover:scale-120 transition-transform duration-300`}
      />
      <Text className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors duration-300">
        {skill.name}
      </Text>
    </div>
  );
}

export const SkillItem = memo(SkillItemComponent);
