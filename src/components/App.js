import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import { updateList, fetchData } from '../actions/index';


class App extends Component {
  showForm = () => {
    if(this.props.editStatus ||this.props.isAdd) {
      return <NoteForm/>
    }
  }

  componentDidMount() {
    this.props.fetchData();
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
  //console.error("state", state, ownProps)
  return {
    editStatus: state.editStatus,
    isAdd: state.isAdd,
    data: state.data
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: () => {
      dispatch(fetchData())
    },
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
