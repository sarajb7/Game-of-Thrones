import React from "react";
import i18n from "../Translate/Translate";
import { Link } from "react-router-dom";
import './MenuIdiomas.css';

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};

const MenuIdiomas = () => {
    return(
        <div className='menuderecha'>
            <Link to='/'>
            <img className='casa' src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697845997/Group_syd31k.png" alt="bandera"></img>
            </Link>
            <img className='banderitaES' src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697833408/spain_1_pmsxsq.png" alt="bandera" onClick={() => changeLanguage('es')}></img>
            <img className='banderitaEN' src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697833408/united-kingdom_1_hyhwxc.png" alt="bandera" onClick={() => changeLanguage('en')}></img>
        </div>
    )
}

export default MenuIdiomas