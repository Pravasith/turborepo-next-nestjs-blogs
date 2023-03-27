import { z } from "zod"

export const BlogPattern = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    content: z.string(),
    image: z.string(),
    published_at: z.string().nullable(),
})

export type BlogType = z.infer<typeof BlogPattern>
