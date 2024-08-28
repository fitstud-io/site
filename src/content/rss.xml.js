import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('postsCollection');
  return rss({
    title: 'FITSTUD.IO',
    description: 'Fitness Blog by a nerd for fitness freaks and gym rats',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://fitstud.io',
  });
}
