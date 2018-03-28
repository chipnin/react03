import * as types from '../constants/action-types';

export const changeUsername = (name) => ({
	type: types.CHANGE_USERNAME,
	payload: name,
});