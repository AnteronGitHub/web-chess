
import { connect } from 'react-redux';
import {clickSquare} from '../actions';
import Game from '../components/Game';

function getThreatenedSquares(client, selected) {
    return client.validMoves
                .filter(move => move.src.file+move.src.rank===selected)
                .map(move => move.squares)
}

const mapStateToProps = state => {
    return {
        status: state.client.getStatus(),
        selected: state.selectedSquare,
        threatenedSquares: getThreatenedSquares(state.client, state.selectedSquare),
        history: state.client.game.moveHistory
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
) (Game)
