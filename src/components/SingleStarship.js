import React from 'react';
import { Link } from 'react-router-dom'

const SingleStarship = (props) => {
    return (
        <div className='single-starship-container'>
            <div className='starship'>
                <p>Name: {props.location.state.name}</p>
                <p>Model: {props.location.state.model}</p>
                <Link to='/'>RETURN</Link>
            </div>
        </div>
    );
}

export default SingleStarship;
