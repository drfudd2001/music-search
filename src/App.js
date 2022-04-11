import { useEffect, useState } from 'react';
import { DataContext } from './context/DataContext';
import './App.css';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

function App() {
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('Search for Music!');
    const [data, setData] = useState([]);

    /** API Entry */
    const api_url = 'https://itunes.apple.com/search?term=';

    useEffect(() => {
        if (!search) return;

        // Define our async func, useEffect cannot be async
        const fetchData = async () => {
            document.title = `${search} Music`;
            const response = await fetch(api_url + search);
            const resData = await response.json();

            // Guard clause, do not show empty results
            if (resData.results?.length < 1) return setMessage('Not Found');
            setMessage(`Music Results for: ${search}`);
            setData(resData.results);
        };
        fetchData();
    }, [search]);

    const handleSearch = (e, term) => {
        e.preventDefault();
        setSearch(term);
    }

    return (
        <div className="App">
            <SearchBar handleSearch={handleSearch}/>
            {message}
            <DataContext.Provider value={data}>
                <Gallery />
            </DataContext.Provider>
        </div>
    );
}

export default App;
