import { IBook, BooksActions, BooksActionTypes } from './../../types/books';

export interface InitialStateProps {
	loading: boolean;
	error: string;
	books: IBook[];
}

const initialState: InitialStateProps = {
	loading: false,
	error: '',
	books: [],
};

export const booksReducer = (
	state = initialState,
	action: BooksActions
): InitialStateProps => {
	switch (action.type) {
		case BooksActionTypes.LOADING_BOOK:
			return { ...state, loading: true };
		case BooksActionTypes.ERROR_BOOKS:
			return { ...state, error: action.payload };
		case BooksActionTypes.GET_BOOKS:
			return { ...state, books: action.payload, loading: false, error: '' };
		case BooksActionTypes.ADD_BOOK:
			return { ...state, books: [...state.books, action.payload] };
		case BooksActionTypes.DELETE_BOOK:
			return {
				...state,
				books: state.books.filter(book => book.id !== action.payload),
			};
		default:
			return state;
	}
};
