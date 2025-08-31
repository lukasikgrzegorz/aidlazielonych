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

const testyCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    questions: z.array(z.object({
      id: z.number(),
      question: z.string(),
      options: z.array(z.string()),
      correct: z.number(),
    })),
  }),
});

export const collections = {
  lekcje: lekcjeCollection,
  testy: testyCollection,
};
