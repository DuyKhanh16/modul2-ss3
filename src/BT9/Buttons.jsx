import React, { Component } from 'react'

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.vietnam}>Tiếng Việt</button>
        <button onClick={this.props.trung}>Tiếng Trung</button>
        <button onClick={this.props.thai}>Tiếng Thái</button>
      </div>
    )
  }
}
