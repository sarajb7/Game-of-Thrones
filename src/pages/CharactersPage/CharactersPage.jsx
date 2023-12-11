import axios from "axios";
import { useEffect, useState } from "react";
import CharacterGallery from "../../components/Gallery/CharacterGallery";
import "./CharactersPage.css";
import MenuInicio from "../../components/MenuInicio/MenuInicio";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import SearchCharacters from "../../components/Gallery/SearchCharacters";
import MenuIdiomas from "../../components/MenuIdiomas/MenuIdiomas";


export default function CharactersPage () {

    const[characters, setCharacters] = useState([])
    const[charactersFilter, setCharactersFilter] = useState([]);

   
    useEffect(() =>{
        const getCharacters = async() =>{
            const {data} = await axios('http://localhost:3000/characters')
            setCharacters(data)
            setCharactersFilter(data)
        }
        
        getCharacters();
    }, [])

    const handleSearch = (filterText) => {
        const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(filterText.toLowerCase()));
        setCharactersFilter(filteredCharacters)
    }

    return <section className="characters">
            <div className="navbar">
                <SearchCharacters onSearch={handleSearch}/>
                <MenuIdiomas/>
            </div>
            
       <div className="cuerpo">
        <SimpleBar  className= 'scroll' style={{ maxheight: '200vh', width:'80vw' }}>
            <div className="gallery">
                <CharacterGallery data = {charactersFilter}/>
            </div>
        </SimpleBar>
        </div>
        <div className="">
            <MenuInicio/>
        </div>
       
    </section>
}