import React, { Component } from 'react';
import Board from '../components/Board';
import Chess from 'chess'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameClient: Chess.createSimple(),
      selectedSquare: null
    }
  }

  getPiece(square) {
    return this.state.gameClient.getStatus().board.getSquare(square).piece;
  }

  getThreatenedSquares() {
    return this.state.gameClient.validMoves
            .filter(move => move.src.file+move.src.rank===this.state.selectedSquare)
            .map(move => move.squares)
  }

  handleClick(square) {
    if(square === this.state.selectedSquare) {
      this.setState({
        gameClient: this.state.gameClient,
        selectedSquare: null
      });
      return;
    }
    const selectedPiece = this.getPiece(square);
    if(selectedPiece 
        && selectedPiece.side.name === this.state.gameClient.game.getCurrentSide().name) 
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
      <Board 
        squares={this.state.gameClient.getStatus().board.squares} 
        selected={this.state.selectedSquare} 
        threatenedSquares={this.getThreatenedSquares()}
        handleClick={square => this.handleClick(square)} />
    );
  }
}
