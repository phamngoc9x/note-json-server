import React, { Component } from 'react'
import NoteItem from './NoteItem';

export default class NoteList extends Component {
  
  render() {
    
    // const listNote = this.props.data.map((value, key) => {
    //   return <NoteItem key = {key} title= {value.title} noteContent = {value.noteContent}></NoteItem>;
    // })
    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {
            //listNote
          }
          
        </div>
      </div>
    )
  }
}
