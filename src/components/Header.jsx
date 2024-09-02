import {useState} from "react";
import {useLocation} from "react-router-dom";
import {disablePageScroll, enablePageScroll} from "scroll-lock/dist/scroll-lock.js";
import { useTranslation } from 'react-i18next';

import {inningiq} from "../assets";
import {navigation} from "../constants/index.jsx";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import {HamburgerMenu} from "../constants/design/Header.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false)
            enablePageScroll();
        } else {
            setOpenNavigation(true)
            disablePageScroll();

        }
    };
    const handleClick = () => {
        if(!openNavigation) return;
        enablePageScroll();
        
        setOpenNavigation(false);
    }
    const { t } = useTranslation();
    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation? 
            'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a
                    className="block w-[12rem] xl:mr-8" href="#inningIQ">
                    <img src={inningiq} width={200} height={50} alt="InningIQ"/>
                </a>
                <nav
                    className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            item.type === "dropdown" ?
                            (<div key={item.id} className={`group relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                                <button className="nav-link uppercase w-full text-center" onClick={() => setOpenNavigation(false)}>{t(item.title).toUpperCase()}</button>
                                <div className={`${openNavigation ? 'block' : 'hidden'} lg:absolute lg:hidden lg:group-hover:block mt-2 lg:mt-0 left-1/2 lg:transform lg:-translate-x-1/2`}>
                                    {item.component === "LanguageSwitcher" && <LanguageSwitcher />}
                                </div>
                            </div>)
                            :
                            (<a key={item.id} href={item.url} onClick={handleClick}
                               className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}>{t(item.title).toUpperCase()}
                            </a>)
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>
                <a href = "#signup" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">{t("signUp")}</a>
                <Button className="hidden lg:flex" href="#login">{t("signIn")}</Button>

                <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation}/>
                </Button>
            </div>
        </div>
    );
};

export default Header;