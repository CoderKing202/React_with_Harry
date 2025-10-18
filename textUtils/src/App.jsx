import './App.css'
import React, { Component } from 'react'

export default class App extends Component {
  c = "John"
  render() {
    return (
      <div>
        This is my first Class based component {this.c}
      </div>
    )
  }
}
