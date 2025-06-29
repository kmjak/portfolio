import { IconType } from "react-icons";

/**
 * @description スキルの情報を定義するインターフェースです。
 *
 * @property {string} name - スキルの名前
 * @property {string} icon - スキルのアイコンのクラス名
 * @property {string} color - スキルの色を表すクラス名
 */
export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}
