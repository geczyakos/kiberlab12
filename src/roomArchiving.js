export function archiveRoom(room) {
  room.archivedAt = Date.now();
  return room;
}