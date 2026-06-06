import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { categories } from '../utils/categories';
import { getPublished } from '../utils/content';
import { withBase } from '../utils/links';

export async function GET(context: APIContext) {
  // Agrège les trois collections dans un seul flux, du plus récent au plus ancien.
  const grouped = await Promise.all(
    categories.map(async (cat) => {
      const entries = await getPublished(cat.collection);
      return entries.map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.date,
        categories: [cat.label, ...entry.data.tags],
        link: withBase(`${cat.slug}/${entry.id}/`),
      }));
    })
  );

  const items = grouped
    .flat()
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Photo·Explore',
    description:
      'Photographes, techniques et culture photographique — un carnet mis à jour au fil des explorations.',
    site: context.site!,
    items,
  });
}
