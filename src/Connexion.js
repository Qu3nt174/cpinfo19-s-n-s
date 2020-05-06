import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";

function Connexion(){
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");


    const auth = firebase.auth();
    const db = firebase.firestore();


    async function handleClick(e) {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, pass).then(cred=>{
                console.log(cred.user);
            });
            console.log('OK!');
        } catch (error) {
            console.log('BOOM', error);
            if (error.code == 'auth/invalid-email') {
            alert('Adresse email invalide, veuillez réessayer');
            }
        }
    }

    return(
        <div style={{marginTop:"12%", marginBottom:"10%"}}>
          <h3> Se connecter</h3>
            <form className = "FormInscriptionForm" id= "Connexion" onSubmit = {handleClick}>
                <input className = "FormInscriptioninput" type="email" placeholder="Adresse email" name="mail" value = {email} onChange= {(e) => setemail(e.target.value)} required/>
                <input className = "FormInscriptioninput" type="password" placeholder="Mot de passe" name="mdp1" value ={pass} onChange = {(p) => setpass(p.target.value)} required/>
            
                <input className = "FormInscriptioninput" type="submit" name="valider" value="Se connecter"/>
            </form>
        </div>
    )
}

export default Connexion;