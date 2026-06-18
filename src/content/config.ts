import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    icon: z.string(),
  }),
});

export const collections = { blog };
