import React from 'react';
import Profile from '../Components/Profile';

const UsersContainer = props => {
    // console.log(props);
    return (
        <div>
            {props.users.map(user=> (
                <Profile key={user.id} {...user}/>
            ))}
        </div>
        );
}

export default UsersContainer;