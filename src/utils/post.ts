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

const itemDateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return itemDateFormatter.format(d);
}
