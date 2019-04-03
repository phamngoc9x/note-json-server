import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData, changeEditStatus, addStatus, updateList } from '../actions/index';
const axios = require('axios');

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content:'',
      id: ''
    }
  }
  
  componentWillMount() {
    if(!this.props.isAdd) {
      this.setState({
        title: this.props.editData.title,
        content: this.props.editData.content,
        id : this.props.editData.id,
      })
    }
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState( {
      [name]: value
    })
  }

  addData = (title, content) => {
    if(this.state.id) {
      var editOject = {};
      editOject.id = this.state.id;
      editOject.title = this.state.title;
      editOject.content = this.state.content;
      this.props.editForm();
      axios.get('http://localhost:3000/notes').then((res) =>  {
        res.data.map( (data) =>{
          if(data.id === this.state.id){
            console.log(this.state.id)
            axios.put('http://localhost:3000/notes/' + this.state.id, editOject).then((res) => {
              axios.get('http://localhost:3000/notes').then((res) =>  {
                this.props.updateData(res.data);
              })
            })
          }
        })
      })
    }else{
      var item = {};
      item.title = title;
      item.content = content;
      this.props.changeAddStatus();
      axios.post('http://localhost:3000/notes', item).then((res) =>{
        console.log(res.data);
        this.props.addDataStore(res.data);
        axios.get('http://localhost:3000/notes').then((res) =>  {
          this.props.updateData(res.data);
        })
      })
      
    }
    
  }

  printTitle = ()=>{
    if(this.props.isAdd) {
      return <h5 className="mt-3">Thêm mới Ghi Chú</h5>
    }
    else {
      return <h5 className="mt-3">Sửa Ghi Chú</h5>
    }
  }
  render() {
    return (
      <div className="col-4">
        {this.printTitle()}
        <form>
        <div className="form-group">
          <label htmlFor="title">Tiêu đề Note</label>
          <input type="text" onChange = {(event) => this.handleChange(event)} value={this.state.title} className="form-control" name="title" id="title" aria-describedby="helptitle" placeholder="Tiêu đề Note" />
          <small id="helptitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
        </div>
        <div className="form-group">
          <label htmlFor="title">Nội dung Note</label>
          <textarea type="text"  onChange = {(event) => this.handleChange(event)} value = {this.state.content} className="form-control" name="content" id="content" aria-describedby="helptitle" placeholder="Nội dung Note"  />
          <small id="helptitle" className="form-text text-muted">Điền nội dung vào đây</small>
        </div>
        <button type="reset" className="btn btn-primary btn-block" onClick = {() => this.addData( this.state.title, this.state.content)}>Lưu</button>
        </form>
      </div>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editData : state.editData,
    isAdd: state.isAdd,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (newItem) => {
      dispatch(addData(newItem));
    },
    editForm: () => {
      dispatch(changeEditStatus())
    },
    changeAddStatus: () => {
      dispatch(addStatus())
    },
    updateData: (data) => {
      dispatch(updateList(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

