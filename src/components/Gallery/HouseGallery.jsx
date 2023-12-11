import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HouseGallery ({data}) {
    const [houses, setHouses] = useState([]);

    useEffect(()=>{
        const getHouses = async () => {
            const {data} = await axios('http://localhost:3000/houses')
            setHouses(data);
        }
        getHouses();
    },[])

    return (
    <div className="houses-gallery">
    {data.map((item, index) => (<div className="esc-name" key={index}>
    <div className='card'>
    <Link to={`/houses/${item.id}`}>
    <img className="houselogo" src={`http://localhost:3000/${item.image}`} alt="casas"/>
    </Link>
    <p className="housename">{item.name}</p>
    </div>
    </div>
    ))}
</div>
    )
}