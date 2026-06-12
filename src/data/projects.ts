import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type ProjectEntry = CollectionEntry<'projects'>;

/** El idioma de un proyecto se deriva de su carpeta: "es/slug" → "es". */
export function projectLang(entry: ProjectEntry): Lang {
  return entry.id.split('/')[0] as Lang;
}

/** El slug sin el prefijo de idioma: "es/este-sitio" → "este-sitio". */
export function projectSlug(entry: ProjectEntry): string {
  return entry.id.split('/').slice(1).join('/');
}

/** Todos los proyectos de un idioma, ordenados por `order` y luego por título. */
export async function getProjects(lang: Lang): Promise<ProjectEntry[]> {
  const entries = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
  return entries.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title)
  );
}

export async function getProjectsByType(lang: Lang, type: 'work' | 'fun') {
  return (await getProjects(lang)).filter((p) => p.data.type === type);
}

export async function getFeaturedProjects(lang: Lang) {
  return (await getProjects(lang)).filter((p) => p.data.featured);
}

/** Ruta a la página de detalle de un proyecto. */
export function projectHref(entry: ProjectEntry): string {
  const lang = projectLang(entry);
  const slug = projectSlug(entry);
  return lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`;
}
