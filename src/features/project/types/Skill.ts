import { z } from "zod";
import { techCategorySchema } from "../../tech_category/types/TechCategory";

export const skillSchema = z.object({
  id: z.string(),
  name: z.string(),
  level: z.number().int().min(0).max(10),
  description: z.string().optional(),
  categories: z.array(techCategorySchema),
});

export const skillsSchema = z.array(skillSchema);

export type Skill = z.infer<typeof skillSchema>;
export type Skills = z.infer<typeof skillsSchema>;
