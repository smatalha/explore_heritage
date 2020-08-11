import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Switch } from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
// import Header from './Components/Header';
import Login from './Components/Auth';
import WishList from './Components/WishList';
// import SitesContainer from './Containers/SitesContainer';
import SitePage from './Components/SitePage';
import SitesCollection from './Components/SitesCollection';



class App extends React.Component {

  state = { sites: [] }

  componentDidMount() {
    fetch('http://localhost:3000/sites')
      .then(res => res.json())
      .then(sites => {
        this.setState({ sites })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <NavBar/>
            {/* <Header/> */}
            <Switch>
                      <Route path='/login' component={Login} />
                      <Route path='/wishlist' component={WishList}/>
                      <Route path='/sites/:id' render={(routerProps) => <SitePage sites={this.state.sites}{...routerProps} />} />
                      <Route path='/sites' render={(routerProps) => <SitesCollection sites={this.state.sites}{...routerProps} />} />
                      {/* <Route path='/sites' render={() => <SitesContainer />} /> */}
                      <Route path='/about' render={() => <About />} />
                      <Route path='/' component={Home} />
            </Switch>
            <footer className='footer'>©2020 EXHeritage</footer>
        </header>
      </div>
     );
  }
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