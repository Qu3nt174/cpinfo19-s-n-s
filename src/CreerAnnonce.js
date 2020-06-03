import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";


function CreerAnnonce(){
    
    async function bjr(){
        alert('hello');
    };


    return(
        <div className="App">
            <section className="App-body">
                 <button className ="creerAnnonce" onClick= {bjr}>Valider</button>
            </section>
        </div>



    )
}

export default CreerAnnonce;