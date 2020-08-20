import React from 'react';
import CommentForm from "./CommentForm";

class SitePage extends React.Component {
  state = {
    currentPage: null,
    // comments: []
  };
  componentDidMount() {
    this.fetchSite();
    // this.fetchComments();
  }
  handleWishlist = () => {
    return (
      this.props.history.push('/login')
    )
  }
  handleChangeVisited = (id) => {
    let siteId = this.props.match.params.id
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        visited: !this.props.visited,
      }),
    };

    fetch(`http://localhost:3000/sites/${siteId}`, options)
      .then((res) => res.json())
      .then((e) => {
        // this.handleVisited(id);
        console.log(e);
      });
  };
  fetchSite = () => {
    let siteId = this.props.match.params.id;
    fetch(`http://localhost:3000/sites/${siteId}`)
      .then((res) => res.json())
      .then((currentPage) => {
        this.setState({ currentPage });
      });
  };
  // fetchComments = () => {
  //   fetch("http://localhost:3000/comments")
  //     .then((res) => res.json())
  //     .then((comments) => {
  //       this.setState({ comments });
  //     });
  // };

  render() {
    let site = this.state.currentPage;
    console.log(site);
    return (
      <div className="content">
        {site ? (
          <>
            <h1> {site.name} </h1>
            <div className="ym-grid linearize-level-1">
              <div className="ym-g66 ym-gl">
                <div className="ym-gbox-left readable">
                  <div className="box">
                    <div
                      id="contentdes_en"
                      className="tab-content tab-content-show"
                    >
                      <h6> {site.name} </h6>
                      <p>{site.justification}</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icaption bordered">
                      <div className="site_image">
                        <img src={site.image_url} alt={site.name} />
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
                      <p>{site.short_description}</p>
                      <div className="site_page">
                        {/* <span role="img" aria-label="" >🇺 */}
                        <button onClick={this.handleChangeVisited}>
                          {" "}
                          {site.visited ? "Visited" : "Unvisited"}{" "}
                        </button>
                        {/* </span> */}
                        <button /*onClick={() => push(`/sites/${id}`)}*/ onClick={this.handleWishlist} >
                          Wish List
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                      <CommentForm
                      removeComment={this.removeComment}
                      comments={site.comments}
                      deleteComment={this.deleteComment}
                      addComment={this.addComment}
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
                          <strong> {site.country.name} </strong>
                        </span>
                      </div>
                      <div>{site.location}</div>
                      <div>
                        <strong>Date of Inscription:</strong>
                        {site.date_inscribed}
                      </div>
                      <span role="img" aria-label="">
                        🇺
                        <strong>Danger:</strong>
                        {site.danger ? "⚠️" : "No"}
                      </span>
                    </div>
                    <div className="box gmap">
                      <div className="" id="esriapp">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.306202756802!2d-74.04668908467211!3d40.68925344694398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1597334040154!5m2!1sen!2sus" title="Google map" width={ 370 }height={500} frameborder={0} style={{border:0 }} allowfullscreen={""} aria-hidden={ false } tabindex={0}></iframe> */}
                        <iframe
                          title='google map'
                          width={370}
                          height={500}
                          frameborder={0}
                          style={{ border: 0 }}
                          tabindex={0}
                          aria-hidden={false}
                          src={'https://maps.google.com/maps?q=' + site.latitude + ',' + site.latitude + '&t=&z=15&ie=UTF8&iwloc=&output=embed'} allowfullscreen={""} >
                        </iframe>
                      </div>
                    </div>
                    <div className="box gmap">
                      <div className="" id="esriapp">
                      <iframe id="forecast_embed" key={site.latitude} title='weather' type="text/html" frameBorder="0" height="145" width="90%" src={"http://forecast.io/embed/#lat=" + site.latitude + "&lon=" + site.longitude}> </iframe>
                        <iframe width="370" height="600" title='weather' src={'https://embed.windy.com/embed2.html?lat=' + site.latitude + '&lon=' + site.longitude + '&detailLat=' + site.latitude + '&detailLon=' + site.longitude+ '&width=300&height=600&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1'} frameborder="0"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <link rel="stylesheet" href={ site.http_url }/> */}
              {/* <a href={site.http_url}></a> */}
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