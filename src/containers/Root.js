import React, { Component } from 'react';
import Board from '../components/Board';
import Chess from 'chess'

class Root extends Component {
  render() {
    return (
      <Board status={Chess.createSimple().getStatus().board.squares} />
    );
  }
}

export default Root;
