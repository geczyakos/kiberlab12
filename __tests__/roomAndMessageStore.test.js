import { createRoomStore } from '../src/roomStore';
import { createMessageStore } from '../src/messageStore';

test('creates and lists rooms', () => {
  const store = createRoomStore();
  const id = store.create('general');
  expect(store.get(id).name).toBe('general');
  expect(store.list()).toHaveLength(1);
});

test('sends and lists messages for a room', () => {
  const store = createMessageStore();
  store.send(1, 'user1', 'hello');
  store.send(1, 'user2', 'hi there');
  store.send(2, 'user1', 'other room');

  expect(store.listForRoom(1)).toHaveLength(2);
  expect(store.listForRoom(2)).toHaveLength(1);
});