import About from './pages/About';
import Auth from './pages/Auth';
import Home from './pages/Home'
import { ABOUT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, HOME_ROUTE } from './utils/consts';
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
];

export const privateRouter: IRouter[] = [
	{
		path: HOME_ROUTE,
		Component: Home,
	},
];
