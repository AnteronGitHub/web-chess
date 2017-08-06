
import Chess from 'chess'

export default (state = {client: Chess.createSimple(), selectedSquare: null}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
