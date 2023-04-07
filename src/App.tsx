import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { errorBooks, getBooks, loadingBook } from './store/books/books-actions';
import { selectBooksLoading } from './store/books/books-selector';
import { IBook } from './types/books';

function App() {
	const dispatch = useDispatch();
	const loading = useSelector(selectBooksLoading);

	useEffect(() => {
		dispatch(loadingBook);
		fetch('http://localhost:5000/books')
			.then(response => response.json())
			.then((data: IBook[]) => {
				dispatch(getBooks(data));
			})
			.catch(error => {
				dispatch(errorBooks(error.toString()));
			});
	}, []);

	return (
		<div className='App'>
			<Navbar />
			{loading ? (
				<h1 className="loading">
					Loading...
				</h1>
			) : (
				<>
					<AppRouter />
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
