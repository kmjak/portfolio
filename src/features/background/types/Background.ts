import { z } from "zod";
import type { backgroundSchema, backgroundsSchema } from "../schemas/backgroundSchema";

type Background = z.infer<typeof backgroundSchema>;
type Backgrounds = z.infer<typeof backgroundsSchema>;

export type { Background, Backgrounds };
