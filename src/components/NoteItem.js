import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteNote, changeEditStatus, updateList, getDataEdit } from '../actions/index';
const axios = require('axios');

class NoteItem extends Component {
  
  getDataEdit = (value) => {
    this.props.editForm();
    this.props.getEditItem(value);
    
  }
  getDelete = (id) => {
    axios.get('http://localhost:3000/notes').then((res) =>  {
        res.data.map((value) =>{
          if(value.id === id){
            axios.delete('http://localhost:3000/notes/' + id).then((res) => {
              axios.get('http://localhost:3000/notes').then((res) =>  {
                this.props.updateData(res.data);
              })
            })
          }
        })
    })
    
  }
  render() {
    return (
      <div className="card mt-3">
        <div className="card-header" role="tab" id="note1">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#noteList" href={'#noteid' + this.props.id} aria-expanded="true" aria-controls={this.props.id}>
              {this.props.title}
            </a>
            <div className ="btn-group float-right">
              <button className="btn btn-outline-info" onClick={() =>this.getDataEdit(this.props.value)}>Sửa</button>
              <button className="btn btn-outline-danger" onClick={() =>this.getDelete(this.props.id)}>Xoá</button>
            </div>
          </h5>
        <div id={'noteid' + this.props.id}  className="collapse in" role="tabpanel" aria-labelledby="note1">
          <div className="card-body">
            {this.props.content}
          </div>
        </div>
      </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
   dataEdit: state.dataEdit,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteItem: (id) => {
      dispatch(deleteNote(id))
    },
    editForm: () => {
      dispatch(changeEditStatus())
    },
    getEditItem: (editObject) => {
      dispatch(getDataEdit(editObject))
    },
    updateData: (data) => {
      dispatch(updateList(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
