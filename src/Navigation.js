import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){


    return(
        <ul style={{display:'flex'}}>
            <Link to="/" className = "navLink">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Accueil</li>
            </Link>
            
            <Link to="/Logement" className = "navLink">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Logement</li>
            </Link>

            <Link to="/Annonce" className = "navLink">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}> Vos Annonces</li>
            </Link>
                      
            <Link to="/Aide" className = "navLink">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Aide</li>
            </Link>
            
            <Link to="/Contact" className = "navLink">
                <li id="Nav-menu"  style={{marginLeft: 10, listStyle: 'none'}}>Contact</li>
            </Link>

        </ul>
    )
}


export default Navigation;