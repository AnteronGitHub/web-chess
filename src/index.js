import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import game from './reducers/game';
import Root from './containers/Root';

let store = createStore(game)

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, 
    document.getElementById('root')
);
