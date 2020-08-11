import React from 'react';
class SitePage extends React.Component {
    state = {
        currentPage: null
    }

    componentDidMount () {
        // console.log(this.props.match.params.id);

    }
    render() {
        let siteId = this.props.match.params.id
        let siteToDisplay = this.props.sites.find(site => (site.id === parseInt(siteId)))
        console.log(siteToDisplay);
        // const { image_url, name, location, id, push } = siteToDisplay
        return (
            <div className='content'>
                {siteToDisplay
                    ? (
                        <>
                            <h1> {siteToDisplay.name}</h1>
                            <div className='ym-grid linearize-level-1'>
                                <div className='ym-g66 ym-gl'>
                                    <div className='ym-gbox-left readable'>
                                        <div className='box'>
                                            <div id='contentdes_en' className='tab-content tab-content-show'>
                                                <h6> {siteToDisplay.name}</h6>
                                                <p>{ siteToDisplay.justification }</p>
                                            </div>
                                        </div>
                                        <div className='box'>
                                            <div className='icaption bordered'>
                                                <div className='site_image'>
                                                <img src={siteToDisplay.image_url} alt={siteToDisplay.name} />
                                                </div>
                                                <strong className='description'>Grand Canyon National Park (United States of America) © Evergreen</strong>
                                            </div>
                                        </div>
                                        <div className='box'>
                                            <div>
                                                <h5> Statement of Significance </h5>
                                                <p>{siteToDisplay.short_description}</p>
                                                <div className='site_page'>
                                                    <button> 10 Like</button>
                                                    <button /*onClick={() => push(`/sites/${id}`)}*/>Visit Me!</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='box'>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div id='sidebar' className='ym-g33 ym-gr'>
                                    <div className='ym-gbox-right'>
                                        <div className='box'>
                                            <div className='alternate'>
                                                <div>
                                                    <span> 🇺🇸
                                                        <strong>United States of America</strong> 
                                                    </span>
                                                </div>
                                                <div>{siteToDisplay.location}</div>
                                                <div>
                                                    <strong>Date of Inscription:</strong> 
                                                    {siteToDisplay.date_inscribed}
                                                </div>
                                            </div>
                                            <div className='box gmap'>
                                                <div className id='esriapp'>
                                                    Google Map
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <link rel="stylesheet" href={ siteToDisplay.http_url }/> */}
                                {/* <a href={siteToDisplay.http_url}></a> */}
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