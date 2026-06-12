import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Los posts viven en src/content/blog/{es,en}/*.md
// El idioma se deriva de la carpeta (el id es "es/mi-post" o "en/my-post").
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Slug del mismo post en el otro idioma (sin prefijo de carpeta), si existe
    translationSlug: z.string().optional(),
  }),
});

// Los proyectos viven en src/content/projects/{es,en}/*.md
// El idioma se deriva de la carpeta (el id es "es/mi-proyecto" o "en/my-project").
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['work', 'fun']),
    tech: z.array(z.string()).default([]),
    link: z.string().optional(),
    repo: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    // Slug del mismo proyecto en el otro idioma (sin prefijo de carpeta), si existe
    translationSlug: z.string().optional(),
  }),
});

export const collections = { blog, projects };
