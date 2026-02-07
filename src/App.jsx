import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Catalog from './Pages/Catalog';

function App() {
    return (
        <div>
            <NavBar />
            <Catalog></Catalog>
            <Footer />
        </div>
    )
}

export default App
