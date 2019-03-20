import React, { Component } from 'react';
import './App.css';
import {noteData} from './firebaseConnect';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';

var data = noteData.once('value').then(function(snapshot){
  return snapshot.val();
});

class App extends Component {
  
  showForm = () => {
    if(this.props.editStatus) {
      return <NoteForm/>
    }
  }
  
  render() {
    return (
      <div className="">
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <NoteList data = {data}/>
            {this.showForm()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.editStatus,
  }
}

export default connect(mapStateToProps)(App);
