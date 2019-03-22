import React, { Component } from 'react'
import NoteItem from './NoteItem';
//import {noteData} from './firebaseConnect';

export default class NoteList extends Component {
  
  componentWillMount() {
    
  }
  getData = () => {
    if(this.props && this.props.data) {
      return this.props.data.map((value, key) =>{
        return <NoteItem value = {value} key = {key} id ={key} title= {value.title} content = {value.content}/>
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
