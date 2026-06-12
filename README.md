# ◯ oscar — un rincón con luz propia

Mi sitio personal: filosofía, proyectos (trabajo + diversión) y opiniones.
Bilingüe (ES/EN), diseño **Tinta Minimal** — papel, tinta y tipografía
protagonista (de mi exploración en `designes/`) — y una mascota de trazo
simple que habita el sitio.

## Comandos

```sh
npm run dev      # servidor local en http://localhost:4321
npm run build    # build de producción en ./dist
npm run preview  # previsualizar el build
```

## Cómo escribir un post

Crea un archivo `.md` en `src/content/blog/es/` (o `en/` para inglés):

```md
---
title: 'Mi título'
description: 'Una línea que resume el post.'
pubDate: 2026-06-15
tags: ['opiniones']
# opcional — slug del mismo post en el otro idioma:
translationSlug: 'my-title'
# opcional — para no publicarlo aún:
draft: true
---

El contenido en Markdown va aquí.
```

El nombre del archivo es el slug de la URL: `mi-titulo.md` → `/blog/mi-titulo/`.

## Cómo agregar un proyecto

Edita [src/data/projects.ts](src/data/projects.ts). Cada proyecto tiene
`type: 'work' | 'fun'`, descripción en ambos idiomas, tech, y enlaces opcionales.
Los marcados `[ejemplo]` están esperando ser reemplazados por los reales.

## Pendientes personales

- [ ] Reescribir "Sobre mí" con tu voz (`src/pages/sobre-mi.astro` y `en/about.astro`)
- [ ] Reemplazar los proyectos `[ejemplo]` en `src/data/projects.ts`
- [ ] Poner el dominio real en `astro.config.mjs` (campo `site`)
- [ ] Desplegar (Netlify, Vercel, Cloudflare Pages — todos gratis para sitios estáticos)

## El ente ◯

Vive en `src/components/InkOrb.astro`: un círculo de línea pura con ojos de
punto y sonrisa de trazo. Flota, parpadea, te sigue con la mirada, se aplasta
cuando haces scroll rápido, y si lo tocas sonríe, suelta destellos
tipográficos (`+ ✳ ·`) y dice una frase en monospace. Las frases se pasan
como prop desde cada página. Respeta `prefers-reduced-motion`.
