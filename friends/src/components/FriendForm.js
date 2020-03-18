import React from 'react';

const FriendForm = props => {

    console.log ('FriendForm props:', props)

    return (
        <div className = 'friends'>
            <h3>{props.e.name}</h3>
            <p>{props.e.age}</p>
        </div>
    )
}

export default FriendForm;