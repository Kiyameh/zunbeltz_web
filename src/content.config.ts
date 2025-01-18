import {defineCollection, reference, z} from 'astro:content'
import {glob, file} from 'astro/loaders'

const posts = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/content/posts'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(reference('tags')),
    author: reference('authors'),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
})

const techniques = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/content/techniques'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(reference('tags')),
    author: reference('authors'),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    difficulty: z.enum(['easy', 'medium', 'hard']),
  }),
})

const materials = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/content/materials'}),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    categories: z.string().array(),
  }),
})

const authors = defineCollection({
  loader: file('src/content/authors.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
})

const tags = defineCollection({
  loader: file('src/content/tags.json'),
  schema: z.object({
    id: z.string(),
  }),
})

export const collections = {
  posts,
  techniques,
  materials,
  authors,
  tags,
}
