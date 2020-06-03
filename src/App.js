import React, { useEffect, useState } from 'react'
import logo from './logo.png';
import './App.css';
import Accueil from './Accueil';
import Annonce from './Annonce';
import Logement from './Logement';
import Contact from './Contact';
import Navigation from './Navigation';
import Aide from './Aide';
import Connexion from './Connexion';
import Inscription from './Inscription';
import CreerAnnonce from './CreerAnnonce';
import {Link} from 'react-router-dom';

import {BrowserRouter as Router, Route} from 'react-router-dom'

const firebase = require("firebase");
// Required for side-effects
    require("firebase/firestore");

    firebase.initializeApp({
      apiKey: 'AIzaSyBggSxraSXC0zUGPIa96BhPu8x-ZvpeBRU',
      authDomain: 'eur3',
      messagingSenderId: "553966352030",
      projectId: 'cpinfo-s-n-s'
    });
    


function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
      return firebase.auth().onAuthStateChanged((newUser) => {
          console.log(newUser);
          if (newUser === null) {
              setUser(null);
              return;
          };
          setUser({uid: newUser.uid, email: newUser.email})
      })
  }, []);

  return (    
    <div className="App">
      <header className="App-header">        
          
            <div>
              <ul style={{display:"flex", float: "right", marginRight:"3%"}}>
                <li style={{listStyle:"none", marginRight:"10%"}}><a style={{color:"#23a2a4"}} href="http://localhost:3000/Inscription">Inscription</a></li> 
                /
                <li style={{listStyle:"none", marginLeft:"2%"}}><a style={{color:"#23a2a4"}} href="http://localhost:3000/Connexion">Connexion</a></li>
              </ul>
            </div>          
            <img src={logo} alt="logo" id="header-logo"></img>
            <nav>  
            <div id="menu">
              <Router> 
                <Navigation/>
                <Route path="/" exact render ={() => <Accueil user= {user}/>} />
                <Route path="/Logement" exact component={Logement}/>
                <Route path="/Annonce" exact component={Annonce}/>                
                <Route path="/Aide" exact component={Aide}/>
                <Route path="/Contact" exact component={Contact}/>
                <Route path="/Connexion" exact component={Connexion}/>
                <Route path="/Inscription" exact component={Inscription}/>
                <Route path="/CreerAnnonce" exact component={CreerAnnonce}/>
              </Router>
            </div>
          </nav> 
      </header>
      

      
      <footer className="App-footer">#FreeJean-Chorrizo</footer>

    </div>
  );
}

export default App;
