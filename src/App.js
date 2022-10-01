import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Characters} from "./components/characters/Characters";
import {Logo} from "./components/logo/Logo";

function App() {

    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(
                "https://rickandmortyapi.com/api/character/?page=1"
            );
            
            setCharacters(result.data.results)
        }
        fetchItems();

    },[])




    return (
        <div className="App">
            <Logo/>
            <Characters characters={characters} />
        </div>
    );
}

export default App;
