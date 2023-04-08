import BookItemSelect from './components/Books/BookItemSelect';
import About from './pages/About';
import Auth from './pages/Auth';
import Books from './pages/Books';
import Home from './pages/Home';
import {
	ABOUT_ROUTE,
	LOGIN_ROUTE,
	REGISTER_ROUTE,
	HOME_ROUTE,
	BOOKS_ROUTE,
	BOOK_ROUTE,
} from './utils/consts';
export interface IRouter {
	path: string;
	Component: () => React.ReactElement;
}

export const publicRouter: IRouter[] = [
	{
		path: ABOUT_ROUTE,
		Component: About,
	},
	{
		path: LOGIN_ROUTE,
		Component: Auth,
	},
	{
		path: REGISTER_ROUTE,
		Component: Auth,
	},
	{
		path: BOOK_ROUTE,
		Component: BookItemSelect,
	},
];

export const privateRouter: IRouter[] = [
	{
		path: HOME_ROUTE,
		Component: Home,
	},
	{
		path: BOOKS_ROUTE,
		Component: Books,
	},
];
