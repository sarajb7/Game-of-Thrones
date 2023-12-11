import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            'sede': 'SETTLEMENT',
            'religiones': 'RELIGIONS',
            'alianzas': 'ALLIANCES',
            'fundacion': 'FOUNDATION',
            'juegotronos': 'GAME OF THRONES',
            'casas': 'HOUSES',
            'personajes': 'CHARACTERS',
            'cronologia':'TIMELINE',
            'casa': 'HOUSE',
            'apariciones': 'EPISODES', 
            'padres': 'PARENTS', 
            'hermanos': 'SIBLINGS', 
            'titulos': 'TITLES',
            'buscar': 'Search...',
            'volver': 'Return',
            'desconocido': "???"
        }
    },
    es: {
        translation: {
            'sede': 'SEDE',
            'religiones': 'RELIGIONES',
            'alianzas': 'ALIANZAS',
            'fundacion': 'FUNDACION',
            'juegotronos': 'JUEGO DE TRONOS',
            'casas': 'CASAS',
            'personajes': 'PERSONAJES', 
            'cronologia': 'CRONOLOGIA',
            'casa': 'CASA',
            'apariciones': 'EPISODIOS', 
            'padres': 'PADRES', 
            'hermanos': 'HERMANOS', 
            'titulos': 'TITULOS',
            'buscar': 'Buscar...',
            'volver': 'Volver', 
            'desconocido': '???'

        }
    },
}
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'en',
    });


export default i18n;