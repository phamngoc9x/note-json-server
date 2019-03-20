import React, { Component } from 'react'
import NoteItem from './NoteItem';
import {noteData} from './firebaseConnect';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFirebase: []
    }
  }
  componentWillMount() {
    noteData.on('value', (notes) => {
      var arrayData = []
      notes.forEach(value => {
        const key = value.key;
        const title = value.val().title;
        const noteContent = value.val().noteContent;
        arrayData.push({
          id:key,
          title: title,
          noteContent: noteContent
        })
      })
      this.setState({
        dataFirebase : arrayData
      })
    })
  }
  getData = () => {
    if(this.state.dataFirebase) {
      return this.state.dataFirebase.map((value, key) =>{
        return <NoteItem value = {value} key = {key} id ={ value.id} title= {value.title} noteContent = {value.noteContent}/>
      })
    }
    
  }  
  render() {
    
    // const listNote = this.props.data.map((value, key) => {
    //   return <NoteItem key = {key} title= {value.title} noteContent = {value.noteContent}></NoteItem>;
    // })
    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {
            this.getData()
          }
        </div>
      </div>
    )
  }
}
