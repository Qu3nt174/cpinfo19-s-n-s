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


        <div className="App">   
            <body className="App-body">
            
            <label>Nom <input name="nom" type="text" value = {name} onChange = {(n) => setname(n.target.value)} /></label>
            
            <label>Prenom <input name="prenom" type="text"/></label>
        
            <label>Mail<input name="mail" type="text" value = {email} onChange= {(e) => setemail(e.target.value)}/></label>
        
            <label>Entrer le mdp<input name="mdp" type="text"/></label>
        
            <button onClick={renseignebdd} > valider</button>
            <br></br>           
            </body>       
       </div>
        
        )
}

export default Inscription;