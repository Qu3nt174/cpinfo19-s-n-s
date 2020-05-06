import React from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.png';
import Appart1_1 from './photo/Appart1_1.PNG';
import Appart1_2 from './photo/Appart1_2.PNG';
import Appart1_3 from './photo/Appart1_3.PNG';

import './App.css';
import { _bucketWithOptions } from 'firebase-functions/lib/providers/storage';


function Logement(){


    return(
        <div className="App">
        <section className="App-body" id="Sec1">         
            <h1 id="oui">
               Les logements
               <br></br>
               disponible
           </h1>
               
               
                 
        </section>
   
         <body className="App-body">
   
           
   
       </body>
       </div>
    )
}

export default Logement;