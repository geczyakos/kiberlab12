export function getDmRoomKey(userIdA, userIdB) {
  return [userIdA, userIdB].sort().join(':');
}