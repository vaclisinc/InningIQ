import { useTranslation } from "react-i18next";
import { supportedLanguages, getBestMatchLanguage } from "../i18n";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    const bestMatch = getBestMatchLanguage(lng);
    i18n.changeLanguage(bestMatch);
  };

  const getLanguageDisplayName = (langCode) => {
    switch (langCode.toLowerCase()) {
      case "en":
        return "English";
      case "zh-tw":
        return "繁體中文";
      case "zh-cn":
        return "简体中文";
      default:
        return langCode;
    }
  };

  return (
    <div>
      {supportedLanguages.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          disabled={i18n.language.toLowerCase() === lng.toLowerCase()}
        >
          {getLanguageDisplayName(lng)}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
