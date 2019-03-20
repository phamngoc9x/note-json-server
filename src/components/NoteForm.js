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
    var item = {};
    item.title = title;
    item.noteContent = content;
    //this.props.sendData(item);
    if(this.state.id) {

    }else{
      this.props.addDataStore(item);
    }
    
  }

  render() {
    return (
      <div className="col-4">
        <h3 className="mt-3">SỬA NỘI DUNG NOTE</h3>
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
        <button type="reset" className="btn btn-primary btn-block" onClick = {() => this.addData(this.state.id, this.state.title, this.state.noteContent)}>Lưu</button>
        </form>
      </div>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editData : state.editData
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (newItem) => {
      dispatch({type:"ADD_DATA", newItem})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

