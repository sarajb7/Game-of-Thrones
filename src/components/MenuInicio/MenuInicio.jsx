import { Link, useLocation } from 'react-router-dom';
import "./MenuInicio.css" 
import { withTranslation } from 'react-i18next';

function MenuInicio ({t}) {
    const location = useLocation();

    return <div className="menuinicio">
        <Link  className={`boton ${location.pathname === '/characters' ? 'active' : ''}`} boton to="/characters">{t('personajes')}</Link>
        <Link  className={`boton ${location.pathname === '/houses' ? 'active' : ''}`} boton to="/houses">{t('casas')}</Link>
        <Link  className={`boton ${location.pathname === '/cronology' ? 'active' : ''}`}  to="/cronology">{t('cronologia')}</Link>
    </div>
}

export default withTranslation()(MenuInicio)