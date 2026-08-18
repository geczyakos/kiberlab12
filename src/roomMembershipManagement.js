export function createMembershipStore() {
  const memberships = new Map();
  return {
    addMember(roomId, userId) {
      const set = memberships.get(roomId) || new Set();
      set.add(userId);
      memberships.set(roomId, set);
    },
    removeMember(roomId, userId) {
      memberships.get(roomId)?.delete(userId);
    },
    isMember(roomId, userId) {
      return memberships.get(roomId)?.has(userId) || false;
    },
    getMembers(roomId) {
      return Array.from(memberships.get(roomId) || []);
    },
  };
}