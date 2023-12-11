import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CronologyPage from './pages/CronologyPage.jsx/CronologyPage';
import HousesPage from './pages/HousesPage/HousesPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HomePage from './pages/HomePage/HomePage';
import "./style.css";
import CharacterInfoPage from './pages/infopages/CharacterInfoPage/CharacterInfoPage';
import HousesInfoPage from './pages/infopages/HousesInfoPage/HousesInfoPage';
import { withTranslation } from 'react-i18next';

function App() {
  return (
    <Router>
      <div className = "estilo-main">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/characters" element={<CharactersPage/>}/>
          <Route path="/characters/:id" element={<CharacterInfoPage/>}/>
          <Route path="/houses" element={<HousesPage/>}/>
          <Route path="/houses/:id" element={<HousesInfoPage/>}/>
          <Route path="/cronology" element={<CronologyPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default withTranslation()(App);
