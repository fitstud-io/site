import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    lastModified: z.string().optional(),
    cover: z.string(),
    coverAlt: z.string().optional(),
    category: z.array(z.string()),
    tags: z.array(z.string()),
    author: z.string(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};

// export const collections = { posts };
