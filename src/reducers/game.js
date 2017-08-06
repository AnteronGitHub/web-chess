
import Chess from 'chess'

function handleClick(state, square) {
    const selectedSquare = state.client.game.board.getSquare(square);
    const currentSide = state.client.game.getCurrentSide();

    if(state.selectedSquare===square)
        return {
            client: state.client,
            selectedSquare: null
        };
    if(selectedSquare.piece
            && selectedSquare.piece.side === currentSide)
        return {
            client: state.client,
            selectedSquare: square
        };
    try {
        state.client.move(state.selectedSquare, selectedSquare.file + selectedSquare.rank)
        return {
            client: state.client,
            selectedSquare: null
        }
    } catch (error) {
        if(!error.includes("Move is invalid"))
            throw error
    }

    return state;
}

const initialState = {
    client: Chess.createSimple(), 
    selectedSquare: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CLICK_SQUARE':
            return handleClick(state, action.square);
        default:
            return state;
    }
}
