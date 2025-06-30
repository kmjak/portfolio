import { Skill } from "./Skill";

/**
 * @description スキルカテゴリの情報を定義するインターフェースです。
 *
 * @property {string} title - カテゴリのタイトル
 * @property {Skill[]} skills - カテゴリに属するスキルの配列
 */
export interface SkillCategory {
  title: string;
  skills: Skill[];
}
