import React from 'react';
import HeaderImg from './Header';

class Home extends React.Component {

    render() {
        return (
            <>
            <HeaderImg/>
            <div className="user_card">

                <h1>
                    <strong>Welcome</strong>
                </h1>
                <h1>Explore The world Heritage</h1>
                <h4>SignUp--It's Free</h4>
                {/* <img src="https://i.imgur.com/td8DG0k.jpg?1" alt="Kat" className="card_image" />

                <div className="user_name">
                    <h1>Kat(35), NYC</h1>
                    <h2>Quarantined but uncontained adventurer. Creature of havoc.</h2>
                </div> */}
            </div>
            </>
        );
    }
}

export default Home;
