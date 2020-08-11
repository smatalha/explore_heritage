import React from 'react';

// import { Card } from 'semantic-ui-react'


const SiteCard = props => {
    // console.log(props.pus    h);
    const { image_url, name, location, id, push } = props
    return (
        <>
            <div className='block2__grid'>
                <div className='tour-card'>
                    <div className="tour-card__image">
                        <img alt="oh no!" src={image_url} />
                    </div>
                    <div className='tour-card__description-wrapper'>
                        <div className='tour-card__description'>
                            <div className='tour-card_title'>
                            {name}
                            </div>
                            <div className='tour-card_inscribed'>
                                {location}
                            </div>
                            <div className='tour-card__actions'>
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