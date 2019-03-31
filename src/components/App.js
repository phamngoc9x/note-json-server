import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
const axios = require('axios');
class App extends Component {
  constructor(props) {
    super(props);
  }

  showForm = () => {
    if(this.props.editStatus) {
      return <NoteForm/>
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/notes').then((res) =>  {
      this.props.updateData(res.data);
    })
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="">
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <NoteList dataTest = {this.props.data}/>
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
    data: state.data
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateData: (data) => {
      dispatch({type:"UPDATE_LIST", data})
    },
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
