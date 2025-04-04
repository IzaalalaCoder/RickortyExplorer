import React from 'react'
import CharacterCard from './components/CharacterCard';

function App() {

  const BASE_URL = 'https://rickandmortyapi.com/api/'
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const fetchCharacter = async () => {

      const response = await fetch(`${BASE_URL}/character`);
      const characters = await response.json();

      setCharacters(characters.results);
    }

    fetchCharacter()
  }, [])

  return (
    <div>
     {characters.map((c) => (
       <CharacterCard key={c.id} character={c} ></CharacterCard>
     ))}
    </div>
  )
}

export default App
