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
            excerpt: z.string(),
            tags: z.array(z.enum(["Events", "Blogs", "Showcases", "News"])),
            image: z.string(),
        }),
});

const databaseCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/database" }),
    schema: () =>
        z.object({
            title: z.string(),
            author: z.array(z.string()),
            course: z.enum([
                "CPE101",
                "CPE120",
                "CPE117",
                "CPE200-1L",
                "CPE120-1D",
            ]),
            description: z.string(),
            date: z.date(),
        }),
});

export const collections = {
    updates: updatesCollection,
    database: databaseCollection,
};
