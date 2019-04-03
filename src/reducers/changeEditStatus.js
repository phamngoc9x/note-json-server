
const noteInitialState = false
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'CHANGE_EDIT_STATUS':
      // state =
      return !state
    default:
      return state
  }
}
export default allReducer;