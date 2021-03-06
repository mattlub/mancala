import React, { Component } from 'react'
import Header from './Header'
import Board from './Board'
import StatusBar from './StatusBar'

import { makeMove, emptyHomes } from '../utils'

import '../App.css';

const START_AMOUNT = 4

const intialState = {
  player: 0,
  board: emptyHomes(Array(14).fill(START_AMOUNT)),
  isOver: false,
  message: ''
}

class App extends Component {

  constructor () {
    super()
    this.state = Object.assign({}, intialState)
    this.clickHandler = this.clickHandler.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
  }

  resetHandler () {
    this.setState(intialState)
  }

  clickHandler (i) {
    const newState = makeMove(i)(this.state)
    this.setState(newState)
  }

  render () {
    return (
      <div className="App">

        <Header />

        <StatusBar
          player={this.state.player}
          isOver={this.state.isOver}
          message={this.state.message}
        />

        <Board
          board={this.state.board}
          clickHandler={this.clickHandler}
        />

        <button onClick={this.resetHandler}>
          Reset
        </button>

      </div>
    );
  }
}

export default App;
