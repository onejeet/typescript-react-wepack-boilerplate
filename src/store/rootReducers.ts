import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import appState from './appState.reducer';

export const history = createBrowserHistory();
history.listen((location, action) => {
    window.scrollTo({
        top: 0,
        left: 0,
        // @ts-ignore
        behavior: 'instant'
    });
});

const rootReducers = combineReducers({
    router: connectRouter(history),
    appState
});

export default rootReducers;
