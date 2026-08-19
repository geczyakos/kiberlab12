export function createPinStore() {
  const pinned = new Map();
  return {
    pin(roomId, messageId) {
      const set = pinned.get(roomId) || new Set();
      set.add(messageId);
      pinned.set(roomId, set);
    },
    unpin(roomId, messageId) {
      pinned.get(roomId)?.delete(messageId);
    },
    getPinned(roomId) {
      return Array.from(pinned.get(roomId) || []);
    },
  };
}