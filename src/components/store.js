import allReducer from '../reducers/index';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux'
var redux = require('redux');

var store = redux.createStore(allReducer,applyMiddleware(thunk));
store.subscribe(function(){
  console.log(store.getState());
})
export default store;