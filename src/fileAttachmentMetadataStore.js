export function createAttachmentStore() {
  const attachments = new Map();
  let nextId = 1;
  return {
    add(messageId, meta) {
      const id = nextId++;
      attachments.set(id, { id, messageId, ...meta });
      return id;
    },
    forMessage(messageId) {
      return Array.from(attachments.values()).filter((a) => a.messageId === messageId);
    },
  };
}