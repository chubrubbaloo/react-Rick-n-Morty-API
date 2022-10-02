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
        let cancel;
        const fetchItems = async () => {

            const result = await axios.get(currentPageUrl,
                {cancelToken: new axios.CancelToken(c => cancel = c)});
            setLoading(false);
            setNextPageUrl(result.data.next)
            setPrevPageUrl(result.data.prev)
            setCharacters(result.data.results)
        }
        fetchItems();
        // Cancels old request when we make a new one so we never load old data in case the old request finishes after the new one.
        return () => cancel();

    }, [currentPageUrl])

    if (loading) return <h1>Loading...</h1>


    return (
        <div className="App">
            <Logo/>
            <Characters characters={characters}/>
        </div>
    );
}

export default App;
