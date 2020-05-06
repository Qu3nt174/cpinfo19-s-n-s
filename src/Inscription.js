import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";


function Inscription() {
    

    const [name,setname] = useState("");
    const [surname,setsurname] = useState("");
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");
    const [pass2,setpass2] = useState("");

    var bCree = false;

    let history = useHistory();

    const auth = firebase.auth();
    const db = firebase.firestore();
    
   async function handleClick(e) {
        e.preventDefault();

        if ((pass != pass2) || (pass.length != pass2.length)) {
            alert('les mots de correspondent pas'); 
        }else if (pass.length < 6 || pass2.length < 6) {
            alert('Votre mot de passe doit contenir au moins 6 caractères minimum');
        }else{
            try {
                await auth.createUserWithEmailAndPassword(email, pass).then(cred =>{
                    console.log('OK!');
                });
            } catch (error) {
                console.log('BOOM', error);
                if (error.code == 'auth/invalid-email') {
                alert('Adresse email invalide, veuillez réessayer');
                }
            }
        }
    }
    
    return (
        // <button type="button" onClick={handleClick}>
        // Go home
        // </button>
        <div>
            <h3> Formulaire d'inscription</h3>
            <form className = "FormInscriptionForm" id= "inscription" onSubmit = {handleClick}>
                <input className = "FormInscriptioninput" type="text" placeholder="Nom" name="nom" value = {name} onChange= {(n) => setname(n.target.value)} required/>
                <input className = "FormInscriptioninput" type="text" placeholder="Prénom" name="Prénom" value = {surname} onChange= {(s) => setsurname(s.target.value)} required/>
                <input className = "FormInscriptioninput" type="email" placeholder="Adresse email" name="mail" value = {email} onChange= {(e) => setemail(e.target.value)} required/>
                <input className = "FormInscriptioninput" type="password" placeholder="Mot de passe" name="mdp1" value ={pass} onChange = {(p) => setpass(p.target.value)} required/>
                <input className = "FormInscriptioninput" type="password" placeholder="Confirmer mot de passe" name="mdp2" value ={pass2} onChange = {(p2) => setpass2(p2.target.value)}required/>
                <input className = "FormInscriptioninput" type="submit" name="valider" value="S'inscrire"/>
            </form>
        </div>

    )
}



export default Inscription;