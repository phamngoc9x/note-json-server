import React, { Component } from 'react';
import { connect } from 'react-redux';
//inport store from 'store';
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      noteContent:'',
      id: ''
    }
  }
  
  componentWillMount() {
    if(this.props.editData) {
      this.setState({
        title: this.props.editData.title,
        noteContent: this.props.editData.noteContent,
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
      editOject.noteContent = this.state.noteContent;
      console.log('dang sua du lieu');
      this.props.editDataStore(editOject);
      this.props.editForm();
    }else{
      var item = {};
      item.title = title;
      item.noteContent = content;
      this.props.addDataStore(item);
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
          <input type="text" onChange = {(event) => this.handleChange(event)} defaultValue = {this.props.editData.title} className="form-control" name="title" id="title" aria-describedby="helptitle" placeholder="Tiêu đề Note" />
          <small id="helptitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
        </div>
        <div className="form-group">
          <label htmlFor="title">Nội dung Note</label>
          <textarea type="text"  onChange = {(event) => this.handleChange(event)} defaultValue = {this.props.editData.noteContent} className="form-control" name="noteContent" id="noteContent" aria-describedby="helptitle" placeholder="Nội dung Note"  />
          <small id="helptitle" className="form-text text-muted">Điền nội dung vào đây</small>
        </div>
        <button type="reset" className="btn btn-primary btn-block" onClick = {() => this.addData( this.state.title, this.state.noteContent)}>Lưu</button>
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
      dispatch({type:"ADD_DATA", newItem})
    },
    editDataStore: (getItem) => {
      dispatch({type:"EDIT", getItem})
    },
    editForm: () => {
      dispatch({type:"CHANGE_EDIT_STATUS"})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

