export function sortPostsByDate<T extends { data: { pubDate: Date | string } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.data.pubDate).valueOf();
    const dateB = new Date(b.data.pubDate).valueOf();

    // Handle invalid dates
    if (isNaN(dateA) && isNaN(dateB)) return 0;
    if (isNaN(dateA)) return 1;
    if (isNaN(dateB)) return -1;

    return dateB - dateA;
  });
}
