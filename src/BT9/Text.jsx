import React, { Component } from 'react'

export default class Text extends Component {
  render() {
    console.log(this.props.text);

    return (
      <div>
        <p>Chào bằng các ngôn ngữ:{this.props.text}</p>
      </div>
    )
  }
}
