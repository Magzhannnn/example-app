import { RootState } from './../rootReducer';

export const selectAllBooksInfo = (state: RootState) => state.books;

export const selectAllBooks = (state: RootState) => state.books.books;

export const selectBooksLoading = (state: RootState) => state.books.loading;

export const selectBooksError = (state: RootState) => state.books.error;
