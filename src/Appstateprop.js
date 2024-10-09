import React, { Component } from 'react'
import MyclassComponent1 from './components/MyclassComponent1'
import './components/style.css'
export default class App extends Component {
  state = 
  {
    subject: "DeepLearning",
    section: "Section A"
  }
  render() {
    return (
      <div>
        <MyclassComponent1 section = {this.state.section}/>
        <h2> I am teaching subject {this.state.subject}</h2>
      </div>
    )
  }
}