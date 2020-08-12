import React from 'react';

// import { Card } from 'semantic-ui-react'


const SiteCard = props => {
    // console.log(props.push);
    const { image_url, name, location, id, push } = props
    return (
        <>
            <div className='block2__grid'>
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
                                {/* <button> 10 Like</button> */}
                                <button onClick={() => push(`/sites/${id}`)}>Visit Me!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
// onClick = {() => push(`/sites/${id}`)}
export default SiteCard;