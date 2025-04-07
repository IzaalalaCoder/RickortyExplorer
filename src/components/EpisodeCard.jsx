import React from 'react'
import '../css/card.css';
import '../css/menu.css';

function EpisodeCard({episode}) {

    return (
        <div key={episode.id} className='card'>
            <div className='poster'>
                <h3>{episode.name}</h3>    
            </div>
            <div className='info'>
                <div className='date'>
                    {episode.air_date}
                </div>
                <div className='code'>
                    {episode.episode}
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard
