import React from 'react';
import CommentForm from "./CommentForm";
import { Button } from 'semantic-ui-react';

class SitePage extends React.Component {
  state = {
    site: null,
    visited: false
  };
  componentDidMount() {
    this.fetchSite();
  }
  handleWishlist = () => {
    console.log("wish list form submitted");
    let siteId = this.props.match.params.id;
    // console.log(siteId);
    fetch("http://localhost:3000/wish_lists", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: this.props.token,
      },
      body: JSON.stringify({
        site_id: siteId,
        user_id: localStorage.user_id,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };
  // handleWishlist = () => {
  //   return (
  //     this.props.history.push('/login')
  //   )
  // }
  addNewComment = newComment => {
    this.setState({
      site: {...this.state.site, comments: [...this.state.site.comments, newComment]}
    })
  }
  fetchSite = () => {
    const siteId = this.props.match.params.id;
    fetch(`http://localhost:3000/sites/${siteId}`)
      .then((res) => res.json())
      .then((site) => {
        this.setState({ site });
      });
  };
  // deleteComment = (commentId) => {
  //   let newComments = this.state.site.comments.filter(comment => {(comment.id !== commentId)
  //     return { ...this.state.site, comments: newComments }
  //   })
  //   this.setState({
  //     site: { ...this.state.site, comments: [...this.state.site.comments, newComments] }
  //   })
  // }

  handleUpdateVisited = () => {
    const siteId = this.props.match.params.id;
    fetch(`http://localhost:3000/sites/${siteId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify({
        visited: !this.props.visited
      })
    })
      .then((res) => res.json())
      .then(res=>{
        // this.handleChangeVisited(res);
        console.log(res);
        this.setState({
          site: { ...this.state.site, visited: res }
        })
      });
  };
  render() {
    // let this.state.site = this.state.site;
    // console.log(this.state.site);
    return (
      <div className="content">
        {this.state.site ? (
          <>
            <h1> {this.state.site.name} </h1>
            <div className="ym-grid linearize-level-1">
              <div className="ym-g66 ym-gl">
                <div className="ym-gbox-left readable">
                  <div className="box">
                    <div
                      id="contentdes_en"
                      className="tab-content tab-content-show"
                    >
                      <h6> {this.state.site.name} </h6>
                      <p>{this.state.site.justification}</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icaption bordered">
                      <div className="site_image">
                        <img src={this.state.site.image_url} alt={this.state.site.name} />
                      </div>
                      <strong className="description">
                        Grand Canyon National Park (United States of America) ©
                        Evergreen
                      </strong>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <h5> Statement of Significance </h5>
                      <p>{this.state.site.short_description}</p>
                      <div className="site_page">
                        <Button onClick={this.handleUpdateVisited} {...this.props.handleChangeVisited}>
                          {this.state.site.visited  ? " Visited " : " Not visited "}
                        </Button>
                        <Button
                        // siteId={this.state.site.id}
                        onClick={this.handleWishlist}
                        >Wish List</Button>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <CommentForm
                      siteId={this.state.site.id}
                      comments={this.state.site.comments}
                      deleteComment={this.deleteComment}
                      addComment={this.addNewComment}
                    />
                  </div>
                </div>
              </div>
              <div id="sidebar" className="ym-g33 ym-gr">
                <div className="ym-gbox-right">
                  <div className="box">
                    <div className="alternate">
                      <div>
                        <span role="img" aria-label="flag">
                          🇺🇸
                          <strong> {this.state.site.country.name} </strong>
                        </span>
                      </div>
                      <div>{this.state.site.location}</div>
                      <div>
                        <strong>Date of Inscription:</strong>
                        {this.state.site.date_inscribed}
                      </div>
                      <span role="img" aria-label="">
                        🇺
                        <strong>Danger:</strong>
                        {this.state.site.danger ? "⚠️" : "No"}
                      </span>
                    </div>
                    <div className="box gmap">
                      <div className="" id="esriapp">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.306202756802!2d-74.04668908467211!3d40.68925344694398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1597334040154!5m2!1sen!2sus" title="Google map" width={ 370 }height={500} frameborder={0} style={{border:0 }} allowfullscreen={""} aria-hidden={ false } tabindex={0}></iframe> */}
                        <iframe
                          title="google map"
                          width={370}
                          height={500}
                          frameborder={0}
                          style={{ border: 0 }}
                          tabindex={0}
                          aria-hidden={false}
                          src={
                            "https://maps.google.com/maps?q=" +
                            this.state.site.latitude +
                            "," +
                            this.state.site.latitude +
                            "&t=&z=15&ie=UTF8&iwloc=&output=embed"
                          }
                          allowfullscreen={""}
                        ></iframe>
                      </div>
                    </div>
                    <div className="box gmap">
                      <div className="" id="esriapp">
                        <iframe
                          id="forecast_embed"
                          key={this.state.site.latitude}
                          title="weather"
                          type="text/html"
                          frameBorder="0"
                          height="145"
                          width="90%"
                          src={
                            "http://forecast.io/embed/#lat=" +
                            this.state.site.latitude +
                            "&lon=" +
                            this.state.site.longitude
                          }
                        >
                          {" "}
                        </iframe>
                        <iframe
                          width="370"
                          height="600"
                          title="weather"
                          src={
                            "https://embed.windy.com/embed2.html?lat=" +
                            this.state.site.latitude +
                            "&lon=" +
                            this.state.site.longitude +
                            "&detailLat=" +
                            this.state.site.latitude +
                            "&detailLon=" +
                            this.state.site.longitude +
                            "&width=300&height=600&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
                          }
                          frameborder="0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <link rel="stylesheet" href={ this.state.site.http_url }/> */}
              {/* <a href={this.state.site.http_url}></a> */}
            </div>
          </>
        ) : (
          <div> Loading </div>
        )}
      </div>
    );
  }
}


export default SitePage;