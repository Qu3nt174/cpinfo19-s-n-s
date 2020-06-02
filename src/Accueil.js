import React from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.png';
import Appart1_1 from './photo/Appart1_1.PNG';
import Appart1_2 from './photo/Appart1_2.PNG';
import Appart1_3 from './photo/Appart1_3.PNG';
import Appart2_1 from './photo/Appart2_1.PNG';
import Appart2_2 from './photo/Appart2_2.PNG';
import Appart2_3 from './photo/Appart2_3.PNG';
import Appart2_4 from './photo/Appart2_4.PNG';

import './App.css';
import { _bucketWithOptions } from 'firebase-functions/lib/providers/storage';


function Accueil(){


    return(
        
     <div className="App">
     <section className="App-body" id="Sec1">         
         <h1 id="oui">
            Sleep &
            <br></br>
            Study
        </h1>
            <h5>Bienvenue Chez Vous</h5>
            <br></br>
            <div style={{display:"flex"}}>
                <Link to="/Connexion"><li id="test" style={{listStyle: 'none'}}>Connexion</li></Link>
                <Link to="/Inscription"><li id="test" style={{listStyle: 'none'}}>Inscription</li></Link>
            </div>
              
     </section>

      <body className="App-body">

        <h1 id="historique">Notre Histoire</h1>
        <br></br>
        <ul id="Ul-presentation" style={{display:'flex'}}>
            <li className="presentation" id="presentation1" style={{marginLeft: 10, listStyle: 'none'}}>
                Sleep & Study est une startup qui met en relation des hôtes et des étudiants à
                la recherche d’un logement temporaire dans le cadre de leurs études depuis
                2019. 
                <br></br>
                <br></br>
                Sleep & Study a été créée en 2019 par un groupe d’étudiants ayant eux-même connu les désagréments de la recherche de logement temporaire dans
                le cadre de leurs études en alternance
            </li>
            <li className="presentation" id="presentation2" style={{marginRight: 10, listStyle: 'none'}}>
            Notre objectif est de proposer aux étudiants une plateforme web de recherche
            et locations d’habitations pour trouver facilement une habitation suivant les
            critères recherchés par l’étudiant.
            <br></br>
            <br></br>
            Ainsi nous comptons sur la qualité de nos services ainsi que notre capacité à
            nous adapter aux besoins des étudiants pour que l’image de marque de notre
            entreprise se démarque face à la concurrence.
            </li>
        </ul>
        
        
        <section id="WeeklySec">
            <h1 style={{textDecoration:"underline"}}>Les logements de la semaine</h1>
            <ul style={{display:'flex'}}>
            <div id="slider" style={{marginRight: 35}}>
                <figure>
                    
                        <img src={Appart1_1} id="img_renseignement2"></img>
                    
             
                        <img src={Appart1_2} id="img_renseignement2"></img>
                    
                    
                        <img src={Appart1_3} id="img_renseignement2" ></img>
                </figure>                
               
            </div>

            <div id="slider" style={{marginTop: 0}}>
            <figure>
  
                    
                    <img src={Appart2_1} id="img_renseignement2"></img>                
         
                    <img src={Appart2_2} id="img_renseignement2"></img>                
                
                    <img src={Appart2_3} id="img_renseignement2" ></img>

                    <img src={Appart2_4} id="img_renseignement2" ></img>
            </figure>
            </div>
            </ul>


        </section>

        <section id="slogan">
            <img src={logo} alt="logo" id="header-logo" style={{marginLeft: -40}}></img>
            <h5>Rejoignez nous et commencez l'aventure</h5>
            <button id="join">Rejoignez-nous</button>

        </section>


    </body>
    </div>

    )
}

export default Accueil;