import crypto from 'crypto';

export function generateInviteLink(roomId) {
  const token = crypto.randomBytes(16).toString('hex');
  return { roomId, token };
}