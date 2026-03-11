import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortPostsByDate } from '../../utils/post';

export async function GET(context) {
  const blog = await getCollection('blog');
  const sortedPosts = sortPostsByDate(blog);

  return rss({
    title: 'Blog | tehj.io',
    description: 'A collection of thoughts and writings.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
