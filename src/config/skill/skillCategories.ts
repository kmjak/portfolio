import {
  FaJs,
  FaPython,
  FaJava,
  FaPhp,
  FaSwift,
  FaDatabase,
  FaLinux,
  FaWindows,
  FaApple,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiExpress,
  SiFlask,
  SiSwift,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiSocketdotio,
  SiKotlin,
  SiSupabase,
  SiNotion,
  SiFirebase,
} from "react-icons/si";
import { SkillCategories } from "@/types/skill";

/**
 * @description スキルカテゴリの情報を定義するインターフェースです
 */
export const skillCategories: SkillCategories[] = [
  {
    title: "プログラミング言語",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
      { name: "C++", icon: FaDatabase, color: "text-blue-600" },
      { name: "PHP", icon: FaPhp, color: "text-purple-500" },
      { name: "Java", icon: FaJava, color: "text-green-500" },
      { name: "Swift", icon: FaSwift, color: "text-orange-500" },
      { name: "Kotlin", icon: SiKotlin, color: "text-purple-400" },
    ],
  },
  {
    title: "フレームワーク",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-300" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Django", icon: SiDjango, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      { name: "Flask", icon: SiFlask, color: "text-gray-300" },
      { name: "SwiftUI", icon: SiSwift, color: "text-blue-500" },
    ],
  },
  {
    title: "データベース",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "NoSQL", icon: SiMongodb, color: "text-green-500" },
    ],
  },
  {
    title: "開発OS",
    skills: [
      { name: "MacOS", icon: FaApple, color: "text-gray-300" },
      { name: "Linux", icon: FaLinux, color: "text-yellow-600" },
      { name: "Windows", icon: FaWindows, color: "text-blue-500" },
    ],
  },
  {
    title: "ツール・その他",
    skills: [
      { name: "Prisma", icon: SiPrisma, color: "text-gray-300" },
      { name: "Socket.io", icon: SiSocketdotio, color: "text-gray-400" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
      { name: "Docker", icon: FaDocker, color: "text-blue-400" },
      { name: "AWS", icon: FaAws, color: "text-orange-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Supabase", icon: SiSupabase, color: "text-green-500" },
      { name: "Notion", icon: SiNotion, color: "text-gray-400" },
    ],
  },
];
