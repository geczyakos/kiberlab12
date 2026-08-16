export function createPresenceTracker() {
  const online = new Set();
  return {
    setOnline(userId) {
      online.add(userId);
    },
    setOffline(userId) {
      online.delete(userId);
    },
    isOnline(userId) {
      return online.has(userId);
    },
  };
}