// Returns the full member list for a room, so the client can render
// avatars, names, and status for everyone in the sidebar.

export function getRoomMembers(memberIds, userStore) {
  return memberIds.map((id) => userStore.get(id));
}