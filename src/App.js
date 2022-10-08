import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Characters} from "./components/Characters";
import {Logo} from "./components/Logo";
import {Pagination} from "./components/Pagination";
import {Loader} from "./components/Loader";
function App() {

    const [characters, setCharacters] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(`https://rickandmortyapi.com/api/character/`)
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        let cancel;

        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.info.next)
            setPrevPageUrl(res.data.info.prev)
            setCharacters(res.data.results)
        })

        // Cancels old request when fetching new data just in case our old request finishes after the new one.
        return () => cancel();
    }, [currentPageUrl])

    function goToNextPage() {
        setCurrentPageUrl(nextPageUrl);
    }

    function goToPrevPage() {
        setCurrentPageUrl(prevPageUrl);
    }

    return (
        <div className="App">
            <Logo/>
            <Loader loading={loading}/>
            <Characters characters={characters}/>
            <Pagination
                goToNextPage={nextPageUrl ? goToNextPage : null}
                goToPrevPage={prevPageUrl ? goToPrevPage : null}
            />
        </div>
    );
}

export default App;
