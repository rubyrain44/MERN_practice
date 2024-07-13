import React from 'react';

const PersonCard = ({firstName, lastName, age, hairColor}) => {
    return (
        <div>
            <h1>{firstName} {lastName}</h1>
            <h4>Age: {age}</h4>
            <h4>Hair Color: {hairColor}</h4>
        </div>
    )
}

export default PersonCard;