import {defineCollection, reference, z} from 'astro:content'
import {glob, file} from 'astro/loaders'

const techniques = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/content/techniques'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: reference('tags').array(),
    author: reference('authors'),
    date: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    difficulty: z.enum(['easy', 'medium', 'hard']),
  }),
})

const materials = defineCollection({})

const authors = defineCollection({
  loader: file('src/content/authors.json'),
})

const tags = defineCollection({
  loader: file('src/content/tags.json'),
})

export const collections = {
  techniques,
  materials,
  authors,
  tags,
}
