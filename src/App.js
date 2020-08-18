import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Switch } from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
// import Header from './Components/Header';
// import Auth from './Components/Auth';
import LoginForm from "./Components/LoginForm";
import SignUp from "./Components/SignUp";
// import WishList from './Components/WishList';
// import SitesContainer from './Containers/SitesContainer';
import SitePage from './Components/SitePage';
import SitesCollection from './Components/SitesCollection';
import Profile from './Components/Profile';
import UsersContainer from './Containers/UsersContainer';
import Footer from './Footer';



class App extends React.Component {

  state = {
    sites: [],
    currentUser: null
    }
  setUser = user => {
    console.log(this.props)
    this.setState({
      currentUser: user
    }, () => {this.props.history.push("/users/:id")})
  }
  componentDidMount() {
    this.fetchSites()
    this.fetchUsers()
  }
  fetchSites = () => {
    fetch('http://localhost:3000/sites')
      .then(res => res.json())
      .then(sites => {
        this.setState({ sites })
      })
  }
  fetchUsers = () => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users })
      })
  }
  // deleteComment = id => {
  //   let newArr = this.state.comments.filter(comment => { return comment.id !== id })
  //   this.setState({
  //     comments: newArr
  //   })
  // };
  removeComment = commentId => {
    fetch(`http://localhost:3000/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        // let newSiteArray = this.state.sites.map(site => {
        //   if (site.id === this.state.currentSite) {
        //     let newComments = site.comments.filter(comment => comment.id !== commentId)
        //     return { ...site, comments: newComments }
        //   }
        //   return site
        // })
        // this.setState({ sites: newSiteArray })
      })
  }
  handleVisited = (id) => {
    let updatedSite = this.state.sites.map(site => {
      if (site.id === id) {
        site.visited = !site.visited
        return (site)
      }
      else { return site }
    })
    this.setState({
      sites: updatedSite
    })
  }
  handleChangeVisited = (id) => {
    // let siteId = this.props.match.params.id
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        visited: !this.props.visited
      })
    }

    fetch(`http://localhost:3000/sites/${id}`, options)
      .then(res => res.json())
      .then(e => {
        this.handleVisited(id)
        console.log(e);
      })
  };

  render() {
    // console.log('useer',this.state);
    return (
      <div className="App">
        <header className="App-header">
            <NavBar/>
            {/* <Header/> */}
            <Switch>
              {/* <Route path='/login' component={LoginForm} /> */}
              <Route path='/signup' render={(routerProps) => <SignUp setUser={this.setUser} {...routerProps}/>} />
              <Route path='/login' render={(routerProps) => <LoginForm setUser={this.setUser} {...routerProps}/>} />
              {/* <Route path='/wishlist' component={WishList}/> */}
              <Route path='/sites/:id' render={(routerProps) => <SitePage sites={this.state.sites}{...routerProps}
              handleChangeVisited={this.props.handleChangeVisited} removeComment={this.removeComment} />} />
              <Route path='/sites' render={(routerProps) => <SitesCollection sites={this.state.sites}{...routerProps} />} />
              <Route path='/users/:id' render={(routerProps) => <Profile users={this.state.users}{...routerProps} />} />
              <Route path='/users' render={() => <UsersContainer users={this.state.users}/>} />
              <Route path='/about' render={() => <About />} />
              <Route path='/' component={Home} />
            </Switch>
            {/* <footer className='footer'>©2020 EXHeritage</footer> */}
            {/* <Footer/> */}
        </header>
            <Footer/>

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