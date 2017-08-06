
import { connect } from 'react-redux';
import {clickSquare} from '../actions';
import Board from '../components/Board';

/**
    <Board 
    squares={this.state.gameClient.getStatus().board.squares} 
    selected={this.state.selectedSquare} 
    threatenedSquares={this.getThreatenedSquares()}
    handleClick={square => this.handleClick(square)} />
 */

function getThreatenedSquares(client, selected) {
    return client.validMoves
                .filter(move => move.src.file+move.src.rank===selected)
                .map(move => move.squares)
}

const mapStateToProps = state => {
    return {
        squares: state.client.getStatus().board.squares,
        selected: state.selectedSquare,
        threatenedSquares: getThreatenedSquares(state.client, state.selectedSquare)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: square => {
            dispatch(clickSquare(square))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Board)
