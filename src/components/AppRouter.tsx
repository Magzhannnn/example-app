import { Navigate, Route, Routes } from 'react-router-dom';
import { IRouter, privateRouter, publicRouter } from '../router';
import { ABOUT_ROUTE } from '../utils/consts'

const AppRouter = () => {
	return (
		<Routes>
			{publicRouter.map(({ path, Component }: IRouter) => (
				<Route path={path} element={<Component />} key={path} />
			))}
			{privateRouter.map(({ path, Component }: IRouter) => (
				<Route path={path} element={<Component />} key={path} />
			))}
			<Route path="/*" element={<Navigate to={ABOUT_ROUTE} />} />
		</Routes>
	);
};
export default AppRouter;
