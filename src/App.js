import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
          <Switch>
            {/* <Route path='/about' render={() => <About />} /> */}
            {/* <Route path='/' component={Home} /> */}
            <Route render={() => <h1>WHOOPS! Wrong way...</h1>} />
          </Switch>
          <footer>©2020 EXHeritage</footer>
      </header>
    </div>
  );
}

export default App;

        // <img src={logo} className="App-logo" alt="logo" />
        // <p>
        //   Edit <code>src/App.js</code> and save to reload.
        // </p>
        // <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   Learn React
        // </a>