import { noteData } from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
  editStatus: false,
  editData: {}
}
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      noteData.push(action.newItem);
    case 'DELETE_NOTE':
      noteData.child(String(action.id)).remove();
      return state
    case 'CHANGE_EDIT_STATUS':
      return {...state, editStatus: !state.editStatus}
    case 'GET_DATA_EDIT':
      return {...state, editData: action.editObject}
    default:
      return state
  }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
  console.log(store.getState());
  
})
export default store;