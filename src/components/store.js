const axios = require('axios');
const dataJson = () => axios.get('http://localhost:3000/notes').then((res) => res.data);
const dataAdd = (item) => {
  console.error("action.newItem", item)
  return axios.post('http://localhost:3000/notes', {item}).then((res) => res.data)
};

var redux = require('redux');

const noteInitialState = {
  editStatus: false,
  editData: {},
  isAdd : false
}
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      dataAdd(action.newItem);
      
      return state

    case 'DELETE_NOTE':
      //noteData.child(String(action.id)).remove();
      return state

    case 'CHANGE_EDIT_STATUS':
      return {...state, editStatus: !state.editStatus}
      
    case 'CHANGE_ADD_STATUS':
      return {...state, isAdd: !state.isAdd}

    case 'GET_DATA_EDIT':
      return {...state, editData: action.editObject}

    case 'EDIT':
      // noteData.child(action.getItem.id).update({
      //   title : action.getItem.title,
      //   noteContent: action.getItem.noteContent
      // })
      return {...state, editData:{}}

    default:
      return state
  }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
  console.log(store.getState());
  
})
export default store;