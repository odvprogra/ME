export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'site.title': 'Oscar',
    'site.tagline': 'Un rincón con luz propia',
    'site.description':
      'El rincón propio de Oscar en internet: filosofía, proyectos y opiniones sin apariencias de por medio.',
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'hero.status': 'vivo y en construcción',
    'hero.greeting': 'Hola, soy Oscar.',
    'hero.lead':
      'Este es mi rincón propio en internet: lo que pienso, lo que construyo y lo que me da curiosidad. Nada de apariencias, vamos directo con la realidad.',
    'hero.cta.blog': 'Lee lo que pienso',
    'hero.cta.projects': 'Mira lo que construyo',
    'home.latestPosts': 'Último pensamiento',
    'home.latestPosts.sub': 'Opiniones, filosofía y notas en voz alta.',
    'home.projects': 'Cosas que construyo',
    'home.projects.sub': 'Por trabajo y por puro gusto.',
    'home.viewAll': 'Ver todo',
    'blog.title': 'Blog',
    'blog.sub': 'Cómo pienso, qué opino, qué me da vueltas en la cabeza.',
    'blog.readPost': 'Leer',
    'blog.backToBlog': '← Volver al blog',
    'projects.title': 'Proyectos',
    'projects.sub': 'Lo que hago por trabajo y lo que hago por diversión.',
    'projects.work': 'Trabajo',
    'projects.work.sub': 'Contribuciones serias, problemas reales.',
    'projects.fun': 'Por diversión',
    'projects.fun.sub': 'Sin métricas, sin fechas de entrega. Solo curiosidad.',
    'projects.back': '← Volver a proyectos',
    'projects.viewProject': 'Ver proyecto',
    'about.title': 'Sobre mí',
    'footer.madeWith': 'Hecho a mano por Oscar',
    'footer.rss': 'RSS',
    'notfound.title': 'Esta página no existe (todavía)',
    'notfound.lead': 'Buscó por todas partes y no encontró nada aquí.',
    'notfound.back': 'Volver al inicio',
    'date.locale': 'es-ES',
  },
  en: {
    'site.title': 'Oscar',
    'site.tagline': 'A corner with a light of its own',
    'site.description':
      "Oscar's own corner of the internet: philosophy, projects and opinions with no algorithms in between.",
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'hero.status': 'alive and under construction',
    'hero.greeting': "Hi, I'm Oscar.",
    'hero.lead':
      "This is my own corner of the internet: what I think, what I build, and what makes me curious. No algorithms in between — if you got here, it's because you meant to.",
    'hero.cta.blog': 'Read what I think',
    'hero.cta.projects': 'See what I build',
    'home.latestPosts': 'Latest thinking',
    'home.latestPosts.sub': 'Opinions, philosophy, and notes out loud.',
    'home.projects': 'Things I build',
    'home.projects.sub': 'For work, and for the pure joy of it.',
    'home.viewAll': 'View all',
    'blog.title': 'Blog',
    'blog.sub': "How I think, what I believe, what's spinning in my head.",
    'blog.readPost': 'Read',
    'blog.backToBlog': '← Back to blog',
    'projects.title': 'Projects',
    'projects.sub': 'What I do for work, and what I do for my own fire.',
    'projects.work': 'Work',
    'projects.work.sub': 'Serious contributions, real problems.',
    'projects.fun': 'For fun',
    'projects.fun.sub': 'No metrics, no deadlines. Just curiosity.',
    'projects.back': '← Back to projects',
    'projects.viewProject': 'View project',
    'about.title': 'About me',
    'footer.madeWith': 'Handmade by Oscar',
    'footer.rss': 'RSS',
    'notfound.title': "This page doesn't exist (yet)",
    'notfound.lead': 'It searched everywhere and found nothing here.',
    'notfound.back': 'Back home',
    'date.locale': 'en-US',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Rutas equivalentes entre idiomas, para el conmutador ES/EN */
export const routeMap: Record<string, string> = {
  '/': '/en/',
  '/blog/': '/en/blog/',
  '/proyectos/': '/en/projects/',
  '/sobre-mi/': '/en/about/',
};

export function getAltLangHref(pathname: string, lang: Lang): string {
  const path = pathname.endsWith('/') ? pathname : pathname + '/';
  if (lang === 'es') {
    return routeMap[path] ?? '/en/';
  }
  const inverse = Object.fromEntries(Object.entries(routeMap).map(([es, en]) => [en, es]));
  return inverse[path] ?? '/';
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(ui[lang]['date.locale'], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
