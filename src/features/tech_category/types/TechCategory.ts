import { z } from "zod";

// TechCategory型定義
const techCategorySchema = z.object({
  id: z.string(),
  name: z.string().min(1),
});

type TechCategory = z.infer<typeof techCategorySchema>;

export { techCategorySchema, type TechCategory };
