
import 'simplebar-react/dist/simplebar.min.css';
import { withTranslation } from "react-i18next";

function CronologiaImpar ({sortedData, t}) {

    const impares = sortedData.filter((character, index) => index % 2 === 0);


    return (
    <div className="character-gallery-left">   
    {impares.map((character, index2) => (<div className="esc-name" key={index2}>
    <div className="simplebar-react" style={{ maxHeight: 500 }}>
    <div className="tarjeta-left">
    <p className="characterage">{character.age !== null ? character.age : t('desconocido')}</p>
    
    <p className="charactername">{character.name}</p>
    
    <img className="characterphoto" src={`http://localhost:3000/${character.image}`} alt="personajes"/>
    </div>
    </div>
    </div>
    ))}
</div>
    )
}

export default withTranslation()(CronologiaImpar);