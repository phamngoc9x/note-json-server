import * as Types from './../constants/ActionTypes';
const noteInitialState = []
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case Types.FETCH_DATA:
    state = action.data;
      return state
    default:
      return state
  }
}
export default allReducer;