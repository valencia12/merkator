import React from 'react';

import cafe1 from './assets/postre1.png';
import cafe2 from './assets/postre2.png';
import cafe3 from './assets/postre3.png';
import cafe4 from './assets/postre4.png';
import arrow from './assets/1.png';
import { Link } from 'react-router-dom';
import './App.css';

function Postres() {
  return (
    <div className="App">
      <br></br><br></br>
      <div className="flechar1">
        <Link to="/Secciones">
          <img className="flecha" alt="merkato" src={arrow} />
        </Link>
      </div>
      <div className="landingp1">
        <img className="postre3" alt="merkato" src={cafe1} />
        <br /><br />
        <p>Budin Merkato 6</p>
        <p>Budín de banano 7</p>
        <p>Pecado de chocolate 7</p>
        <p>Creme brulee 5</p>
        <p>Creme brulee de coco 5</p>
        <p>Panacotta de frutos rojos 6</p>
        <p>Lava cake de dulce de leche 7</p>
        <p>Key lime pie 5</p>
        <p>Mousse de chocolate horneado y banano caramelizado 6</p>

      </div>
      <div className="landingp1">
        <img className="tapitas12" alt="merkato" src={cafe2} />
        <br /><br />
        <p>NIEVES 4</p>
        <p>Limón y hierbabuena</p>
        <p>Maracuya</p>
        <p>Mora</p>
        <p>Mango zula</p>
        <p>Coco</p>
        <p>SORBETES 4</p>
        <p>Vainilla</p>
        <p>Dulce de leche</p>
        <p>Chocolate belga</p>
      </div>
      <div className="landingp1">
        <img className="tapitas12" alt="merkato" src={cafe3} />
        <br /><br />
        <p>Americano 2</p>
        <p>Latte 2.5</p>
        <p>Espresso 2</p>
        <p>Machiatto 2.5</p>
        <p>Capuccino:</p>
        <p>Sencillo 3</p>
        <p>Doble 4</p>
        <p>HELADO</p>
        <p>Latte 3</p>
        <p>Té chai 3</p>
        <p>Café de vainilla 3.5</p>
        <p>CON LICOR</p>
        <p>Minuit 12</p>
        <p>Carajillo 7</p>
      </div>
      <div className="landingp1">
        <img className="tapitas12" alt="merkato" src={cafe4} />
        <br /><br />
        <p>DE PEDASI CON AMORDETOX</p>
        <p>Té verde, lemongrass, hoja dehigo, piel de naranja, jengíbre, jazmín, menta, cardamomo, hierba de Santa María 3</p>
        <p>¡HASTA MAÑANA!</p>
        <p>Manzanilla,  jazmín, tilo, lavanda, hojas de naranja agria y menta 3</p>
        <p>INDIAN MASALA CHAI DIGESTIVO</p>
        <p>ENSAYO DE AMOR ANTIOXIDANTE</p>
        <p>Té negro Darjeeling de primera cosecha 2018, manzana, pétalos de rosa, pimienta de Jamaica 3</p>
        <p>TÉ OOLONG OSMANTHUS ANTIOXIDANTE</p>
        <p>TÉ MERKATO SELECCIÓN ESPECIAL</p>
        <p>Té verde Giddapahar, jazmín, pétalos de rosa, lavanda, rosa de jamaica, piel de mandarina y vaina de vainilla 3</p>
      </div>

    </div>
  );
}

export default Postres;