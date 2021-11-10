import { constants } from '../utilities/constants';

export function updateLoadingStatus(bool: boolean) {
    return {
        type: constants.UPDATE_LOADING_STATUS,
        payload: bool
    };
}
