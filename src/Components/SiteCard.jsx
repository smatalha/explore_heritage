import React from 'react';
// import { Card } from 'semantic-ui-react'


const SiteCard = props => {
    console.log(props);
    return (
        <>
            <div className='block2__grid'>
                <div className='tour-card'>
                    <div className="tour-card__image">
                        <img alt="oh no!" src={props.image_url} />
                    </div>
                    <div className='tour-card__description-wrapper'>
                        <div className='tour-card__description'>
                            <div className='tour-card_title'>
                            {props.name}
                            </div>
                            <div className='tour-card_inscribed'>
                                {props.location}
                            </div>
                            <div className='tour-card__actions'>
                                <button> 10 Like</button>
                                <button> 0 Dislike</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SiteCard;