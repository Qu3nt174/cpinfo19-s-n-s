import React from 'react'
import logo from './logo.png';
import './App.css';


function Accueil(){


    return(
         <div className="App">
      <header className="App-header">        
          <nav>
            
            
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
    )
}

export default Accueil;