import React from 'react';
import CharacterCard from './components/CharacterCard';
import PlaceCard from './components/PlaceCard';
import EpisodeCard from './components/EpisodeCard';
import './css/pagination.css';

function App() {
  const [url, setUrl] = React.useState('https://rickandmortyapi.com/api/character?page=1');
  const [response, setResponse] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const responseFetch = await fetch(url);
      const data = await responseFetch.json();
      setResponse(data);
    };

    fetchData();
  }, [url]);

  const handlePagination = (direction) => {
    if (response) {
      const nextPage = direction === 'next' && response.info.next ? response.info.next : null;
      const prevPage = direction === 'prev' && response.info.prev ? response.info.prev : null;
      if (nextPage) setUrl(nextPage);
      if (prevPage) setUrl(prevPage);
    }
  };

  return (
    <>
      <div className="menu">
        <button onClick={() => setUrl('https://rickandmortyapi.com/api/character?page=1')}>Personnages</button>
        <button onClick={() => setUrl('https://rickandmortyapi.com/api/location?page=1')}>Lieux</button>
        <button onClick={() => setUrl('https://rickandmortyapi.com/api/episode?page=1')}>Épisodes</button>
      </div>
      
      <div className="cards">
        {response && url.includes('character') && response.results.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}

        {response && url.includes('location') && response.results.map((p) => (
          <PlaceCard key={p.id} place={p} />
        ))}

        {response && url.includes('episode') && response.results.map((e) => (
          <EpisodeCard key={e.id} episode={e} />
        ))}
      </div>

      <div className="pagination">
        <div className="action">
          <button onClick={() => handlePagination('prev')} disabled={!response || !response.info.prev}>
            Précédent
          </button>
        </div>
        <div className="action">
          <button onClick={() => handlePagination('next')} disabled={!response || !response.info.next}>
            Suivant
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
