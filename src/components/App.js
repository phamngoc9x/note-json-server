import React, { Component } from 'react';
import './App.css';
//import {noteData} from './firebaseConnect';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
const axios = require('axios');
const dataJson = () => axios.get('http://localhost:3000/notes').then((res) => res.data);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  showForm = () => {
    if(this.props.editStatus) {
      return <NoteForm/>
    }
  }
  
  componentWillMount() {
    if(this.state.data === null) {
      dataJson().then((res) => {
        this.setState({
          data:res
        })
      })
    }
  }
  render() {
    console.log(this.state.data);
    

    return (
      <div className="">
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <NoteList data = {this.state.data}/>
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
