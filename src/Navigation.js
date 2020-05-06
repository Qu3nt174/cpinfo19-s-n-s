import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){


    return(
        <ul style={{display:'flex'}}>
            <Link to="/">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Accueil</li>
            </Link>
            
            <Link to="/Logement">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Logement</li>
            </Link>

            <Link to="/Annonce">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Annonce</li>
            </Link>
                      
            <Link to="/Aide">
                <li id="Nav-menu" style={{marginLeft: 10, listStyle: 'none'}}>Aide</li>
            </Link>
            
            <Link to="/Contact">
                <li id="Nav-menu"  style={{marginLeft: 10, listStyle: 'none'}}>Contact</li>
            </Link>

        </ul>
    )
}

export default Navigation;