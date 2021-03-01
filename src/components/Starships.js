import React from 'react';
import { Link } from 'react-router-dom'

const Starships = (props) => {

    const starshipLinks = props.data.map((starship, index)=> {
        return (
        <div className='link'>
            <Link to={{
                pathname: '/starship',
                state: starship
            }}
            key={index}
            >
                {starship.name}
            </Link>
        </div>
        )
    })


    return (
        <div className='links'>
            {starshipLinks.length ? starshipLinks : <p>Loading...</p>}
        </div>
    );
};



export default Starships;
