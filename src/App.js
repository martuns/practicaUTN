import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


import Navbar from './Components/layout/Navbar'
import Home from './Components/Pages/Home'
import Personajes from './Components/Pages/Personajes'
import Personaje from './Components/Pages/Personaje'
function App() {
  return (
    <Router>
      <Navbar/>
      
      
      <Route path="/" exact component={Home} />
       <Route path="/personajes" exact component={Personajes} />
       <Route path="/personajes/:id" component={Personaje} />
    </Router>
  );
}

export default App;
