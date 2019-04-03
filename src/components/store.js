import allReducer from '../reducers/index';
var redux = require('redux');

var store = redux.createStore(allReducer);
store.subscribe(function(){
  console.log(store.getState());
})
export default store;