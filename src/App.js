import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Switch } from "react-router-dom";
import SitesContainer from './Containers/SitesContainer';
import About from './Components/About';
import Home from './Components/Home';
// import Header from './Components/Header';
import Login from './Components/Auth';
import WishList from './Components/WishList';




function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
          {/* <Header/> */}
          {/* <SitesContainer/> */}
          <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/wishlist' component={WishList}/>
                    {/* <Route path='/events/:id' render={() => <div> event </div>} /> */}
                    <Route path='/sites' render={() => <SitesContainer />} />
                    {/* <Route path='/user' render={() => <UserContainer />} /> */}
                    <Route path='/about' render={() => <About />} />
                    <Route path='/' component={Home} />
          </Switch>
          <footer className='footer'>©2020 EXHeritage</footer>
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