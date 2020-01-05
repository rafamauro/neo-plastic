import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';
import DashContent from './components/DashContent';
import { Redirect } from 'react-router-dom'

const routing = (
    <Router>
      <div>
        <Route path="/" component={Home}/>
        <Route exact path="/" render={() => (
          <Redirect to="/home"/>
        )}/>
        <Route path="/home" component={DashContent} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
