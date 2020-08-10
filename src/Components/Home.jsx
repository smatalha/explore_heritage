import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div className="user_card">
                <img src="https://i.imgur.com/td8DG0k.jpg?1" alt="Kat" className="card_image" />

                <div className="user_name">
                    <h1>Kat(35), NYC</h1>
                    <h2>Quarantined but uncontained adventurer. Creature of havoc.</h2>
                </div>
            </div>
        );
    }
}

export default Home;
