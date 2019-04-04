
import * as Types from './../constants/ActionTypes';
var noteInitialState = ''
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case Types.DELETE_NOTE:
      return state
    default:
      return state
  }
}
export default allReducer;