import { z } from "zod";

import { techCategorySchema } from "../../tech_category/types/TechCategory";

// ProjectSkill型定義
const projectSkillSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  level: z.number().int().min(0).max(10).optional(),
  description: z.string().nullable().optional(),
  categories: z.array(techCategorySchema).optional(),
});

type ProjectSkill = z.infer<typeof projectSkillSchema>;

// ProjectDetail型定義
const projectDetailSchema = z.object({
  background: z.string().min(1),
  keyPoints: z.string().min(1),
  challenges: z.string().min(1),
  solutions: z.string().min(1),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

type ProjectDetail = z.infer<typeof projectDetailSchema>;

// 基本的なProject型定義（リスト表示用）
const projectSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  thumbnailUrl: z.string().url().nullable().optional(),
  repoUrl: z.string().url().nullable().optional(),
  demoUrl: z.string().url().nullable().optional(),
  isFeatured: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

type Project = z.infer<typeof projectSchema>;

// 詳細なProject型定義（詳細ページ用）
const projectDetailedSchema = projectSchema.extend({
  detail: projectDetailSchema.nullable().optional(),
  skills: z.array(projectSkillSchema),
});

type ProjectDetailed = z.infer<typeof projectDetailedSchema>;

// 配列型
const projectsSchema = z.array(projectSchema);
type Projects = z.infer<typeof projectsSchema>;

const projectsDetailedSchema = z.array(projectDetailedSchema);
type ProjectsDetailed = z.infer<typeof projectsDetailedSchema>;

export {
  projectDetailedSchema,
  projectDetailSchema,
  projectSchema,
  projectsDetailedSchema,
  projectSkillSchema,
  projectsSchema,
  type Project,
  type ProjectDetail,
  type ProjectDetailed,
  type Projects,
  type ProjectsDetailed,
  type ProjectSkill,
};
