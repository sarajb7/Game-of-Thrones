import MenuInicio from "../../components/MenuInicio/MenuInicio";
import "./homepagestyle.css";
import { withTranslation } from 'react-i18next';
import MenuIdiomasHome from "../../components/MenuIdiomasHome/MenuIdiomasHome";

function HomePage ({t}) {

    

return <section className="home">
    <MenuIdiomasHome/>
    <div className="holita">
    <div className="hometitulo">
        <h1 className="hometitle">{t('juegotronos')}</h1>
    </div>
    </div>
    <MenuInicio/> 
</section>
}

export default withTranslation() (HomePage);