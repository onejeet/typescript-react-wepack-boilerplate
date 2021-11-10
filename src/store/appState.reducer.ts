import { constants } from '../utilities/constants';

const defaultState = {
    isLoading: false
};

const appStateReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case constants.UPDATE_LOADING_STATUS:
            return {
                ...state,
                isLoading: action.payload
            };

        default:
            return state;
    }
};

export default appStateReducer;
