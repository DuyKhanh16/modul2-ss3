import React, { Component } from 'react'

export default class TIme extends Component {
  render() {
    
    return (
      <div>
        <p>Đồng Hồ Đếm Ngược :{this.props.time}</p>
      </div>
    )
  }
}
