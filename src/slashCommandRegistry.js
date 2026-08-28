export function createCommandRegistry() {
  const commands = new Map();
  return {
    register(name, handler) {
      commands.set(name, handler);
    },
    get(name) {
      return commands.get(name);
    },
  };
}