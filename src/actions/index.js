import * as types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const addData = () =>{
  return {
    type: types.ADD_DATA
  }
}
export const deleteNote = (id) =>{
  return {
    type: types.DELETE_NOTE,
    id
  }
}
export const changeEditStatus = (editStatus) =>{
  return {
    type: types.CHANGE_EDIT_STATUS,
    editStatus : !editStatus
  }
}
export const addStatus = (isAdd) =>{
  return {
    type: types.CHANGE_ADD_STATUS,
    isAdd : !isAdd
  }
}
export const getDataEdit = (editObject) =>{
  return {
    type: types.GET_DATA_EDIT,
    editObject 
  }
}
export const updateList = (data) =>{
  return {
    type: types.UPDATE_LIST,
    data 
  }
}
export const fetchData = () =>{
  return (dispatch) =>{
    return callApi('notes', 'GET', null).then(res => {
      dispatch(updateList(res.data))
    })
  }
}