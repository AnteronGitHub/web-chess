
import React from 'react';
import Square from './Square'
import '../styles/board.css'

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8];

function getPiece(squares, f, r) {
    return squares[ranks.indexOf(r)* 8 + files.indexOf(f)].piece;
}

export default function Board(props) {
    return (
        <table className="chess-board">
        <tbody>
            {ranks.slice().reverse().map(r => 
                <tr key={"tr" + r.toString()}>
                    {files.map(f => 
                    <td key={"td"+f+r.toString()} onClick={() => props.handleClick(f+r)}>
                        <Square key={f+r.toString()} 
                            file={f} 
                            rank={r} 
                            piece={getPiece(props.squares, f, r)} 
                            selected={props.selected && props.selected.startsWith(f+r)}
                            threatened={typeof props.threatenedSquares[0] !== "undefined" ? props.threatenedSquares[0].filter(square => square.file===f && square.rank === r).length : false} />
                    </td>)}
                </tr>)}
        </tbody>
        </table>
    );
}
