import { IBook, BooksActionTypes } from './../../types/books';

export const getBooks = (books: IBook[]) => ({
	type: BooksActionTypes.GET_BOOKS,
	payload: books,
});

export const addBooks = (book: IBook) => ({
	type: BooksActionTypes.ADD_BOOK,
	payload: book,
});

export const deleteBooks = (bookId: number) => ({
	type: BooksActionTypes.DELETE_BOOK,
	payload: bookId,
});

export const loadingBook = {
	type: BooksActionTypes.LOADING_BOOK,
};

export const errorBooks = (error: string) => ({
	type: BooksActionTypes.ERROR_BOOKS,
	payload: error,
});
