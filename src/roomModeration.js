export function createModerationStore() {
  const muted = new Set();
  return {
    mute(roomId, userId) {
      muted.add(`${roomId}:${userId}`);
    },
    unmute(roomId, userId) {
      muted.delete(`${roomId}:${userId}`);
    },
    isMuted(roomId, userId) {
      return muted.has(`${roomId}:${userId}`);
    },
  };
}