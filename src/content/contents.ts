import BlogContents from "./blog/contents.json";

const contents = new Map();
contents.set("blog", BlogContents);

interface Entry {
    id: string;
    title: string;
    date: string;
    desc: string;
}

function TitleCase(str: string) {
  return str.toLowerCase().split(" ").map((word) => {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(" ");
}

export const Content = Array.from(contents.keys()).map(( section ) => {
    const entries: Entry[] = contents.get(section);

    const posts = entries.map(( entry ) => {
        return {
            path: entry.id,
            name: entry.id,
            title: entry.title,
            date: entry.date,
            desc: entry.desc,
            component: () => import(`./${section}/${entry.id}/${entry.id}.md`),
        };
    });

    return {
        path: `/${section}`,
        name: TitleCase(section),
        component: () => import(`../views/Content.vue`),
        children: posts,
    };
});
