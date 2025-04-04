import React from 'react'
import Nothing from '../assets/rien.png'
import Male from '../assets/masculin.png'
import Female from '../assets/feminin.png'

function CharacterCard({character}) {
    const genderImage = character.gender === 'unknown' || character.gender === 'Genderless' ? Nothing : 
        character.gender === 'Male' ? Male : Female;

    return (
        <div key={character.id} className='character-card'>
            <div className='character-poster'>
                <img src={character.image} alt={character.name} />
                <div className='character-info'>
                    <h3>{character.name} | <img src={genderImage} alt="Gender" width="15"/> </h3>
                    <div className='character-species'>
                        <p>{character.species} | <span>{character.type}</span></p>
                    </div>
                    <div className='character-origins'>
                        <p>{character.origin.name} | <span>{character.location.name}</span></p>
                    </div>
                    <p>{character.status}</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
