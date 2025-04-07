import React from 'react';
import CharacterCard from './components/CharacterCard';
import PlaceCard from './components/PlaceCard';
import EpisodeCard from './components/EpisodeCard';
import './css/pagination.css';

function App() {
  const [url, setUrl] = React.useState('');
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const responseFetch = await fetch(url);
      const data = await responseFetch.json();
      setResponse(data);
      setLoading(false);
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  const handleMenuClick = (category) => {
    setResponse(null);
    setUrl(`https://rickandmortyapi.com/api/${category}`);
  };

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
        <button onClick={() => handleMenuClick('character')}>Personnages</button>
        <button onClick={() => handleMenuClick('location')}>Lieux</button>
        <button onClick={() => handleMenuClick('episode')}>Épisodes</button>
      </div>
      
      <div className="cards">
        {loading && <div className="loader">Chargement...</div>}
        
        {response && !loading && url.includes('character') && response.results.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}

        {response && !loading && url.includes('location') && response.results.map((p) => (
          <PlaceCard key={p.id} place={p} />
        ))}

        {response && !loading && url.includes('episode') && response.results.map((e) => (
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
