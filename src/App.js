import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {

  return (    
    <div className="App">
      <header className="App-header">        
          <nav>
            <h1>S&S</h1>
            <a><href>Carte des logements</href></a>
            <a>Logements Disponibles</a>
            <a>Recherche ciblée</a>
            <a>Nous Contacter</a>
          </nav>       
      </header>

      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          L'appli de l'hébergement étudiant!
        </p>
        {/* <a
          className="App-link"
          // href="https://www.google.com/search?q=petit+chaton+mignon&rlz=1C1CHBF_frFR859FR859&sxsrf=ALeKk01rYaZHviU_xVXjma8qvNuftJ-SZQ:1584606163404&tbm=isch&source=iu&ictx=1&fir=V1pKgVBEziiCtM%253A%252C5UMVJZCH1GG1gM%252C_&vet=1&usg=AI4_-kR6vEhwpUZbPz8Sbviuj0ehWTxGPA&sa=X&ved=2ahUKEwifzOn7jaboAhVEPBoKHaIWDxYQ9QEwA3oECAkQIg#imgrc=V1pKgVBEziiCtM:"
          target="_blank"
          rel="noopener noreferrer"
        >
          Regarde les petits chats!
        </a> */}
      </body>
      <footer className="App-footer">#FreeJean-Chorrizo</footer>

    </div>
  );
}

export default App;
