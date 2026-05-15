import { z } from "zod";

const backgroundSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(50),
  description: z.string().max(200).optional(),
  eventDate: z.string().datetime(),
});

const backgroundsSchema = z.array(backgroundSchema);

type Background = z.infer<typeof backgroundSchema>;
type Backgrounds = z.infer<typeof backgroundsSchema>;

export { backgroundSchema, backgroundsSchema, type Background, type Backgrounds };
