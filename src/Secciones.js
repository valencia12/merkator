import React from 'react';
import logo from './assets/1m.png';
import { Link } from 'react-router-dom';
import menu1 from './assets/comida.png';
import bebidas from './assets/be.png';
import postres from './assets/cafecito.png';

import './App.css';

function Secciones() {
  return (
    <div className="App">
      
      <img className="logos" src={logo} alt="merkato1" /><br></br>
      <Link to= "/Tapas">
      <img className="logosm" src={menu1} alt="postres"/><br></br>
      </Link>
      <Link to= "/Bebidas">
      <img className="logos" src={bebidas} alt="postres"/><br></br>
      </Link>
      <Link to= "/Postres">
      <img className="logosm" src={postres} alt="postres"/>
      </Link>

    </div>
  );
}

export default Secciones;