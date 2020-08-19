import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Switch } from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
// import Header from './Components/Header';
import LoginForm from "./Components/LoginForm";
import SignUp from "./Components/SignUp";
// import UsersControllers from './Components/UsersControllers';
// import WishList from './Components/WishList';
import SitePage from './Components/SitePage';
import SitesCollection from './Components/SitesCollection';
import Profile from './Components/Profile';
// import UsersContainer from './Containers/UsersContainer';
import Footer from './Footer';

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
    }
  }
  componentDidMount() {
    this.fetchSites()
  }
  fetchSites = () => {
    fetch('http://localhost:3000/sites')
      .then(res => res.json())
      .then(sites => {
        this.setState({ sites })
      })
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
      .then(res => {
        if (res.id) {
          this.setState({
            user: res
          })
        }else{
          alert(res.message)
        }
    })
  }
  handleLoginSubmit = (e, userInfo) => {
    e.preventDefault()

    console.log('login form submitted');
    fetch('http://localhost:3000/users/login', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo)
    })
    .then(res=>res.json())
    .then(res=> {
      console.log(res);
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
    return (
      <div className="App">
        <header className="App-header">
            <NavBar/>
            {/* <Header/> */}
            <Switch>
              {/* <Route path='/login' component={LoginForm} /> */}
              <Route path='/signup' render={(routerProps) => <SignUp handleSignupSubmit={this.handleSignupSubmit} {...routerProps} />} />
            <Route path='/login' render={(routerProps) => <LoginForm handleLoginSubmit={this.handleLoginSubmit} {...routerProps}/>} />
              {/* <Route path='/UsersControllers' render={() => <UsersControllers currentUser={this.state.currentUser}/> } /> */}
              {/* <Route path='/UsersControllers' component={UsersControllers}/> */}
              <Route path='/sites/:id' render={(routerProps) => <SitePage sites={this.state.sites}{...routerProps}
              handleChangeVisited={this.props.handleChangeVisited} removeComment={this.removeComment} />} />
              <Route path='/sites' render={(routerProps) => <SitesCollection sites={this.state.sites}{...routerProps} />} />
            <Route path='/profile' render={(routerProps) => <Profile user={this.state.user} {...routerProps} />} />
              {/* <Route path='/users' render={() => <UsersContainer users={this.state.users}/>} /> */}
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