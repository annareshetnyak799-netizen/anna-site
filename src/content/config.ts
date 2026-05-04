import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    date: z.date(),
    excerpt: z.string(),
    excerptEn: z.string().optional(),
    lang: z.enum(['ru', 'en', 'both']).default('ru'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
