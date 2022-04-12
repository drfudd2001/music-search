import { useState, useRef } from 'react';
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';
import './App.css';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

function App() {
    const [message, setMessage] = useState('Search for Music!');
    const [data, setData] = useState([]);
    let searchInput = useRef('');

    /** API Entry */
    const api_url = 'https://itunes.apple.com/search?term=';

    const handleSearch = (e, term) => {
        e.preventDefault();

        if (!term) return;

        // Define our async func
        const fetchData = async () => {
            document.title = `${term} Music`;
            const response = await fetch(api_url + term);
            const resData = await response.json();

            // Guard clause, do not show empty results
            if (resData.results?.length < 1) return setMessage('Not Found');
            setMessage(`Music Results for: ${term}`);
            setData(resData.results);
        };
        fetchData();
    }

    return (
        <div className="App">
            <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
            }}>
                <SearchBar handleSearch={handleSearch}/>
            </SearchContext.Provider>
            {message}
            <DataContext.Provider value={data}>
                <Gallery />
            </DataContext.Provider>
        </div>
    );
}

export default App;
