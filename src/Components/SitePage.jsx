import React from 'react';
class SitePage extends React.Component {
    state = {
        currentPage: null,
    }
    componentDidMount () {
        // console.log(this.props.match.params.id);
        let siteId = this.props.match.params.id
        fetch(`http://localhost:3000/sites/${siteId}`)
        .then(res=> res.json())
        .then(currentPage=> {
            this.setState({ currentPage })
        })
        
    }
    render() {
        // console.log(this.props);

        let site = this.state.currentPage
        return (
            <div className='content'>
                {site
                    ? (
                        <>
                            <h1> {site.name} </h1>
                            <div className='ym-grid linearize-level-1'>
                                <div className='ym-g66 ym-gl'>
                                    <div className='ym-gbox-left readable'>
                                        <div className='box'>
                                            <div id='contentdes_en' className='tab-content tab-content-show'>
                                                <h6> {site.name} </h6>
                                                <p>{ site.justification }</p>
                                            </div>
                                        </div>
                                        <div className='box'>
                                            <div className='icaption bordered'>
                                                <div className='site_image'>
                                                <img src={site.image_url} alt={site.name} />
                                                </div>
                                                <strong className='description'>Grand Canyon National Park (United States of America) © Evergreen</strong>
                                            </div>
                                        </div>
                                        <div className='box'>
                                            <div>
                                                <h5> Statement of Significance </h5>
                                                <p>{site.short_description}</p>
                                                <div className='site_page'>
                                                    {/* <span role="img" aria-label="" >🇺 */}
                                                    <button onClick={this.handleChangeVisited}
                                                        handleVisited={this.handleVisited}> {site.visited ? "Visited" : 'Unvisited' } </button>
                                                    {/* </span> */}
                                                    <button /*onClick={() => push(`/sites/${id}`)}*/>Wish List</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='box'>
                                            <form action=""></form>
                                        </div>
                                    </div>
                                </div>
                                <div id='sidebar' className='ym-g33 ym-gr'>
                                    <div className='ym-gbox-right'>
                                        <div className='box'>
                                            <div className='alternate'>
                                                <div>
                                                        <span role="img" aria-label="flag">🇺🇸
                                                        <strong> {site.country.name} </strong> 
                                                        </span>
                                                </div>
                                                <div>{site.location}</div>
                                                <div>
                                                    <strong>Date of Inscription:</strong> 
                                                    {site.date_inscribed}
                                                </div>
                                                <span role="img" aria-label="" >🇺
                                                    <strong>Danger:</strong> 
                                                    {site.danger ? "✅" : "⚠️"}
                                                </span>
                                            </div>
                                            <div className='box gmap'>
                                                <div className='' id='esriapp'>
                                                    Google Map
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
                    )
                }
            </div>
        );
    }
}


export default SitePage;