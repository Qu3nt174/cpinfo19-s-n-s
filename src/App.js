import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.png';
import './App.css';
import Accueil from './Accueil';
import Annonce from './Annonce';
import Logement from './Logement';
import Contact from './Contact';
import Navigation from './Navigation';
import Aide from './Aide';
import Connexion,{Deconnexion} from './Connexion';
import Inscription from './Inscription';
import CreerAnnonce from './CreerAnnonce';


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
      
      <Router>
        <header className="App-header">        
      
              <div>
                <ul style={{display:"flex", float: "right", marginRight:"3%"}}>
                {
                      user === null?
                      ( 
                          <div style={{display:"flex"}}>
                              <Link to="/Connexion" className = "navLink"><li className={"LienConnecter"} style={{listStyle: 'none', color: 'black'}}>Connexion</li></Link>
                              <Link to="/Inscription" className = "navLink"><li className={"LienConnecter"} style={{listStyle: 'none', color: 'black'}}>Inscription</li></Link>
                          </div>    
                      )
                  :
                  (
                      // <li id="test" style={{listStyle: 'none'}}></li>
                      <div style={{display:"flex"}}>
                          <button id="Deconnexion" className = {"navButton", "LienConnecter"} style={{color : 'black'}} onClick={Deconnexion} >Se déconnecter</button>
                      
                          <Link to="/MyProfile" className = "navLink"><li className={"LienConnecter"} style={{listStyle: 'none', color: 'black'}}>Mon Profil</li></Link>
                        
                      </div>
                  )
                  }
                
                
                  {/* <li style={{listStyle:"none", marginRight:"10%"}}><a style={{color:"#23a2a4"}} href="http://localhost:3000/Inscription">Inscription</a></li> 
                  /
                  <li style={{listStyle:"none", marginLeft:"2%"}}><a style={{color:"#23a2a4"}} href="http://localhost:3000/Connexion">Connexion</a></li> */}
                </ul>
              </div>          
              <img src={logo} alt="logo" id="header-logo"></img>
              <nav>  
              <div id="menu">
                  <Navigation/>
                  <Route path="/" exact render ={() => <Accueil user= {user}/>} />
                  <Route path="/Logement" exact component={Logement}/>
                  <Route path="/Annonce" exact render ={() => <Annonce user= {user}/> }/>               
                  <Route path="/Aide" exact component={Aide}/>
                  <Route path="/Contact" exact component={Contact}/>
                  <Route path="/Connexion" exact component={Connexion}/>
                  <Route path="/Inscription" exact component={Inscription}/>
                  <Route path="/CreerAnnonce" exact component={CreerAnnonce}/>
              </div>
            </nav> 
        </header>
      </Router>

      
      <footer className="App-footer" style={{backgroundColor:"#23a2a4"}}>
        &copy;2020 S&S-Prod
        <div style={{marginTop:"2%"}}>
          Suivez nous sur les différentes applications
          
        </div>
      </footer>

    </div>
  );
}

export default App;
