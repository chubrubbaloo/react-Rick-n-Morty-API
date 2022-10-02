import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Characters} from "./components/characters/Characters";
import {Logo} from "./components/logo/Logo";

function App() {

    const [characters, setCharacters] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/character')
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        setLoading(true)
        const fetchItems = async () => {

            const result = await axios.get(currentPageUrl);
            setLoading(false);
            setNextPageUrl(result.data.next)
            setPrevPageUrl(result.data.prev)
            setCharacters(result.data.results)
        }
        fetchItems();

    },[currentPageUrl])

    if (loading) return 'Loading...'


    return (
        <div className="App">
            <Logo/>
            <Characters characters={characters} />
        </div>
    );
}

export default App;
