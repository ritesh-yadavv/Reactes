import './App.css';
import Home from "./Home";
import Profile from "./Profile";
import Classes from "./Classes";
import FunState from "./FormSubmit";
import State from "./State";
import UseEffect from "./UseEffect";
import ClickEvent from "./ClickEvent";
import FormSubmit from "./FormSubmit";
import Validation from "./Validation";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Forms from './Forms';
import Home1 from './Home1';

function App() {
  return (
    <div>


           {/* Routing */}

      {/* <Router> */}
       <About />
       <Forms />
       <Home1 />
       {/* <Link to="">Home1</Link>
       <Link to="">About</Link>
       <Link to="">Forms</Link>

       <Route path="" Component={Home1} />
       <Route path="About" Component={About} />
       <Route path="Forms" Component={Forms} />
      </Router> */}
    </div>
  );
}

export default App;
