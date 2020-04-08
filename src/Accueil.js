import React from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './App.css';


function Accueil(){


    return(
         <div className="App">
     

      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          L'appli de l'hébergement étudiant!
        </p>

        <Link to="/Connexion"><button>Connexion</button></Link>
        <Link to="/Inscription"><button>Inscription</button></Link>
      </body>
    

    </div>
    )
}

export default Accueil;