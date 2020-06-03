import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';


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
                });
                Swal.fire({
                    icon: "success",
                    title: "Inscription effectuée",
                    text: "Vous vous êtes maintenant inscrit !",
                    type: "success",
                    timer: 1000
                    }).then(() => {
                       history.push('./');
                    });
            } catch (error) {
                console.log('BOOM', error);
                if (error.code == 'auth/invalid-email') {
                    alert('Adresse email invalide, veuillez réessayer');
                }
                else if(error.code == 'auth/email-already-in-use'){
                    Swal.fire({
                        title: 'Erreur!',
                        text: "Un compte lié à l'adresse renseignée existe déjà. Veuillez vous connecter.",
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                }
            }
        }
    }
    
    return (
        // <button type="button" onClick={handleClick}>
        // Go home
        // </button>
        <div style={{marginTop:"10%", marginBottom:"9.5%"}}>
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