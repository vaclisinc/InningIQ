import Section from "./Section.jsx";
import Button from "./Button.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { curve } from "../assets/index.js";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t,i18n } = useTranslation();
//   console.log("Current language:", i18n.language);
//   console.log("Slogan translation:", t("slogan"));

//   React.useEffect(() => {
//     i18n.reloadResources(['zh-tw'], ['translation']).then(() => {
//       console.log("Translations reloaded");
//       console.log("Current language:", i18n.language);
//       console.log("Slogan translation:", t("slogan"));
//     });
//   }, [i18n.language]);

  return (
    
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
        <LanguageSwitcher />
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            {t("slogan")}
            <span className="inline-block relative">
              {" "}
              {t("InningIQ")}{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {t("subtitleSlogan")}
          </p>
          <Button href="/features" white>
            {t("getStarted")}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Home;
