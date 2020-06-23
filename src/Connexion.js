import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";
import Mail from './icons/mail.png';
import Sad from './icons/sad.png';
import Happy from './icons/happy.png';
import Swal from 'sweetalert2';

function Connexion(){
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");


    const auth = firebase.auth();
    const db = firebase.firestore();

    let history = useHistory();


    
    async function handleClick(e) {
        e.preventDefault();

        
        try {
            await auth.signInWithEmailAndPassword(email, pass).then(cred=>{
                console.log(cred.user);
            });
            Swal.fire({
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                title: 'Connexion réussie !',
                text: "Redirection en cours...",
                showCloseButton : false,
                showConfirmButton : false,
                allowOutsideClick: false
            }).then(function(){
                history.push("./")
                console.log('OK!')
            })
            
        } catch (error) {
            console.log('BOOM', error);
            if (error.code === 'auth/invalid-email') {
                alert('Adresse email invalide, veuillez réessayer')
            }
            else if (error.code === 'auth/wrong-password'){
                alert('Le mot de passe associé à ce compte est incorrect. Veuillez réessayer.')
            }
        }
    }

    async function MDPFORGET(e){

        e.preventDefault();

        const email = await Swal.fire({
            imageUrl: Mail,
            imageWidth: 128,
            imageHeight: 128,
            cancelButtonText: "Annuler",
            confirmButtonText: "Envoyer",
            title: 'Mot de passe oublié!',
            text:'Veuillez renseigner votre adrese email:',
            input: 'text',
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return 'Vous devez écrire votre adresse mail'
              }
            }
        })
          
        if (email.value) {
            try {
               await auth.sendPasswordResetEmail(email.value).then(function(){
                    Swal.fire({icon: 'success', text:`Un email de demande de changement de mot de passe a été envoyé à ${email.value}`})
                })
            } catch (error){
                if (error.code === 'auth/user-not-found'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Aucun utilisateur possédant cette adresse email n'a été trouvé"
                    }).then(function(){
                        MDPFORGET(e)
                    })
                }
                else if (error.code === 'auth/invalid-email'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Adresse email invalide, veuillez réessayer."
                    }).then(function(){
                        MDPFORGET(e)
                    })
                }
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
        <button style={{display: "block", margin: "auto"}} id= "Deconnexion" onClick={MDPFORGET}>Mot de passe oublié?</button>
        </div>
    )
}

export function Deconnexion(){

    Swal.fire({
        imageUrl: Sad,
        imageWidth: 64,
        imageHeight: 64,
        title: "Vous partez déjà? :(",
        cancelButtonText: "Annuler",
        confirmButtonText: "Oui !",
        confirmButtonColor: "#FF0000",
        cancelButtonColor : "#0000FF",
        showCancelButton: true,
    }).then(function(result){
        if (result.value){
            Swal.fire({
                imageUrl: Happy,
                imageWidth: 64,
                imageHeight: 64,
                title: "À bientôt ! ",
                showCloseButton : false,
                showConfirmButton : false,
                allowOutsideClick: false,
                timer: 1000
            }).then(function(){
                firebase.auth().signOut()
                document.location.reload()
            })
            
        }
        
        

    })
    
    
}

export default Connexion;