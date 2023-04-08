import { IBook } from './books';

export interface IUser {
	id: number;
	age: number;
	name: string;
	email: string;
	password: string;
	books: IBook[];
	role: string;
	isBlock: boolean;
}
