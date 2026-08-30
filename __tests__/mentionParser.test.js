import { parseMentions } from '../src/mentionParser';

test('extracts @-mentions from message text', () => {
  expect(parseMentions('hey @alice and @bob, check this out')).toEqual(['alice', 'bob']);
});

test('returns an empty array when there are no mentions', () => {
  expect(parseMentions('no mentions here')).toEqual([]);
});