export function createRoomStore() {
  const rooms = new Map();
  let nextId = 1;
  return {
    create(name) {
      const id = nextId++;
      rooms.set(id, { id, name, createdAt: Date.now() });
      return id;
    },
    list() {
      return Array.from(rooms.values());
    },
    remove(id) {
      return rooms.delete(id);
    },
    get(id) {
      return rooms.get(id);
    },
  };
}