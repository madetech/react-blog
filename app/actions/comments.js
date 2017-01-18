export function addComment ({ text, author }) {
  return { type: 'ADD_COMMENT', text, author }
}
