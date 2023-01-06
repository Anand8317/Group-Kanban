import fetchComment from '../modules/fetchComments.js';

test('fetchComment', async () => {
  // Test fetching a comment with a valid ID
  const result1 = await fetchComment('48440');
  const result2 = await fetchComment('33461');
  expect(result1).toHaveLength(4);
  expect(result2).toHaveLength(7);

  // Test fetching a comment with an invalid ID
  const failResult = await fetchComment(456);
  expect(failResult).toHaveLength(0);
});
