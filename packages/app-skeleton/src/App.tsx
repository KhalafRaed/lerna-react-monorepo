import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
