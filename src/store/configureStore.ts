import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './rootReducers';
import { routerMiddleware } from 'connected-react-router';
import { history } from './rootReducers';

export default function configureStore() {
    let composeEnhancers = compose;
    let enhancers = [applyMiddleware(thunk, routerMiddleware(history))];
    return createStore(rootReducers, composeEnhancers(...enhancers));
}
