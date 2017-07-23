
import React, { Component } from 'react';
import Square from './Square'

export default class Board extends Component {
    files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    ranks = [1, 2, 3, 4, 5, 6, 7, 8];

    getPiece(f, r) {
        return this.props.status[this.ranks.indexOf(r)* 8 + this.files.indexOf(f)].piece;
    }

    render() {
        var i = 0;  // key index
        return (
            <table className="chess-board">
            <tbody>
                {this.ranks.slice().reverse().map(r => 
                    <tr key={"row" + r.toString()}>
                        {this.files.map(f => 
                        <td key={f+r.toString()} onClick={() => this.props.handleClick(f+r)}>
                            <Square key={i++} file={f} rank={r} piece={this.getPiece(f, r)} />
                        </td>)}
                    </tr>)}
            </tbody>
            </table>
        );
    }
}
