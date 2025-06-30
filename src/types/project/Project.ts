/**
 * @description プロジェクトの型定義
 *
 * @param id - プロジェクトの一意な識別子
 * @param title - プロジェクトのタイトル
 * @param description - プロジェクトの説明
 * @param technologies - 使用した技術一覧
 * @param githubUrl - GitHub リポジトリの URL (オプション）
 * @param liveUrl - プロジェクトのライブデモの URL (オプション)
 * @param imageUrl - プロジェクトの画像の URL (オプション)
 * @param featured - 注目プロジェクトかどうか
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}
