import React, { Component } from 'react';
import './App.css';
import {noteData} from './firebaseConnect';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

var data = noteData.once('value').then(function(snapshot){
  return snapshot.val();
});

class App extends Component {
  
  pushData = (item) => {
    noteData.push(item);
    console.log(item)
  }
  deleteData = () => {
    noteData.child('-LaJ6dPgyDGHnuos4Fyq').remove();
  }

  render() {
    noteData.once('value').then(function(snapshot){
      console.log(snapshot.val())
    })
    return (
      <div className="">
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <NoteList data = {data}/>
            <NoteForm sendData = {(item) => this.pushData(item)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
