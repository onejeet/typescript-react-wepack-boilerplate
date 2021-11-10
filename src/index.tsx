import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/rootReducers';
import App from './App';
import './sass/main.scss';

//configure store
const store = configureStore();

const rootElement: HTMLElement = document.getElementById('root')!;
if (rootElement.hasChildNodes()) {
    hydrate(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        rootElement
    );
} else {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        rootElement
    );
}
