import React, { Component } from 'react'

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteContent:''
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
    this.props.sendData(item);
  }
  render() {
    return (
      <div className="col-4">
        <h3 className="mt-3">SỬA NỘI DUNG NOTE</h3>
        <form>
        <div className="form-group">
          <label htmlFor="noteTitle">Tiêu đề Note</label>
          <input type="text" onChange = {(event) => this.handleChange(event)} className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpNoteTitle" placeholder="Tiêu đề Note" />
          <small id="helpNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
        </div>
        <div className="form-group">
          <label htmlFor="noteTitle">Nội dung Note</label>
          <textarea type="text"  onChange = {(event) => this.handleChange(event)} className="form-control" name="noteContent" id="noteContent" aria-describedby="helpNoteTitle" placeholder="Nội dung Note" defaultValue={""} />
          <small id="helpNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
        </div>
        <button type="reset" className="btn btn-primary btn-block" onClick = {() => this.addData(this.state.noteTitle, this.state.noteContent)}>Lưu</button>
        </form>
      </div>

    )
  }
}
