
import React, { Component } from 'react';
import Square from './Square'

export default class Board extends Component {
    getPiece(f, r) {
        var files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        var ranks = [1, 2, 3, 4, 5, 6, 7, 8];
        return this.props.status[ranks.indexOf(r)* 8 + files.indexOf(f)].piece;
    }

    render() {
        var files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        var ranks = [1, 2, 3, 4, 5, 6, 7, 8];
        var i = 0;  // key index
        return (
            <table className="chess-board">
            <tbody>
                {ranks.reverse().map(r => <tr key={"row" + r.toString()}>{files.map(f => <td key={f+r.toString()} onClick={() => this.props.handleClick(f+r)}><Square key={i++} file={f} rank={r} piece={this.getPiece(f, r)} /></td>)}</tr>)}
            </tbody>
            </table>
        );
    }
}
