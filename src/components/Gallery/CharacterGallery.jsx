import './CharactersGallery.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function CharacterGallery ({data}){
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        const getCharacters = async () => {
            const {data} = await axios('http://localhost:3000/houses')
            setCharacters(data);
        }
        getCharacters();
    },[])
    return(
        <div className="all-images">
            {data.map((item,index) => (
                <div className='imagen-div' key={index}>
                    <Link to={`/characters/${item.id}`}>
                    <img className="image-character" src={`http://localhost:3000/${item.image}`} alt="images"/>
                    </Link>
                    <div className="hover">{item.name}</div>
                </div> 
                
            ))}
        </div>
            
    )   
}