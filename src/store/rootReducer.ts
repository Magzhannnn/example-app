import { modalReducer } from './modal/modal-reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
