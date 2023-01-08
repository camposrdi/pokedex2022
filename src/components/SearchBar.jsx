import { useContext, useRef, AppContext } from "react";
import axios from "axios";

const SearchBar = () => {
    
    const inputName = useRef(null);
    const inputId = useRef(null);
    const [setPokemon, url] = useContext(AppContext);

    const search = async() => {

        const nameValue = inputName.current.value;
        const idValue = inputId.current.value;

        await axios.get(url)
        .then(response => {
            
            const characterByName = response.data.results.filter((e) => e.name === nameValue)
            const characterById = response.data.results.filter((e) => e.id === idValue)

            if(characterByName.length !== 0) {
                setPokemon(characterByName)
            }

            if (characterById.length !== 0) {
                setPokemon(characterById)
            }

            if (characterById.length === 0 && characterByName.length ===0){
                setPokemon(response.data.results)
            }

        })
    }
    
}


export default SearchBar; 