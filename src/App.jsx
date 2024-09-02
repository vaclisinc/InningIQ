import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getBestMatchLanguage, supportedLanguages } from './i18n';

import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Features from "./components/Features.jsx";
import Roadmap from "./components/Roadmap.jsx";
import './i18n.jsx';

import { BrowserRouter as Router } from 'react-router-dom'

//pt = padding-top, lg = large, mt = margin-top
const App = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const detectedLang = i18n.language;
        const bestMatch = getBestMatchLanguage(detectedLang);
        if (supportedLanguages.includes(bestMatch)) {
            i18n.changeLanguage(bestMatch);
        } else {
            i18n.changeLanguage('en');
        }
    }, [i18n]);

    return (
        <Router>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Home />
                <Features />
                {/* <Roadmap /> */}
            </div>
            <ButtonGradient />
        </Router>
    )
};

export default App;