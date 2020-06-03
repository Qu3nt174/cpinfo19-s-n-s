import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.png';
import Appart1_1 from './photo/Appart1_1.PNG';
import Appart1_2 from './photo/Appart1_2.PNG';
import Appart1_3 from './photo/Appart1_3.PNG';
import firebase from 'firebase';

import './App.css';
import { _bucketWithOptions } from 'firebase-functions/lib/providers/storage';


function Accueil({user}){


    console.log("hello", user);
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
           
                {
                    user === null?
                    ( 
                        <div style={{display:"flex"}}>
                            <Link to="/Connexion"><li id="test" style={{listStyle: 'none'}}>Connexion</li></Link>
                            <Link to="/Inscription"><li id="test" style={{listStyle: 'none'}}>Inscription</li></Link>
                        </div>    
                    )
                :
                (
                    <div style={{display:"flex"}}>
                        <button onClick={() => firebase.auth().signOut()} ><li id="Deconnexion" style={{listStyle: 'none'}}>Se déconnecter</li></button>
                        <Link to="/MyProfile"><li id="test" style={{listStyle: 'none'}}>Mon Profil</li></Link>
                    </div>
                )
                }
          
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
            <div id="Weeklypres">
                <ul style={{display:"flex"}}>
                    <li style={{listStyle:"none", marginRight:"10%"}}>
                        <img src={Appart1_1} id="header-logo"></img>
                    </li>
                    <li style={{listStyle:"none", marginRight:"10%"}}>
                        <img src={Appart1_2} id="header-logo"></img>
                    </li>
                    <li style={{listStyle:"none", marginRight:"10%"}}>
                        <img src={Appart1_3} id="header-logo"></img>
                    </li>
                </ul>
            </div>


        </section>

        <section id="slogan">
            <img src={logo} alt="logo" id="header-logo"></img>
            <h5>Rejoignez nous et commencez l'aventure</h5>
            <button id="join">Rejoignez-nous</button>

        </section>


    </body>
    </div>

    )
}

export default Accueil;