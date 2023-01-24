import logo from './img/Logo.svg'; 
import './App.css';
import Home from './Components/Home.js';
import './img/SENSE.svg';
import Barnav from './Components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="img_acc App">
      <Barnav />
      <h1> The Sense </h1>
      <Home />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
