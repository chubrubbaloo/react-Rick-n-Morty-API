import './App.css';
import {useEffect, useState} from "react";
import {Characters} from "./components/cards/Characters";
import {Logo} from "./components/ui/Logo";
import {Pagination} from "./components/pagination/Pagination";
import {Loader} from "./components/ui/Loader";
function App() {

    const [characters, setCharacters] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(`https://rickandmortyapi.com/api/character/`)
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [pages, setPages] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        const fetchCharacters = async () => {
            const response = await fetch(currentPageUrl);
            const data = await response.json();
            setCharacters(await data.results)
            setNextPageUrl(await data.info.next)
            setPrevPageUrl(await data.info.prev)
            setPages(await data.info.pages)

            setLoading(false)
        }
        fetchCharacters()

    }, [currentPageUrl])

    const goToNextPage = () => setCurrentPageUrl(nextPageUrl);

    const goToPrevPage = () => setCurrentPageUrl(prevPageUrl);

    const goToPage = (number) => setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${number}`);

    return (
        <div className="App">
            <Logo/>
            <Loader loading={loading}/>
            <Characters characters={characters}/>
            <Pagination
                goToNextPage={nextPageUrl ? goToNextPage : null}
                goToPrevPage={prevPageUrl ? goToPrevPage : null}
                goToPage={goToPage}
                pages={pages}
            />
        </div>
    );
}

export default App;
