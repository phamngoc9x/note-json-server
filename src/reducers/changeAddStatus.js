
const noteInitialState =  false;
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'CHANGE_ADD_STATUS':
      state = !state
      return state
    default:
      return state
  }
}
export default allReducer;