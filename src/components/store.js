const axios = require('axios');
var redux = require('redux');

const noteInitialState = {
  editStatus: false,
  data: [],
  editData: {},
  isAdd : false
}
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
    return state

    case 'DELETE_NOTE':
      return state

    case 'CHANGE_EDIT_STATUS':
      return {...state, editStatus: !state.editStatus}
      
    case 'CHANGE_ADD_STATUS':
      return {...state, isAdd: !state.isAdd}

    case 'GET_DATA_EDIT':
      return {...state, editData: action.editObject}


      
    case 'UPDATE_LIST':

      return {...state, data:action.data}

    default:
      return state
  }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
  console.log(store.getState());
})
export default store;