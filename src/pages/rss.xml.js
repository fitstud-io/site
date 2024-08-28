import config from "@/config/config.json";
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

const title  = config.site.title;
const  meta_description  = config.metadata.meta_description;

export async function GET(context) {
  return rss({
    title: (title),
    description:  (meta_description),
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  })
}
