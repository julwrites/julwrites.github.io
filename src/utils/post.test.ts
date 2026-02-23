import { test } from 'node:test';
import assert from 'node:assert';
import { sortPostsByDate } from './post.ts';

test('sortPostsByDate sorts posts by date in descending order', () => {
  const posts = [
    { data: { pubDate: '2023-01-01' }, id: 1 },
    { data: { pubDate: '2023-03-01' }, id: 2 },
    { data: { pubDate: '2023-02-01' }, id: 3 },
  ];

  const sorted = sortPostsByDate(posts);

  assert.strictEqual(sorted[0].id, 2);
  assert.strictEqual(sorted[1].id, 3);
  assert.strictEqual(sorted[2].id, 1);
});

test('sortPostsByDate handles equal dates', () => {
  const posts = [
    { data: { pubDate: '2023-01-01' }, id: 1 },
    { data: { pubDate: '2023-01-01' }, id: 2 },
  ];

  const sorted = sortPostsByDate(posts);

  assert.strictEqual(sorted.length, 2);
  // Order of equal dates can be anything, but they should both be there
  assert.ok(sorted.some(p => p.id === 1));
  assert.ok(sorted.some(p => p.id === 2));
});

test('sortPostsByDate handles invalid dates by putting them at the end', () => {
  const posts = [
    { data: { pubDate: 'invalid' }, id: 'invalid-1' },
    { data: { pubDate: '2023-01-01' }, id: 'valid-1' },
    { data: { pubDate: 'invalid' }, id: 'invalid-2' },
    { data: { pubDate: '2023-02-01' }, id: 'valid-2' },
  ];

  const sorted = sortPostsByDate(posts);

  // Valid dates should be first and sorted descending
  assert.strictEqual(sorted[0].id, 'valid-2');
  assert.strictEqual(sorted[1].id, 'valid-1');

  // Invalid dates should be at the end
  assert.ok(sorted[2].id.startsWith('invalid'));
  assert.ok(sorted[3].id.startsWith('invalid'));
});

test('sortPostsByDate works with Date objects', () => {
  const posts = [
    { data: { pubDate: new Date('2023-01-01') }, id: 1 },
    { data: { pubDate: new Date('2023-03-01') }, id: 2 },
  ];

  const sorted = sortPostsByDate(posts);

  assert.strictEqual(sorted[0].id, 2);
  assert.strictEqual(sorted[1].id, 1);
});
