import React from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './App.css';


function Accueil(){


    return(
        
     <div className="App">
     <section className="App-body" id="Sec1">         
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
         <h1 id="oui">
            Sleep &
            <br></br>
            Study
            <h5>Bienvenue Chez Vous</h5>
         </h1>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
     </section>

      <body className="App-body">
        <h1 id="historique">Notre Histoire</h1>
        <br></br>
    
        <ul style={{display:'flex'}}>
            <li style={{marginLeft: 100, listStyle: 'none'}}>test</li>
            <li style={{marginRight: 100, listStyle: 'none'}}>test</li>
        </ul>
    
    
    
            {/* <section style={{display:"inline-block"}}>
        Sleep & Study est une startup qui met en relation des hôtes et des étudiants à
la recherche d’un logement temporaire dans le cadre de leurs études depuis
2019.
Sleep & Study a été créée en 2019 par un groupe d’étudiants ayant eux- même connu les désagréments de la recherche de logement temporaire dans
le cadre de leurs études en alternance
            </section>
            
            <section style={{display:"inline-block"}}>
            Sleep & Study a été créée en 2019 par un groupe d’étudiants ayant eux- même connu les désagréments de la recherche de logement temporaire dans
le cadre de leurs études en alternance.
            </section> */}

      </body>
      {/* <section className="App-body">
      <Link to="/Connexion"><button>Connexion</button></Link>
      <Link to="/Inscription"><button>Inscription</button></Link>
      </section> */}
    
    </div>

    )
}

export default Accueil;