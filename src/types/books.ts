export interface IBook {
	id: number;
	image: string;
	name: string;
	year: number;
	page: number;
	price: number;
	count: number;
	genre: string;
	author: string;
	description: string;
	category: string;
}

export enum BooksActionTypes {
	GET_BOOKS = 'GET_BOOKS',
	ADD_BOOK = 'ADD_BOOK',
	DELETE_BOOK = 'DELETE_BOOK',
	LOADING_BOOK = 'LOADING_BOOK',
	ERROR_BOOKS = 'ERROR_BOOKS',
}

interface loadingBook {
	type: BooksActionTypes.LOADING_BOOK;
}

interface errorBooks {
	type: BooksActionTypes.ERROR_BOOKS;
	payload: string;
}

interface getBooks {
	type: BooksActionTypes.GET_BOOKS;
	payload: IBook[];
}

interface addBook {
	type: BooksActionTypes.ADD_BOOK;
	payload: IBook;
}

interface deleteBook {
	type: BooksActionTypes.DELETE_BOOK;
	payload: number;
}

export type BooksActions =
	| getBooks
	| addBook
	| deleteBook
	| loadingBook
	| errorBooks;
