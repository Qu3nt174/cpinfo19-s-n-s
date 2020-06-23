import React from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.png';
import Appart1_1 from './photo/Appart1_1.PNG';
import Appart1_2 from './photo/Appart1_2.PNG';
import Appart1_3 from './photo/Appart1_3.PNG';
import CreerAnnonce from './CreerAnnonce';

import './App.css';
import { _bucketWithOptions } from 'firebase-functions/lib/providers/storage';

function Annonce({user}){
    return(
        <div className="App-body">
            {
                user === null?
                (
                    <div>
                        Désolé, mais vous n'avez pas accès à cette page. Veuillez vous <Link to="/Connexion" className = "LienConnecter" style={{color: 'blue', fontSize: '1em'}}>connecter.</Link>
                    </div>
                )
            :
                (
                    <div>
                        Oui
                    </div>
                )

            }


        </div>

    )
        
}

export default Annonce;


// {/* <div className="App">
            
//             <section className="App-body">  
//                 <h1 id="oui">
//                     Vos Annonces:
//                     <br></br>
//                 </h1>
//                 {
//                     user === null?
//                     ( 
//                         <div style={{display:"flex"}}>
//                             <p style={{fontSize: '1em'}}>
//                                 Désolé, vous ne pouvez pas accéder à cette page si vous n'êtes pas identifié.
//                                 Veuillez vous <Link to="/Connexion" style={{color: 'black', fontSize: '1em!important'}}>connecter</Link>
//                             </p> 
//                         </div>    
//                     )
//                 :
//                 (
//                     <Link to ="./CreerAnnonce">
//                         <button>
//                             Bonjour
//                         </button>
//                      </Link>
//                 )
//                 } 
//             </section>
    
//             <div className="App-body">
    
            
    
    
//         </div>
//        </div>) */}


