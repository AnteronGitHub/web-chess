import React, { Component } from 'react';
import Board from '../components/Board';
import Chess from 'chess'

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameClient: Chess.createSimple(),
      selectedSquare: null
    }
  }

  handleClick(square) {
    if(!this.state.selectedSquare)
      this.setState({
        gameClient: this.state.gameClient,
        selectedSquare: square
      })
    else {
      try {
        this.state.gameClient.move(this.state.selectedSquare, square);
        this.setState({
          gameClient: this.state.gameClient,
          selectedSquare: null
        })
      } catch (error) {
        if(!error.includes("Move is invalid"))
          throw error
      }
    }
  }

  render() {
    return (
      <Board status={this.state.gameClient.getStatus().board.squares} handleClick={square => this.handleClick(square)} />
    );
  }
}

export default Root;
