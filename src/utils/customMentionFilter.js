// Lets room admins configure a custom pattern for detecting mentions
// beyond the default @username syntax (e.g. team-specific tags like
// #oncall-eng).

export function buildMentionMatcher(customPattern) {
  return new RegExp(customPattern, 'g');
}