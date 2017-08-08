import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import game from './reducers/game';
import GameContainer from './containers/GameContainer';

let store = createStore(game)

ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>, 
    document.getElementById('root')
);
