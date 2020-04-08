import React, { useEffect, useState } from 'react';
import firebase from 'firebase';


function Inscription(){

    const [email,setemail] = useState("");
    const [name,setname] = useState("");
    async function renseignebdd(){
       
        //var db = firebase.firestore();
        console.log(name);
        console.log(email);
        // const users = await db.collection("Users").get();
        // console.log(users.docs.map(doc => doc.data()));
    //    const user= await firebase.auth().createUserWithEmailAndPassword()
        // await db.collection("Users").doc(user.user.uid).set({
        //     email: "test@test.com",
        //     name: "Jean",
        //     surname: "Chorizzo",
        //     password: "testmdp"
        // })
    }
   
    return(
        <form>
            <div>
                <h1>Section Inscription</h1>
            <br></br>
            Nom <input name="nom" type="text" value = {name} onChange = {(n) => setname(n.target.value)} />
            <br></br>
                <label>Prenom <input name="prenom" type="text"/></label>
            <br></br>
            Mail<input name="mail" type="text" value = {email} onChange= {(e) => setemail(e.target.value)}/>
            <br></br>
                <label>Entrer le mdp<input name="mdp" type="text"/></label>
            <br></br>
                <button onClick={renseignebdd} > valider</button>
            </div>
        </form>
        )
}

export default Inscription;