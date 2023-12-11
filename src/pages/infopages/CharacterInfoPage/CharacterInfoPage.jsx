import "./CharacterInfoPageStyle.css"
import { Link, useParams } from 'react-router-dom';
import MenuIdiomas from "../../../components/MenuIdiomas/MenuIdiomas";
import { withTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import axios from "axios";

function CharacterInfoPage ({t}) {
    
    const {id} = useParams();
    const [itemData, setItemData] = useState({});
    const [house, setHouse] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const antonio = await axios.get(`http://localhost:3000/characters/${id}`);
            setItemData(antonio.data);

            const houseInfo = await axios.get(`http://localhost:3000/houses`);
        const matchingHouse = houseInfo.data.find(h => h.name === antonio.data.house);
        setHouse(matchingHouse);
        };
      
        fetchData();
  
      }, [id]);

      const renderListItems = (list) => {
        if (Array.isArray(list) && list.length > 0) {
        
            return list.map((item, index) => 
        <li key={index}>{item}
        </li>)
        
        } else{
            return <li>No data available</li>
        }
      };



return <section className="FichaPersonaje">
<div className='header'>
        <div className='volver'>
            <Link to='/characters' className='volveruwu'>
            <img className='flechita' src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697845997/Vector_jvcokm.png' alt='flechita'></img>
            <p>{t('volver')}</p>
            </Link>
        </div>
        <MenuIdiomas/>
       </div>

<div className="descripcionGeneral">
<div className="InfoGeneral">
    <div className="Infofoto">
        <img className="fotito" src={`http://localhost:3000/${itemData.image}`} alt="portrait"/>
    </div>

    <div className="InfoNombre">
<h1 className="nombre">{itemData.name}</h1>
    </div>
</div>

</div>
<div className="descripcionEspecifica">
    
    <div className="InfoA">
    <h3>{t('casa')}</h3>
    <img height="191.6px" width='160px' src={`http://localhost:3000/${house.image}`} alt="casa" />
    </div>
    
    <div className="InfoA">
    <h3>{t('alianzas')}</h3>
    <ul>
    {renderListItems(itemData.alliances)}
    </ul>
    </div>
    <div className="InfoA">
    <h3>{t('apariciones')}</h3>
        <ul>
        {renderListItems(itemData.episodes)}
        </ul>
    </div>
    <div className="InfoA">
        <h3>{t('padres')}</h3>
        <ul>
            {renderListItems(itemData.parents)}
        </ul>
    </div>
    <div className="InfoA">
        <h3>{t('hermanos')}</h3>
            <ul>
            {renderListItems(itemData.siblings)}
            </ul>
    </div>
    <div className="InfoA">
        <h3>{t('titulos')}</h3>
            <ul>
            {renderListItems(itemData.titles)}
            </ul>
    </div>
</div>
</section>
}

export default withTranslation()(CharacterInfoPage);