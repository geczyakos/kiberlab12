// Renders the search results page, echoing back what the user
// searched for so they can see/edit their query above the results.

export function renderSearchResultsPage(query, results) {
  if (results.length === 0) {
    return `<p>No messages found for "${query}"</p>`;
  }
  return `<ul>${results.map((r) => `<li>${r.text}</li>`).join('')}</ul>`;
}