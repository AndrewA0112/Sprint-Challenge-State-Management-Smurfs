import React from 'react';

import './Smurf.scss'

const Smurf = ({ smurf }) => {
    return (
        <div className='smurf'>
            <h1>{smurf.name}</h1>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
            <button>Delete</button>
        </div>
    )
}

export default Smurf;