import React, { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './HouseInfoPages.css'; 
import { withTranslation } from 'react-i18next';
import MenuIdiomas from '../../../components/MenuIdiomas/MenuIdiomas';
import axios from 'axios';
import { useState, useEffect } from 'react';

function HousesInfoPage ({t}) {
    const {id} = useParams();
    const [itemData, setItemData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(`http://localhost:3000/houses/${id}`);
            console.log(data)
            setItemData(data);
        };
      
        fetchData();
      }, [id]);

      const renderListItems = (list) => {
        if (Array.isArray(list) && list.length > 0) {
        return list.map((item, index) => <li key={index}>{item}</li>)
        } else{
            return <li>No data available</li>
        }
      };

    return(
        <body>
        <div className='header'>
        <div className='volver'>
            <Link to='/houses' className='volveruwu'>
            <img className='flechita' src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697845997/Vector_jvcokm.png' alt='flechita'></img>
            <p>{t('volver')}</p>
            </Link>
        </div>
        <MenuIdiomas/>
       </div>
       <div className='main'>
        <img className='houseflag' alt="house flag" src={`http://localhost:3000/${itemData.image}`}></img>
        <h3 className='houseName'>{itemData.name}</h3>
       </div>
       <div className='footer'>
        <div className='cositas'>
            <h4>{t('sede')}</h4>
            <ul className='smallData'>{itemData.settlement}</ul>
        </div>
        <div className='cositas'>
            <h4>REGION</h4>
            <ul className='smallData'>{itemData.region}</ul>
        </div>
        <div className='cositas'>
            <h4>{t('alianzas')}</h4>
            <ul className='smallData'>{renderListItems(itemData.alliances)}</ul>
        </div>
        <div className='cositas'>
            <h4>{t('religiones')}</h4>
            <ul className='smallData'>{renderListItems(itemData.religions)}</ul>
        </div>
        <div className='cositas'>
            <h4>{t('fundacion')}</h4>
            <ul className='smallData'>{itemData.foundation}</ul>
        </div>
       </div>
        </body>
    )
}

export default withTranslation()(HousesInfoPage);