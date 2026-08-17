export function createTypingTracker(timeoutMs = 5000) {
  const typing = new Map();
  return {
    setTyping(roomId, userId) {
      typing.set(`${roomId}:${userId}`, Date.now() + timeoutMs);
    },
    isTyping(roomId, userId) {
      const expires = typing.get(`${roomId}:${userId}`);
      return expires !== undefined && expires > Date.now();
    },
  };
}