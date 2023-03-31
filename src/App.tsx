import AppRouter from './components/AppRouter'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
