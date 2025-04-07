import React from 'react'
import Nothing from '../assets/rien.png'
import Male from '../assets/masculin.png'
import Female from '../assets/feminin.png'
import Dead from '../assets/dead.png'
import Alive from '../assets/alive.png'
import '../css/card.css';
import '../css/menu.css';

function CharacterCard({character}) {
    const genderImage = character.gender === 'unknown' || character.gender === 'Genderless' ? Nothing : 
        character.gender === 'Male' ? Male : Female;

    const statusImage = character.status === 'unknown' ? Nothing : 
        character.status === 'Alive' ? Alive : Dead;

    return (
        <div key={character.id} className='card'>
            <div className='poster'>
                <img className='image' src={character.image} alt={character.name} />
                <h3>{character.name}</h3>    
            </div>
            <div className='info'>
                <div className='gender'>
                    <img src={genderImage} alt="Gender" title={character.gender} width="15"/>
                </div>
                <div className='status'>
                    <img title={character.status} src={statusImage} width="10" alt="Statut du personnage"/>
                </div>
                <div className='species'>
                    <p>{character.species} {character.type !== 'unknown' && <span>{character.type}</span>}</p>
                </div>
                { (character.origin.name !== 'unknown' || character.location.name !== 'unknown') &&
                    <div className='origins'>
                        {character.origin.name !== 'unknown' && character.origin.name} {character.location.name !== 'unknown' && character.location.name}
                    </div>
                }
                
            </div>
        </div>
    )
}

export default CharacterCard
