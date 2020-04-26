import BlogContents from "./blog/contents.json";

const contents = new Map();
contents.set("blog", BlogContents);

export const Blog = Array.from(contents.keys()).map(( section ) => { 
    const entries: string[] = contents.get(section);

    const posts = entries.map(( entry ) => {
        return {
            path: entry,
            name: entry,
            component: () => import(`./${section}/${entry}.md`),
        };
    });

    return {
        path: `/${section}`,
        name: section,
        component: () => import(`../views/Blog.vue`),
        children: posts,
    }
});