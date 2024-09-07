// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "FITSTUD.IO";
export const SITE_TITLE = "FITSTUD.IO";
export const SITE_DESCRIPTION = "An Astro Theme for Visual Storytelling";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "FITSTUD.IO - All Tags";
export const Tags_DESCRIPTION =
  "All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category`,
    description: `Browse all articles under the ${category} category`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/fitness/1/", title: "Fitness" },
  { href: "/category/mindset/1/", title: "Mindset" },
  { href: "/category/nutrition/1/", title: "Nutrition" },
  { href: "/category/podcasts/1/", title: "Podcasts" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/about/", title: "About" },
  { href: "/", title: "Contact" },
  { href: "/", title: "Products" },
  { href: "/", title: "Swag" },
];

//  Legal Links
export const LegalLinks = [
  { href: "/privacy/", title: "Privacy Policy" },
  { href: "/terms/", title: "Terms of Service" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://instagram.com/fitstud.io",
    icon: "tabler:brand-instagram",
    label: "Instagram",
  },
  {
    href: "https://x.com/fitstud-io",
    icon: "tabler:brand-x",
    label: "X",
  },
  {
    href: "https://github.com/fitstud_io",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
  {
    href: "https://youtube.com/@fitstud",
    icon: "tabler:brand-youtube",
    label: "YouTube",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
