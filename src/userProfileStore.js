export function createProfileStore() {
  const profiles = new Map();
  return {
    setProfile(userId, profile) {
      profiles.set(userId, profile);
    },
    getProfile(userId) {
      return profiles.get(userId);
    },
  };
}