import React from 'react';


const WishList = (props) => {
    console.log(props);
    let handleClick = () => {
        return (
            props.history.push('/sites')
        )
    }
    return (
        <div>
            <div className='wishlist_empty_image'>
                <img src= "https://cdn.getyourguide.com/tf/assets/static/wishlists/wishlist-empty.svg" alt="wish_list_empty"/>
            </div>
            <div className='wishlist_empty_text'>
            <h2>Your Wish List Is empty!</h2>
            <p> Save activities to your wishlist by clicking on the heart icon. </p>
                <button className='wish_button' onClick={handleClick}>Find Heritage to explore</button>
            </div>
        </div>
    );
}

export default WishList;