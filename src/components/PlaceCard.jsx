import React from 'react'
import '../css/card.css';
import '../css/menu.css';

function PlaceCard({place}) {

    return (
        <div key={place.id} className='card'>
            <div className='poster'>
                <h3>{place.name}</h3>    
            </div>
            <div className='info'>
                <div className='type'>
                    {place.type}
                </div>

                {
                    place.dimension !== 'unknown' &&
                    <div className='dimension'>
                        {place.dimension}
                    </div>
                }
            </div>
        </div>
    )
}

export default PlaceCard
