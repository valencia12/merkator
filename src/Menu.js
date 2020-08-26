import React from 'react';
import crudos from './assets/crudos.png';
import sushi from './assets/sushi.png';
import sopas from './assets/sopas.png';
import flatbreads from './assets/flatbreads.png';
import panes from './assets/panes.png'
import tacos from './assets/tacos.png';
import madehome from './assets/delacasa.png';
import tapitas from './assets/tapas.png';
import arrow from './assets/1.png';
import { Link } from 'react-router-dom';
import './App.css';

function Menu() {
    return (
        <div className="App">
            <div className="flecharr">
            <Link to="/Secciones">
            <img className="flecha" alt="merkato" src={arrow} />
            </Link>
            </div>
            <div className="landingp">
                
                <img className="tapitas1" alt="merkato" src={tapitas} />
                

                <br></br><br></br><br></br><p>·TAPAS·</p>
                <p>Pulpo a la gallega y yuca 10</p>
                <p className="margintext">Tostada de camarones aguachile y escabeche de <br />zanahoria, cebolla y elote 9</p>
                <p>Hummus con tostadas o zanahoria 8</p>
                <p>Papas bravas o belgas con salsa brava y alioli 7</p>
                <p>Croquetas de jamón y queso suizo 7</p>
                <p>Chicharrones de pulpo con alioli de pinot grigio 12</p>
                <p>Buffalo o BBQ bites de coliflor 8</p>
                <p>Tuna poke nachos 11</p>
                <p>Jamón ibérico onza 4.5 + Pan con tomate 3</p>
                <p>Tabla de quesos importados con jalea de mora 10</p>
            </div>
            <div className="landingp1">
                <img className="tapitas12" alt="merkato" src={crudos} />
                <p>Pinchos de ahi tuna sobre sambal y nachos de wonton 10</p>
                <p>Washimi de tilapia en leche de tigre con maracuya y<br /> aceite de ajonjoli tostado 8</p>
                <p>Tartar de tuna y salmón con quinoa roja y manzana verde 11</p>
                <p>Spicy tartar de salmón o tuna 10</p>
                <p>CARPACCIO:</p>
                <p>Salmón en ponzu y miel 8</p>
                <p>Atún sellado en ponzu y miel 9</p>
                <p>Pulpo 9 </p>
                <p>Lomito y parmesano 8</p>
                <p>CEVICHES:</p>
                <p>Camarón y cítricos 11</p>
                <p>Tuna al rocotto 11</p>
                <p>TATAKI:</p>
                <p>Ahi tuna 9</p>
                <p>Salmón 10</p>

            </div>
            <div className="landingp1">
                <img className="tapitas12" alt="merkato" src={sushi} />
                <p>California roll 8</p>
                <p>Camarón tempura roll 10</p>
                <p>Dragon roll 9</p>
                <p>Spicy tuna o salmon roll 10</p>
                <p>Salmon skin roll 10</p>
                <p>Tuna tataki roll 11</p>
                <p>Nigiri de ahi tuna o Salmón 5</p>
            </div>
            <div className="landingp1">
                <img className="tapitas12" alt="merkato" src={sopas} />
                <p>Sopa de tomate rostizado y albahaca fresca 6</p>
                <p>Minestrone de lentejas, garbanzos y camote 8</p>
                <p>Burrata en ensalada de arúgula, tomates cherry y reducción balsámica 11</p>
                <p>Ensalada Santa Fe con pollo a la plancha 11</p>
                <p>Ensalada de quinoa y feta con atún sellado 14</p>
                <p>Ensalada ceasar 10 </p>
                <p>*Adicional puedes agregar proteína Ensalada de pulpo y camote en quinoa con
                   aderezo asiático y cilantro 12</p>
                
                <p>Ensalada caprese de esparrágos y boconccini 9</p>
                <p>Ensalada de pavo rostizado, garbanzos y elote chamuscado 9</p>
            </div>
            <div className="landingp1">
                <img className="tapitas12" alt="merkato" src={flatbreads} />
                <br /><br />
                <p>Margarita y stracciatella 10</p>
                <p>Cuatro quesos y portobello 10</p>
                <p>Camarón y manchego 13</p>
                <p>Prosciutto, pesto y tomates deshidratados 11</p>
                <p>Manzana y brie con almendra caramelizada 10</p>
                <p>Lomito, cebolla caramelizada y roquefort 12</p>
                <p>Pulpo a la gallega y feta 12</p>
                <p>Chile morron, espárragos, champignon y manchego 11</p>
                <p>Pollo chipotle o nuca de cerdo, tocino caramelizado y piña 11</p>
            </div>
            <div className="landingp1">
                <img className="tapitas12" alt="merkato" src={panes} />
                <br /><br />
                <p>Elige tu acompañamiento: Papas bravas, belgas, ensalada de frijoles o fresca </p>
                <p>Merkato club 10</p>
                <p>Grilled cheese con tomate y tocino caramelizado 9</p>
                <p>Pavo, tocino y aguacate 10</p>
                <p>Pavo rostizado y queso suizo 11</p>
                <p>Pollo al pesto, berro con escabeche de manzana verde y zanahoria 11</p>
                <p>Roast beef, suizo y cebolla caramelizada 11</p>
                <p>Lomito con hongos salteados, berro y alioli 13</p>
                <p>Prosciutto, mozarella, y arúgula 12</p>
                <p>Hamburguesa Merkato 13</p>
                <p>Hamburguesa de pulled pork con mole y escabeche de piña y zanahoria 13</p>
            </div>
            <div className="landingp1">
                <img className="tapitas12" alt="merkato" src={tacos} />
                <br /><br />
                <p>Lomito con chimichurri 3</p>
                <p>Tilapia en panko 3</p>
                <p>Atún sellado 3</p>
                <p>Pulpo al mole 3</p>
                <p>Nuca de cerdo 3</p>

            </div>
            <div className="landingp1">
                <img className="tapitas12" alt="merkato" src={madehome} />
                <br /><br />
                
                <p>Ravioles rellenos de ragout toscano de hongos 17</p>
                <p>Gnocchi dorados con salsa blanca o marinara 12</p>
                <p>Risotto de pulpo y aceite de trufa 18</p>
                <p>Salmón al mole en puré de camote y vegetales 21</p>
                <p>Filete de tilapia flambeado con vino blanco y mantequilla dorada, con puré de papa y chicharrón de piel de salmón 13</p>
                <p>Camarones chipotle con papas y puré de aguacate 19</p>
                <p>Atún sellado en panko con chimichurri, maiz y esparrágos 19</p>
                <p>Stk frites 17</p>
                <p>Filet mignon en puré de papa y hongos salteados 21</p>
            </div>
        </div>
    );
}

export default Menu;
