export function createMessageRateLimiter(maxPerMinute = 30) {
  const timestamps = new Map();
  return {
    canSend(userId) {
      const now = Date.now();
      const windowStart = now - 60000;
      const recent = (timestamps.get(userId) || []).filter((t) => t > windowStart);
      recent.push(now);
      timestamps.set(userId, recent);
      return recent.length <= maxPerMinute;
    },
  };
}