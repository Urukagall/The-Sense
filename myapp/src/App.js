import './App.css';
import Home from './Pages/Home.js';
import './img/SENSE.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer.js';
import Signup from './Pages/Signup';
import Carousel from './Components/testcarousel.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Home /> 
        </Route>
        <Route exact path="/Signup"> 
          <Signup /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
