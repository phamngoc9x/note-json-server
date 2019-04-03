var noteInitialState = {}

const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
    return action.newItem
    default:
      return state
  }
}
export default allReducer;