import changeEditStatus  from './changeEditStatus';
import changeAddStatus  from './changeAddStatus';
import getDataEdit  from './getDataEdit';
import updateList  from './updateList';
import { combineReducers }  from 'redux';

const allReducer = combineReducers({
  isAdd: changeAddStatus,
  editStatus: changeEditStatus,
  editData: getDataEdit,
  data: updateList
})
export default allReducer;