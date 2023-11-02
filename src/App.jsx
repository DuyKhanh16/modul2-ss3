// import React, { Component } from 'react'
// import Time from './BT8/Time'
// import Buttons from './BT8/Buttons'
// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       time: 0,
//       a:0,

//     }
//   }
//   start = () => {
//    this.setState({
//     a: setInterval(() => {
//       this.setState({
//         time: this.state.time+1,
//       })
      
//     }, 1000)
//    })
//   }
//   stop = () => {
//     clearInterval(this.state.a)
//   }
//   reset = () => {
//     this.setState({
//       time:0
//     })
//   }
//   render() {
//     return (
//       <div>
//         <Time time={this.state.time}></Time>
//         <Buttons start={this.start} stop={this.stop} reset={this.reset}></Buttons>
//       </div>
//     )
//   }
// }

// **********************
// Bài 9


// import React, { Component } from 'react'
// import Text from './BT9/Text'
// import Buttons from './BT9/Buttons'
// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       text:"hello",
//     }
//   }
//   vietnam=()=>{
// this.setState({
//   text:"Xin chào"
// })
//   }
//   trung=()=>{
//     this.setState({
//       text:"你好"
//     })
//   }
//   thai=()=>{
//     this.setState({
//       text:"สวัสดี"
//     })
//   }
//   render() {
//     return (
//       <div>
//         <Text text={this.state.text}></Text>
//         <Buttons vietnam={this.vietnam} trung={this.trung} thai={this.thai} ></Buttons>
//       </div>
//     )
//   }
// }

// ***************************
// Bài 10

// import React, { Component } from 'react'
// import APP from './BT10/APP'
// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//         text:""
//     }
// }

// send=(value)=>{
//   this.setState({
//     text:value
//   })
// }
//   render() {
//     return (
//       <div>
//         <APP text={this.state.text} send={this.send}></APP>
//       </div>
//     )
//   }
// }

// *****************

