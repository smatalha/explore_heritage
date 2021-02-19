import React from 'react';

// import { Card } from 'semantic-ui-react'


const SiteCard = props => {
    // console.log(props.push);
    const { image_url, name, location, id, push } = props
    return (
                <div  className="sites">
            <div className="container py-5">
                <div className="sites_header">
                    <div className="common">
                    </div>
                    <div className="row">
                        {/* {state.map((props) => ( */}
                            {/* <div className=" col-md-6  col-sm-6"> */}
                                <div className="box">
                                    <div className="icon">
                                        {props.name}
                                    </div>
                                    <p className="sites_box_location">{props.location}</p>
                                    {/* <div className="sites_box_text">
                                    {props.text}
                                </div> */}
                                </div>
                            {/* </div> */}
                        {/* ))} */}
                    </div>
                </div>
            </div>
        </div>
        // <>
            /* <div className='block2__grid'>
                <div className='site-card'>
                    <div className="site-card__image">
                        <img alt="oh no!" src={image_url} />
                    </div>
                    <div className='site-card__description-wrapper'>
                        <div className='site-card__description'>
                            <div className='site-card_title'>
                            {name}
                            </div>
                            <div className='site-card_inscribed'>
                                {location}
                            </div>
                            <div className='site-card__actions'>
                                <button> 10 Like</button>
                                <button onClick={() => push(`/sites/${id}`)}>Visit Me!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> */
    );
}
// onClick = {() => push(`/sites/${id}`)}
export default SiteCard;