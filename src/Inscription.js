import React from 'react'


function Inscription(){


    return(
        <div>
            <h1>Section Inscription</h1>
        <br></br>
            <label>Nom <input name="nom" type="text"/></label>
        <br></br>
            <label>Prenom <input name="prenom" type="text"/></label>
        <br></br>
            <label>Mail<input name="mail" type="text"/></label>
        <br></br>
            <label>Entrer le mdp<input name="mdp" type="text"/></label>
        </div>
        )
}

export default Inscription;