import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Oscar — Un rincón con luz propia',
    description:
      'El rincón propio de Oscar en internet: filosofía, proyectos y opiniones sin algoritmos de por medio.',
    site: context.site,
    items: posts.map((post) => {
      const [lang, ...rest] = post.id.split('/');
      const slug = rest.join('/');
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: lang === 'es' ? `/blog/${slug}/` : `/en/blog/${slug}/`,
      };
    }),
    customData: '<language>es</language>',
  });
}
