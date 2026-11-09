import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const updatesCollection = defineCollection({
    // The glob loader explicitly tells Astro where to find the markdown files
    loader: glob({ pattern: "**/*.md", base: "./src/content/updates" }),

    schema: () =>
        z.object({
            title: z.string(),  
            date: z.date(),
            author: z.array(z.string()),
            tags: z.array(z.enum(["Events", "Blogs", "Showcases", "News"])),
            image: z.string(),
            video: z.string().optional(),
            excerpt: z.string(),
        }),
});

export const collections = {
    updates: updatesCollection,
};
