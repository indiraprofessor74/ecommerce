import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div >
        <h1 > I am display component and subject is {this.props.subject}</h1>
      </div>
    )
  }
}
