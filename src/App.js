import React, {Component} from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import Home from './home';
import Claims from './claims';
import About from './about';
import Contact from './contact';
import logo from './logo.png';
import symbol from './symbol.png';

class App extends React.Component {
render() {
  return (
   <Router>
     <div>
     <ul>
  <li className="navpoint"><img src={symbol} alt="logo2" className="logo2"/></li>

  <li className="navpoint" aria-label="Claims"><Link to={'/claims'}>Claims</Link></li>
  <li className="navpoint" aria-label="ContactUs"><Link to={'/contact'}>ContactUs</Link></li>
  <li className="navpoint" aria-label="about"><Link to={'/about'}>About</Link></li>
  <li className="navpoint" aria-label="Home"><Link to={'/'}>Home</Link></li>
  <img src={logo} alt="Logo" className="logo" />

</ul>
     <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/claims' component={Claims} />
         <Route exact path='/about' component={About} />
         <Route exact path='/contact' component={Contact} />
     </Switch>
     </div>
    </Router>
);
}
}
export default App;