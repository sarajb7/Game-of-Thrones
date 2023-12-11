import React from "react";
import i18n from "../Translate/Translate";
import './MenuIdiomasHome.css';

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};

const MenuIdiomasHome = () => {
    return(
        <div className='menuderecha'>
            <img className='banderitaES' src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697833408/spain_1_pmsxsq.png" alt="bandera" onClick={() => changeLanguage('es')}></img>
            <img className='banderitaEN' src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697833408/united-kingdom_1_hyhwxc.png" alt="bandera" onClick={() => changeLanguage('en')}></img>
        </div>
    )
}

export default MenuIdiomasHome