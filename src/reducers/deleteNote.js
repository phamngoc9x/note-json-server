
var noteInitialState = ''
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'DELETE_NOTE':
      return state
    default:
      return state
  }
}
export default allReducer;