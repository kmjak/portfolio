import { z } from "zod";

const achievementSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(50),
  description: z.string().max(200).nullable(),
  achievedAt: z.string().datetime(),
});

const achievementsSchema = z.array(achievementSchema);

type Achievement = z.infer<typeof achievementSchema>;
type Achievements = z.infer<typeof achievementsSchema>;

export { achievementSchema, achievementsSchema, type Achievement, type Achievements };
