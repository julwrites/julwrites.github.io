import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortPostsByDate } from '../../utils/post';

export async function GET(context) {
  const projects = await getCollection('projects');
  const sortedProjects = sortPostsByDate(projects);

  return rss({
    title: 'Projects | tehj.io',
    description: 'A collection of projects and works.',
    site: context.site,
    items: sortedProjects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.pubDate,
      description: project.data.description,
      link: `/projects/${project.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
