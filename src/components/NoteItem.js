import React, { Component } from 'react'

export default class NoteItem extends Component {
  render() {
    return (
      <div className="card mt-3">
      <div className="card-header" role="tab" id="note1">
        <h5 className="mb-0">
          <a data-toggle="collapse" data-parent="#noteList" href="#notecontent1" aria-expanded="true" aria-controls="notecontent1">
            Ghi chu ngay 18/3/2018
          </a>
        </h5>
      </div>
      <div id="notecontent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
        <div className="card-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat asperiores eligendi quis tempore ad esse! Voluptate possimus pariatur cupiditate et, ex corrupti ea provident nam placeat sapiente quas magni.
        </div>
      </div>
    </div>
    )
  }
}
