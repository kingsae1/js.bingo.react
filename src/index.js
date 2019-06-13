import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootStore from './stores';
import * as serviceWorker from './utils/serviceWorker';

import Bingo from './containers/BingoContainer';
import './styles/index.css'

const rootStore = new RootStore();

ReactDOM.render(
    <Provider
        rootStore={new RootStore()}
        storeCell={rootStore.storeCell}
        storeScore={rootStore.storeScore}
        storeState={rootStore.storeState}
    >
        <Bingo />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
