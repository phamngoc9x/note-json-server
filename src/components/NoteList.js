import React, { Component } from 'react'
import NoteItem from './NoteItem';

export default class NoteList extends Component {

  getData = () => {
    if(this.props && this.props.dataTest) {
      return this.props.dataTest.map((value, key) =>{
        return <NoteItem value = {value} key = {key} id ={value.id} title= {value.title} content = {value.content}/>
      })
    }
    
  }  
  render() {
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

