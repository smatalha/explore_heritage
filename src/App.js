import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Switch } from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import LoginForm from "./Components/LoginForm";
import SignUp from "./Components/SignUp";
// import WishList from './Components/WishList';
import SitePage from './Components/SitePage';
import SitesCollection from './Components/SitesCollection';
import Profile from './Components/Profile';
import Footer from './Footer';
import { withRouter } from 'react-router-dom'

class App extends React.Component {

  state = {
    sites: [],
    user: {
      id:0,
      name: "",
      img_url: '',
      bio: '',
      email: '',
      sites: []
    },
    token: ""
  }

  componentDidMount() {
    this.fetchSites()
    this.fetchLogin()
  }

  fetchLogin = () => {
    if (localStorage.token) {
      fetch("http://localhost:3000/users/stay_logged_in", {
        headers: {
          "Authorization": localStorage.token
        }
      })
        .then(r => r.json())
        .then(this.handleResponse)
    }
  }
  fetchSites = () => {
    fetch('http://localhost:3000/sites')
      .then(res => res.json())
      .then(sites => {
        this.setState({ sites })
      })
  }
  handleResponse = (resp) => {
    if (resp.message) {
      alert(resp.message)
    } else {
      localStorage.token = resp.token
      localStorage.user_id = resp.user.id
      this.setState(resp,  () => {
        this.props.history.push("/profile")
      })
    }
  }
  logOut = () => {
    this.setState({
      user: null
    }, () => { this.props.history.push("/login")})
  }
  handleSignupSubmit = ( e, userInfo) => {
    e.preventDefault()
    console.log('sign up form submitted');
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(this.handleResponse)
  }

  handleLoginSubmit = (e, userInfo) => {
    e.preventDefault()
    console.log('login form submitted');
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(res=>res.json())
    .then(this.handleResponse)
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
  handleChangeVisited = (data) => {
    let targetsiteIndex = this.state.sites.findIndex(
      (site) => site.id === data.id
    );
    let copysites = [...this.state.sites]; // DO NOT MUTATE STATE
    copysites[targetsiteIndex] = data;
    this.setState({ sites: copysites });
  };
  renderProfile = (routerProps) => {
    if (this.state.token) {
      return <Profile
        user={this.state.user}
        token={this.state.token}
        {...routerProps}
        // logout={this.logOut}
        /* addNewComment={this.addNewComment}*/
      />
    } else {
      this.props.history.push("/login")
    }
  }

  render() {
    // console.log(this.state.sites);
    return (
      <div className="App">
        <header className="App-header">
            <NavBar/>
            {/* <Header/> */}
            <Switch>
              <Route path='/signup' render={(routerProps) => <SignUp handleSignupSubmit={this.handleSignupSubmit} {...routerProps} />} />
              <Route path='/login' render={(routerProps) => <LoginForm handleLoginSubmit={this.handleLoginSubmit} {...routerProps}/>} />
              <Route path='/sites/:id' render={(routerProps) => <SitePage sites={this.state.sites}{...routerProps}
              handleChangeVisited={this.props.handleChangeVisited} removeComment={this.removeComment} token={this.state.token}/>} />
              <Route path='/sites' render={(routerProps) => <SitesCollection sites={this.state.sites}{...routerProps} />} />
              <Route path="/profile" render={this.renderProfile} />
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

let MagicalComponent = withRouter(App)
export default MagicalComponent