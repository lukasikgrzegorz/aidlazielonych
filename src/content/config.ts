import { defineCollection, z } from 'astro:content';

const lekcjeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    duration: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  lekcje: lekcjeCollection,
};
