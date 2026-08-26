// Installs a chat bot/plugin from a URL an admin provides, so teams
// can extend the chat with community-built integrations without
// waiting on us to publish them to an official directory.

export async function installPluginFromUrl(url, fs, targetPath) {
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(targetPath, buffer);
  return targetPath;
}