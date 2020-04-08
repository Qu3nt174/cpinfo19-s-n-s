import React from 'react';
import logo from './logo.png';
import './App.css';
import Accueil from './Accueil';
import Carte from './Carte';
import Logement from './Logement';
import Contact from './Contact';
import Navigation from './Navigation';
import Search from './Search';
import Connexion from './Connexion';
import Inscription from './Inscription';

import {BrowserRouter as Router, Route} from 'react-router-dom'

const firebase = require("firebase");
// Required for side-effects
    require("firebase/firestore");

    firebase.initializeApp({
    apiKey: 'AIzaSyBggSxraSXC0zUGPIa96BhPu8x-ZvpeBRU',
    authDomain: 'eur3',
    projectId: 'cpinfo-s-n-s'
    });
    


function App() {

  return (    


    <div className="App">
      <header className="App-header">        
          <nav>            
            <img src={logo} alt="logo" id="header-logo"></img>
            <div id="menu">
            <Router> 
              <Navigation/>
              <Route path="/" exact component={Accueil}/>
              <Route path="/Carte" exact component={Carte}/>
              <Route path="/Logement" exact component={Logement}/>
              <Route path="/Search" exact component={Search}/>
              <Route path="/Contact" exact component={Contact}/>
              <Route path="/Connexion" exact component={Connexion}/>
              <Route path="/Inscription" exact component={Inscription}/>
              
          </Router>
          </div>
          </nav>
          
      </header>
      

      
      <footer className="App-footer">#FreeJean-Chorrizo</footer>

    </div>
  );
}

export default App;
