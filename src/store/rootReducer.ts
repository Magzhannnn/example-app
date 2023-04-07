import { booksReducer } from './books/books-reducer';
import { modalReducer } from './modal/modal-reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	modal: modalReducer,
	books: booksReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;
