import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import game from './reducers/game';
import VisibleBoard from './containers/VisibleBoard';

let store = createStore(game)

ReactDOM.render(
    <Provider store={store}>
        <VisibleBoard />
    </Provider>, 
    document.getElementById('root')
);
