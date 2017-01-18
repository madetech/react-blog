const INITIAL_STATE = [
  { text: 'comment 1', author: 'scott' },
  { text: 'comment 2', author: 'richard' }
]

export default function comments (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COMMENT': {
      const comment = { text: action.text, author: action.author }
      return [...state, comment]
    }
    default:
      return state
  }
}
