import { actionConstants } from '../utilities/actionConstants';

const defaultState = {
    isLoading: false,
    themeMode: 'dark',
    isAuthenticated: false,
    subCategoryData: {},
    caseStudies: {},
    reports: {}
};

const appStateReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case actionConstants.UPDATE_AUTHENTICATION:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: action.payload
            };
        case actionConstants.UPDATE_THEME_MODE:
            let newThemeMode;
            if (action.payload && action.payload.length > 0) {
                newThemeMode = action.payload;
            } else {
                newThemeMode = state.themeMode === 'light' ? 'dark' : 'light';
            }
            window.localStorage.setItem('themeMode', newThemeMode);
            return {
                ...state,
                isLoading: false,
                themeMode: newThemeMode
            };
        case actionConstants.FETCH_SUB_CATEGORY_DATA:
            return {
                ...state,
                subCategoryData: {
                    ...state.subCategoryData,
                    [action.payload.id]: action.payload.data
                }
            };
        case actionConstants.FETCH_CASE_STUDIES:
            return {
                ...state,
                caseStudies: {
                    ...state.caseStudies,
                    [action.payload.id]: action.payload.data
                }
            };
        case actionConstants.FETCH_CUSTOM_REPORT:
            return {
                ...state,
                reports: {
                    ...state.reports,
                    [action.payload.id]: action.payload.data
                }
            };
        default:
            return state;
    }
};

export default appStateReducer;
