# chat-toolkit

A small, dependency-light chat/messaging backend library for Node.js:
rooms, messages, presence, moderation, threading, and bots.

## Installation

```
npm install chat-toolkit
```

## Utilities

- `createRoomStore` / `createMessageStore` – core room and message state
- `createPresenceTracker` / `createTypingTracker` / `createReadReceiptTracker` – live status
- `buildMentionMatcher` / `parseMentions` – mention detection
- `renderSearchResultsPage` / `buildSearchIndex` – search
- `createMembershipStore` / `createModerationStore` – room membership and moderation
- `editMessage` / `softDeleteMessage` / `addReaction` – message actions
- `importRoomConfig` – YAML-based room config import
- `hashPassword` / `verifyPassword` – user password storage
- `createPinStore` – pinned messages
- `buildRememberMeCookie` / `readRememberMeCookie` – persistent login
- `deleteRoomAsAdmin` – admin room deletion
- `createAttachmentStore` – file attachment metadata
- `paginateMessages` – message pagination
- `fetchLinkPreview` – shared-link preview cards
- `createUnreadCounter` / `getDmRoomKey` – unread counts and DMs
- `installPluginFromUrl` – bot/plugin installation
- `createReply` / `generateInviteLink` – threading and invites
- `grepExportedLogs` – compliance log search
- `createProfileStore` / `setStatusMessage` / `getRoomMembers` – user profiles
- `createMessageRateLimiter` / `archiveRoom` / `createCommandRegistry` – misc

## Usage

```js
import { createRoomStore, createMessageStore } from 'chat-toolkit';

const rooms = createRoomStore();
const messages = createMessageStore();
const roomId = rooms.create('general');
messages.send(roomId, 'user1', 'Hello, world!');
```

## License

MIT