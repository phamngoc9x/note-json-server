
const noteInitialState = {}
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'GET_DATA_EDIT':
      return action.editObject
    default:
      return state
  }
}
export default allReducer;