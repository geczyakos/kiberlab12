export function setStatusMessage(profileStore, userId, status) {
  const profile = profileStore.getProfile(userId) || {};
  profile.status = status;
  profileStore.setProfile(userId, profile);
}