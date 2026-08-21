export function buildSearchIndex(messages) {
  const index = new Map();
  messages.forEach((m) => {
    m.text.toLowerCase().split(/\s+/).forEach((word) => {
      const set = index.get(word) || new Set();
      set.add(m.id);
      index.set(word, set);
    });
  });
  return index;
}