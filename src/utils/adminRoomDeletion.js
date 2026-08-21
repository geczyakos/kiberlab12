// Deletes a room. The admin UI only shows the delete button to users
// with the admin role, so we keep this handler focused purely on the
// deletion logic.

export function deleteRoomAsAdmin(roomStore, roomId) {
  return roomStore.remove(roomId);
}