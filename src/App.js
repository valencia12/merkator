import React, { Component } from 'react';
import Merkato from './Merkato';
import Menu from './Menu';
import Bebidas from './Bebidas';
import Postres from './Postres';
import Secciones from './Secciones';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './component/Nav/Navbar';
import './App.css';

class App extends Component {

  render() {
    return (
      <>

        <Router>
          <NavBar></NavBar>
          <div className="App">

            <Switch>
              <Route path="/" exact component={Merkato} />
              <Route path="/Tapas" component={Menu} />
              <Route path="/Bebidas" component={Bebidas} />
              <Route path="/Postres" component={Postres} />
              <Route path="/Secciones" component={Secciones} />
              
            </Switch>
          </div>

        </Router>
      </>
    );
  }
}

export default App;
