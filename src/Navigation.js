import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){


    return(
        <ul style={{display:'flex'}}>
            <Link to="/">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Accueil</li>
            </Link>
            
            <Link to="/Carte">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Carte</li>
            </Link>
            
            <Link to="/Logement">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Logement</li>
            </Link>
            
            <Link to="/Search">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Search</li>
            </Link>
            
            <Link to="/Contact">
                <li id="Nav-menu"  style={{marginLeft: 10, listStyle: 'none'}}>Contact</li>
            </Link>

        </ul>
    )
}

export default Navigation;