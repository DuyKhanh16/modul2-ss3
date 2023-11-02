import React, { Component } from 'react'

export default class APP extends Component {
    constructor(){
        super()
        this.state={
            input:""
        }
    }
 chargerValue=(event)=>{
this.setState({
    input:event.target.value
})
 }
  render() {
    return (
      <div>
        <input type="text" onChange={this.chargerValue}/>
        <button onClick={()=>this.props.send(this.state.input)}>Send</button>
        <p>Văn bản hiển thị: {this.props.text}</p>
      </div>
    )
  }
}
