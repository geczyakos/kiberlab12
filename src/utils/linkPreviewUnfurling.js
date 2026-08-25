// Fetches a shared URL's metadata (title, description, image) so we
// can show a rich link preview card in the chat, following any
// redirects the URL might have.

export async function fetchLinkPreview(url) {
  const res = await fetch(url, { redirect: 'follow' });
  const html = await res.text();
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  return { title: titleMatch ? titleMatch[1] : null, finalUrl: res.url };
}