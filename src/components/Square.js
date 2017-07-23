
import React, { Component } from 'react';
import '../styles/square.css';

export default class Square extends Component {
    isWhite() {
        const col = 'abcdefgh'.indexOf(this.props.file) + 1
        const row = this.props.rank
        return row % 2 === 1 ? col%2===0 : col%2===1
    }

    render() {
        return (
            <div className={"square " + ((this.isWhite() ? "white" : "black"))}>
                {this.props.piece ? this.props.piece.side.name.charAt(0).toUpperCase() + this.props.piece.type : ""}
            </div>
        );
    }
}
