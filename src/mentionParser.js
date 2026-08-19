const MENTION_RE = /@(\w+)/g;

export function parseMentions(text) {
  return [...text.matchAll(MENTION_RE)].map((m) => m[1]);
}