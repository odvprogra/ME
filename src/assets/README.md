# Imágenes optimizadas

Las imágenes que pongas aquí las **optimiza Astro** automáticamente:
las comprime, genera formatos modernos (WebP/AVIF) y les añade
`width`/`height` para evitar saltos de layout.

## Cómo usarlas en un blog o proyecto (.md)

Referencia la imagen con una ruta **relativa al archivo `.md`**.

Desde un post en `src/content/blog/es/mi-post.md`, la imagen
`src/assets/blog/foto.jpg` está tres carpetas arriba:

```markdown
![Texto alternativo de la foto](../../../assets/blog/foto.jpg)
```

Desde un proyecto en `src/content/projects/es/mi-proyecto.md`:

```markdown
![Diagrama del flujo](../../../assets/projects/diagrama.png)
```

> El texto entre corchetes `[...]` es el `alt`: descríbelo siempre,
> por accesibilidad y SEO.

## ¿Y las de `public/`?

Si pones una imagen en `public/` se sirve tal cual, **sin optimizar**,
y se referencia con ruta absoluta (`/images/foo.jpg`). Úsalo solo para
cosas que no deben tocarse (favicon, og-image fija). Para fotos dentro
del contenido, prefiere `src/assets/`.

## Formatos

JPG/PNG para fotos, SVG para diagramas/logos. Astro convierte a
WebP/AVIF en el build, así que no necesitas hacerlo tú.
