import config from "@/config/config.json";
// import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const title  = config.site.title;
const base_url = config.site.base_url;
const  meta_description  = config.metadata.meta_description;

export async function GET(context) {
  const blog = await getCollection('postsCollection');
  return rss({
    title: (title),
    description:  (meta_description),
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: (base_url),
  });
}
