import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    schema: z.object({
        idSlug: z.string().optional(),
        title: z.string().optional(),
        customer: z.string().optional(),
        tl: z.string().optional(),
        date: z.string().optional(),
        amount: z.number().optional(),
        status: z.string().optional(),
        tags: z.array(z.string()).optional(),
        shortDescription: z.string().optional(),
        images: z.array(z.string()).optional(),
    }),
});

export const collections = {
    projekte_de: projectsCollection,
    projekte_en: projectsCollection
};