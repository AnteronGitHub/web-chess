
import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {
    printState() {
        if(this.props.status.isCheckmate)
            return "Check m8 (" + ((this.props.turn-1) % 2 === 1 ? "Blue" : "Red") + " team wins!)"
        if(this.props.status.isCheck)
            return "Check!"
        return (this.props.history.length % 2 === 0 ? "Blue" : "Red") + " team turn."
    }

    render() {
        return <div className="chess-game">
                <h4>The game is penguin chess</h4>
                <div>{this.printState()}</div>
                <Board 
                    squares={this.props.status.board.squares} 
                    selected={this.props.selected} 
                    threatenedSquares={this.props.threatenedSquares}
                    handleClick={this.props.handleClick} />
            </div>
    }
}

