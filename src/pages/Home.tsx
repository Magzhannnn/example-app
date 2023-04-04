import HomeBody from '../components/Home/HomeBody'
import HomeTitle from '../components/Home/HomeTitle';
import Container from '../UI/Container/Container';
import Header from '../UI/Header/Header';

const Home = () => {
	return (
		<Container>
			<HomeTitle />
			<HomeBody />
		</Container>
	);
};

export default Home;
