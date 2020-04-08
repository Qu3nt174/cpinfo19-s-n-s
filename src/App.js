import React from 'react';
import logo from './logo.png';
import './App.css';
import Accueil from './Accueil';
import Carte from './Carte';
import Logement from './Logement';
import Contact from './Contact';
import Navigation from './Navigation';
import Search from './Search';
import {BrowserRouter as Router, Route} from 'react-router-dom'




function App() {

  return (    
    

    <div className="App">
      <header className="App-header">        
          <nav>
            <h1>S&S</h1>
            <Router> 
            <Navigation/>
      <Route path="/" exact component={Accueil}/>
      <Route path="/Carte" exact component={Carte}/>
      <Route path="/Logement" exact component={Logement}/>
      <Route path="/Search" exact component={Search}/>
      <Route path="/Contact" exact component={Contact}/>
    </Router>
          </nav>       
      </header>

      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          L'appli de l'hébergement étudiant!
        </p>

      </body>
      <footer className="App-footer">#FreeJean-Chorrizo</footer>

    </div>
  );
}

export default App;
