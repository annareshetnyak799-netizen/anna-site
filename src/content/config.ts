import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    translationKey: z.string(),
    locale: z.enum(['ru', 'en']),
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
