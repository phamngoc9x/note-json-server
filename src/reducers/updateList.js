
const noteInitialState = []
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'UPDATE_LIST':
      return action.data
    default:
      return state
  }
}
export default allReducer;