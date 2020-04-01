import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game/index'
import { Provider } from 'react-redux'
import store from './redux/store'

const Root = (
    <Provider store={store}>
        <Game />
    </Provider>
) 

ReactDOM.render(Root, document.getElementById('root'));

